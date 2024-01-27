import { Plugin } from "obsidian";

export interface PicovoiceSettings {
	// Replace with PicoVoiceLibrary settings
	accessKey: string;
	modelPath: string;
	contextPath: string;
	saveAudioFile: boolean;
	saveAudioFilePath: string;
	createNewFileAfterRecording: boolean;
	createNewFileAfterRecordingPath: string;
	endpointDurationSec: number,
	enableAutomaticPunctuation: boolean
}

export const DEFAULT_SETTINGS: PicovoiceSettings = {
	// Default settings for PicoVoiceLibrary
	accessKey: "AccessKey obtain from the Picovoice Console (https://console.picovoice.ai/)",
	modelPath: "path/to/picovoice/model.pv",
	contextPath: "path/to/picovoice/context.rhn",
	saveAudioFile: false,
	saveAudioFilePath: "",
	createNewFileAfterRecording: false,
	createNewFileAfterRecordingPath: "",
	endpointDurationSec: 0.4,
	enableAutomaticPunctuation: true
};

export class SettingsManager {
	private plugin: Plugin;

	constructor(plugin: Plugin) {
		this.plugin = plugin;
	}

	async loadSettings(): Promise<PicovoiceSettings> {
		return Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.plugin.loadData()
		);
	}

	async saveSettings(settings: PicovoiceSettings): Promise<void> {
		await this.plugin.saveData(settings);
	}
}
