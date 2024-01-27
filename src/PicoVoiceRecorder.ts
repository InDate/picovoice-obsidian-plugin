import { Notice } from "obsidian";
import Picovoice from "main";
import { Cheetah, CheetahActivationLimitReachedError } from "@picovoice/cheetah-node";
import { PvRecorder } from "@picovoice/pvrecorder-node";

export interface AudioRecorder {
	startRecording(): AsyncGenerator<string>;
	getRecordingState(): string;
	stopRecording(): Promise<void>;
}

export class PicoVoiceRecorder implements AudioRecorder {
	private plugin: Picovoice;
	private engineInstance;
	private recorder: any;
	private recording: boolean;

	constructor(plugin: Picovoice) {
		this.plugin = plugin;
		
		if (!this.plugin.settings.accessKey) {
			new Notice(
				"Access key is missing. Please add your Access key in the settings."
			);
			return;
		}

		this.engineInstance = new Cheetah(
			this.plugin.settings.accessKey,
			{
				modelPath: this.plugin.settings.modelPath,
				libraryPath: this.plugin.settings.contextPath,
				endpointDurationSec: this.plugin.settings.endpointDurationSec,
				enableAutomaticPunctuation: this.plugin.settings.enableAutomaticPunctuation
			}
		);
	}

  async *startRecording() {
    console.info(`Using device: ${this.recorder.getSelectedDevice()}`);
	this.recorder = new PvRecorder(this.engineInstance.frameLength);
    this.recorder.start();
    this.recording = true;

	try {
		while (this.recording) {
			const pcm = await this.recorder.read();
			
			const [partialTranscript, isEndpoint] = this.engineInstance.process(pcm);
			yield partialTranscript;

			if (isEndpoint) {
			const finalTranscript = this.engineInstance.flush();
			yield finalTranscript;
			}
		}
	} catch (err) {
		if (err instanceof CheetahActivationLimitReachedError) {
			new Notice(`AccessKey '${this.plugin.settings.accessKey}' has reached its processing limit.`);
			console.error(`AccessKey '${this.plugin.settings.accessKey}' has reached its processing limit.`);
		} else {
			console.error("Error:", err);
			new Notice("Error: " + err);
		}
	} finally {
		await this.cleanup();
	}
  }

  async stopRecording(): Promise<void> {
	this.recording = false;
  }

  public getRecordingState(): string {
    if (!this.recorder) {
      return "inactive";
    } else if (this.recording) {
      return "recording";
    } else {
      return "stopped";
    }
  }

  private async cleanup(): Promise<void> {
	let finalTranscript = null;

	if (this.recorder.isRecording()) {
		this.recorder.stop();
		finalTranscript = this.engineInstance.flush();
	}
	this.recorder.release();
	this.engineInstance.release();
	
	return finalTranscript;
  }
}
