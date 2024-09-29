# YouTube Focus Mode

YouTube Focus Mode is a Chrome extension that helps users stay focused by removing distracting elements on YouTube, such as related videos, end-screen suggestions, and homepage recommendations. The extension provides a simple toggle button to show or hide these elements while watching videos, helping users reduce distractions and stay on task.

## Features

- 🚫 **Hide Related Video Suggestions**: Blocks the sidebar with related videos on the right side of the video page.
- ❌ **Hide End-Screen Video Suggestions**: Removes the video suggestions that appear at the end of a YouTube video.
- 🏠 **Hide Homepage Recommendations**: Hides the recommended video section on the YouTube homepage.
- 🎚️ **Toggle Button**: Adds a toggle button on YouTube pages to switch between hiding and showing distractions.

## Installation

Follow these steps to install and use the extension locally:

1. **Clone or Download the Repository**:
   - Clone this repository to your local machine:
     ```bash
     git clone https://github.com/your-username/youtube-focus-mode.git
     ```
   - Alternatively, download the repository as a ZIP file and extract it.

2. **Open the Extensions Page**:
   - In your Chrome browser, go to `chrome://extensions/`.

3. **Enable Developer Mode**:
   - Enable **Developer mode** by toggling the switch in the top right corner.

4. **Load the Unpacked Extension**:
   - Click on the **Load unpacked** button and select the directory where you cloned or extracted the repository.

5. **Verify the Installation**:
   - Once loaded, the extension should appear in your list of extensions. Ensure it is enabled.

6. **Navigate to YouTube**:
   - Open [YouTube](https://www.youtube.com/), and you should see the "Toggle Distractions" button appear on the page.

## Usage

- Visit any YouTube page (e.g., video page or homepage).
- Use the **Toggle Distractions** button to show or hide distracting elements as per your preference.


## Project Structure
- ├── manifest.json
- ├── background.js
- ├── content.js
- ├── popup.html 

## How It Works

The `manifest.json` file is the configuration file for the Chrome extension. It specifies the extension’s properties, permissions, and scripts to be executed. The key components of the file include:

- **manifest_version**: The version of the Chrome extension manifest format being used.
- **permissions**: Required permissions such as access to `tabs` and specific URL patterns.
- **background**: Defines the background script for managing events and actions.
- **content_scripts**: Specifies which scripts to inject into the YouTube pages and which URL patterns to apply them to.




