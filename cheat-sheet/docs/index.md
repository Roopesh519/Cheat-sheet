<button id="theme-toggle" onclick="toggleTheme()">Toggle Theme</button>
<link rel="stylesheet" href="css/extra.css">

# CHEAT SHEET
______________________________________________________________________________

## Table of Contents
- [Prompts for Happy, Unhappy Path and Gherkin](#prompts-for-happy-unhappy-path-and-gherkin)
- [GIT Fundamental Commands](#git-fundamental-commands)
- [iMac Shortcuts](#imac-shortcuts)
- [Emulator Commands](#emulator-commands)

---

## Prompts for Happy, Unhappy Path and Gherkin

**Generate Happy paths and Unhappy paths**
```markdown
Write the happy paths and unhappy paths for the following scenarios step by step. Just include the paths without headings and subheadings. Start with "Acceptance Criteria" heading, then list the happy and unhappy paths.
```

**Generate Gherkin for the Acceptance Criteria**
```markdown
Generate concise Gherkin syntax examples for general button interactions based on context. Use a first-person perspective, starting with "When I click this button." For positive outcomes, include "Given I am on this screen" or "Then I should see this screen" or "Then I should be redirected to this screen." Also, include "Then I should receive a message stating that 'example'." Adapt the number of examples based on context, incorporating happy paths and unhappy paths. Break down scenarios if there are more than 3 or 4 details; otherwise, keep it concise using "And" to divide details. Always use "When I click the [Button Name] button" for button interactions. Additionally, format multiple data entries in a more concise manner (e.g., use "And I enter a valid email address, phone number, and mobile number"). Ensure that error or success messages are consistently displayed as "I receive a message stating that 'message'."

Consider the specified Conditions of Satisfaction (COS) for the Gherkin syntax. Provide all possible scenarios and scenario outlines. Include invalid scenarios in Gherkin examples.

When you are ready, say yes and I will enter the scenarios.  
Think step by step.

The format is

Acceptance Criteria
(nothing under acceptance criteria)
Happy Paths:
(All the happy paths with number bullets )
Unhappy Paths:
(All the unhappy paths with number bullets )
```
---

## GIT Fundamental Commands

### Git Fundamentals
1. `git add .`
2. `git commit -m “EX-111 #time 1h 30m feature: write the updates”`
3. `git push`
4. `git pull`
5. `git stash` - If you have added changes but want to switch to another branch before committing, stash will hide the changes and retrieve them later.
6. `git stash apply`

### Important Commands
1. Dry run
```markdown
npm run bdd_dry_run
```
2. Run localhost
```markdown
npm run dev
```
3. Run single feature
```markdown
npx cucumber-js path/to/your/file.feature --import test
```
4. Run all the features  
8. Install Packages
```markdown
npm i --force
```
```markdown
npm install --force
```

### Test the Pipeline Locally
```markdown
pm2 kill
```
```markdown
npm run build
```
```markdown
pm2 start scripts/server.js
```
```markdown
node scripts/bdd_unit_testing_azure.js
```
```markdown
node scripts/integration_testing.js
```

### Miscellaneous Commands:
1. Remove a directory:
```markdown
rm -rf directory-name
```
```markdown
rm -r directory-name
```

---

## iMac Shortcuts

### System and Finder Shortcuts
- `Command (⌘) + Space`: Open Spotlight search.
- `Command (⌘) + Tab`: Switch between open applications.
- `Command (⌘) + Option (⌥) + Esc`: Force quit an application.
- `Command (⌘) + H`: Hide the current application.
- `Command (⌘) + Q`: Quit the current application.
- `Command (⌘) + N`: Open a new Finder window.
- `Command (⌘) + Shift (⇧) + N`: Create a new folder.
- `Command (⌘) + Delete (⌫)`: Move selected item to the Trash.
- `Command (⌘) + Shift (⇧) + Delete (⌫)`: Empty the Trash.

### Text Editing and Document Shortcuts
- `Command (⌘) + C`: Copy selected item.
- `Command (⌘) + V`: Paste copied item.
- `Command (⌘) + X`: Cut selected item.
- `Command (⌘) + Z`: Undo the previous action.
- `Command (⌘) + Shift (⇧) + Z`: Redo the previous undo.
- `Command (⌘) + A`: Select all items.
- `Command (⌘) + F`: Find items in a document or open a Find window.
- `Command (⌘) + S`: Save the current document.
- `Command (⌘) + P`: Print the current document.
- `Command (⌘) + T`: Open a new tab (in supported apps).

### Window and Application Management
- `Command (⌘) + M`: Minimize the current window.
- `Command (⌘) + Option (⌥) + M`: Minimize all windows of the current application.
- `Command (⌘) + W`: Close the current window.
- `Command (⌘) + Option (⌥) + W`: Close all windows of the current application.
- `Command (⌘) + Control (⌃) + F`: Toggle full-screen mode.

### Screenshot Shortcuts
- `Command (⌘) + Shift (⇧) + 3`: Capture the entire screen.
- `Command (⌘) + Shift (⇧) + 4`: Capture a selected area of the screen.
- `Command (⌘) + Shift (⇧) + 5`: Open the screenshot toolbar to take screenshots and screen recordings.

### Accessibility and Special Features
- `Command (⌘) + Option (⌥) + D`: Show or hide the Dock.
- `Command (⌘) + Control (⌃) + Space`: Open the Character Viewer to select emojis and symbols.
- `Command (⌘) + Control (⌃) + Q`: Lock the screen.

---

## Emulator Commands

### Emulator Path
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Run Emulator
```bash
npm run android:dev
```

### Detox Build Command
```bash
detox build -c android.emu.debug 
```

### Build the Android App for Testing
```bash
npm run prebuild
```
```markdown
cd android
```
```markdown
./gradlew app:assembleRelease
```

### Get the APK File
Retrieve the APK from:
```bash
Android/app/build/outputs/apk/release/app-release.apk
```
<script src="js/copy-button.js"></script>
