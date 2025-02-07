# WebDriverFoodie
Foodie Automation Project [Pactice]

# Foodie Automation Project

This project automates the testing of the Foodie application using WebdriverIO and the Mocha framework. The tests are written for an Android application and leverage Appium for mobile automation.

---

## Project Structure

### **Root Directory**
- **app/**: Contains the APK file for the application under test.
- **node_modules/**: Directory for project dependencies.
- **tests/**: Contains the test scripts and page object files.
  - **pages/**: Includes the Page Object Model (POM) files for modular and maintainable test development.

  - **specs/**: Test specifications.
    
- **config.json**: Configuration file for the project.
- **package.json**: Lists project dependencies and scripts.
- **package-lock.json**: Provides exact dependency versions for consistent builds.
- **wdio.conf.js**: WebdriverIO configuration file.

---

## Prerequisites

- Node.js installed on your machine.
- Appium installed and running.
- WebDriverIO CLI installed globally.
- An Android emulator or real device set up.
- APK file of the application to be tested.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd foodie
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the `wdio.conf.js` file with your device capabilities.
```bash
capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator

        platformName: "Android",
        "appium:deviceName": "Galaxy A54",
        "appium:platformVersion": "14.0",
        "appium:automationName": "UiAutomator2",
        "appium:app": "app/foodiv7.2.9_antisplit.apk",
        "appium:appPackage": "com.foodiBd",
        "appium:appActivity": "com.foodiBd.MainActivity",
        "appium:autoGrantPermissions": true,
        "appium:noReset": true

    }]
```
---

## Running the Tests

1. Start the Appium server:
   ```bash
   appium
   ```

2. Execute the tests:
   ```bash
   npx wdio wdio.conf.js
   ```

---

## Key Features

- **Page Object Model**: Test scripts are modular and reusable.
- **Mobile Automation**: Specifically designed for Android apps using Appium.
- **WebDriverIO with Mocha**: For scalable and maintainable test frameworks.

---

## Example Usage


---

## Troubleshooting

- **Appium Server Issues**:
  Ensure the Appium server is running and the device is properly connected.
- **Emulator or Device**:
  Verify the emulator/device is properly set up and matches the capabilities in `wdio.conf.js`.
- **Dependency Issues**:
  Run `npm install` again to resolve missing dependencies.

---

## Contributing

Feel free to fork the repository and create pull requests for new features or fixes.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

