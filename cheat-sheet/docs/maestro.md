<!-- <button id="theme-toggle" onclick="toggleTheme()">Toggle Theme</button> -->
<link rel="stylesheet" href="css/extra.css">

# **Maestro Setup for E2E Testing in Expo Project**

This guide outlines the steps to set up and configure Maestro for end-to-end (E2E) testing in your existing Expo project.

## **1. Verify Project Setup**

Make sure you have access to the repository with the Expo project and are working on the correct branch.

## **2. Install Maestro CLI Locally**

To install Maestro on your local machine for testing:

1. Open a terminal and run the following commands:

    ```bash
    # Install Maestro globally
    brew tap mobile-dev-inc/tap
    brew install maestro
    maestro --version
    ```

2. If you encounter any permission issues with Homebrew, you may need to fix them:

    ```bash
    sudo chown -R $(whoami) /usr/local/Cellar /usr/local/Homebrew /usr/local/bin /usr/local/sbin /usr/local/share /usr/local/opt /usr/local/etc /usr/local/include /usr/local/lib
    ```

3. Re-run the installation commands:

    ```bash
    brew tap mobile-dev-inc/tap
    brew install maestro
    brew doctor
    ```

4. For installation options without Homebrew, refer to the [Maestro Installation Guide](https://maestro.mobile.dev/getting-started/installing-maestro).

## **3. Add an environment variable pointing to the Android SDK location **

  If you are on macOS or Linux, add an environment variable pointing to the Android SDK location in ~/.bash_profile (or ~/.zshrc if you use Zsh). For example: export ANDROID_HOME=/your/path/here.

  Add the following lines to your /.zprofile or ~/.zshrc (if you are using bash, then ~/.bash_profile or ~/.bashrc) config file:

  ```markdown
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```

  Reload the path environment variables in your current shell:

  ```markdown
  source $HOME/.zshrc
  source $HOME/.bashrc
  ```

Finally, make sure that you can run adb from your terminal.

## **4. Configure EAS Build**

If EAS Build is not yet set up, follow these steps:

1. Initialize EAS in your project:

  The following command creates a new project on Expo servers for your app and creates eas.json in the project's root directory:

    ```bash
    eas init
    eas build:configure --local
    ```

2. Add the following to your `app.config.js` file to link the project to the correct owner:

    ```json
    {
      "owner": "expo-username"
    }
    ```

3. If this configuration is already set up by your team, you may skip this step.

## **5. Disable New Android Build Infrastructure**

For Maestro E2E testing, you must disable the New Android Build Infrastructure:

1. Visit the [Expo Project Settings](https://expo.dev/accounts/[account]/projects/[project]/settings).
2. Disable the **New Android Build Infrastructure** option.

## **6. Create Maestro Test Flows**

1. Create a `maestro` directory in the root of your project:

    ```bash
    mkdir maestro
    ```

2. Inside the `maestro` directory, create test flow files, such as:

   - **home.yaml** (for testing the home screen):

     ```yaml
     appId: your.expo.project.appId
     ---
     - launchApp
     - assertVisible: 'Welcome!'
     ```

   - **expand_test.yaml** (for testing the Explore screen):

     ```yaml
     appId: your.expo.project.appId
     ---
     - launchApp
     - tapOn: 'Explore.*'
     - tapOn: '.*File-based routing'
     - assertVisible: 'This app has two screens.*'
     ```

> Replace `your.expo.project.appId` with the actual app ID (e.g., `com.project.app`).

## **7. Test Locally**

To run the tests locally on an emulator or simulator:

```bash
# Run the tests
maestro test maestro/home.yaml
maestro test maestro/expand_test.yaml
```

## **8. Create Custom EAS Build Workflow**

To integrate Maestro with your EAS build process, create a custom build workflow:

1. Create the `.eas/build` directory in your project root:

    ```bash
    mkdir -p .eas/build
    ```

2. Inside `.eas/build`, create a file called `build-and-maestro-test.yml`:

    ```yaml
    build:
      name: Create a build and run Maestro tests on it
      steps:
        - eas/build
        - eas/maestro_test:
            inputs:
              flow_path: |
                maestro/home.yaml
                maestro/expand_test.yaml
    ```

This YAML file defines the build steps, including building the app and running Maestro tests.

## **9. Modify `eas.json`**

Update your `eas.json` file to include a new profile for running Maestro tests:

```json
{
  "build": {
    "build-and-maestro-test": {
      "withoutCredentials": true,
      "config": "build-and-maestro-test.yml",
      "android": {
        "buildType": "apk",
        "image": "latest"
      },
      "ios": {
        "simulator": true,
        "image": "latest"
      }
    }
  }
}
```

## **10. Run EAS Build with Maestro Tests**

To trigger the EAS build and run the Maestro tests, use the following command:

```bash
eas build --profile build-and-maestro-test --local
```

This will build the app and execute the Maestro tests as defined in the workflow.

## **11. View Test Results**

Once the build and tests are complete, you can view the results and download test artifacts (e.g., screenshots) from the EAS build page. Artifacts generated by Maestro will also be stored locally at `~/.maestro/tests`.

---

## Conclusion

By following these steps, you have successfully set up Maestro for E2E testing in your Expo project. Feel free to reach out if you encounter any issues during the process.
```

This `maestro.md` file provides a comprehensive guide for setting up Maestro E2E testing in an Expo project. Let me know if any adjustments are needed!


<script src="js/copy-button.js"></script>
