# Speech-to-text in Obsidian using Pico Voice 🗣️📝

Obsidian PicoVoice is a plugin that turns your speech into written notes in almost real time. Just speak your mind, and let [PicoVoice](https://picovoice.ai/docs/cheetah/) do the rest. 

## Why did I assemble this?
There is empirical evidence of a phenomenon called **conjoint retention** or **dual coding**, meaning the combination of verbal and non-verbal representations to faciliate increased retention of information. By saying words and seeing the words appear in almost real time it is suggested that this will help retain understanding and develop new insights. 

## 🚀 Getting Started
1. This plugin can be installed from "Community Plugins" inside Obsidian.
2. For this plugin to work, you will need to provide your PicoVoice key. See the Settings section of this README file for more information.

## 🎯 How to Use

### Access Recording Controls

Click on the ribbon button to open the recording controls interface.

### Record Audio

Use the "Start" button to begin recording and see the transcript generate as you talk. Click the "Stop" button once you're done. 

> You can quickly start or stop recording using the `Alt + Q` shortcut.

### Command Palette for Quick Actions

"Start/Stop recording" action can be accessed through the command palette.

## ⚙️ Settings

-   Access Key: 

-   API URL: Specify the endpoint that will be used to make requests to the Whisper API. This should not be changed unless you have a specific reason to use a different endpoint.

-   Model: Choose the machine learning model to use for generating text transcriptions. This should not be changed unless you have a specific reason to use a different model.

-   Language: Specify the language of the message being whispered. For a list of languages and codes, consult this [link](https://github.com/openai/whisper/blob/main/whisper/tokenizer.py).

-   Save recording: Toggle this option to save the audio file after sending it to the Whisper API. When enabled, you can specify the path in the vault where the audio files should be saved.

-   Recordings folder: Specify the path in the vault where to save the audio files. Example: `folder/audio`. This option is only available if "Save recording" is enabled.

-   Save transcription: Toggle this option to create a new file for each recording, or leave it off to add transcriptions at your cursor. When enabled, you can specify the path in the vault where the transcriptions should be saved.

-   Transcriptions folder: Specify the path in the vault where to save the transcription files. Example: `folder/note`. This option is only available if "Save transcription" is enabled.

## 🤝 Contributing

We welcome and appreciate contributions, issue reports, and feature requests from the community! Feel free to visit the [Issues](https://github.com/nikdanilov/whisper-obsidian-plugin/issues) page to share your thoughts and suggestions.

## 💬 Whisper API

-   For additional information, including limitations and pricing related to using the Pico API, check out the [Pico Voice Cheetah](https://picovoice.ai/docs/cheetah/)

## ⚒️ Manual Installation

If you want to install this plugin manually, use the following steps:

1. Download `manifest.json`, `main.js`, `styles.css` from the [GitHub repository](https://github.com/nikdanilov/whisper-obsidian-plugin/releases) into the `plugins/whisper` folder within your Obsidian vault.
2. Click on `Reload plugins` button inside `Settings > Community plugins`.
3. Locate the "Whisper" plugin and enable it.
4. In the plugin settings include your OpenAI API key.

## 🤩 Say Thank You

Are you finding value in this plugin? You can go [here](https://ko-fi.com/indate) if you'd like to fund future projects.

---
