export const config = {
    runner: 'local',
    port: 4723,

    // user: 'oauth-gustavoullmann-63877',
    // key: ,
    // hostname: 'ondemand.us-west-1.saucelabs.com',
    // port: 443,
    // baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 2,
    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'Ebac',
            'appium:platformVersion': '9.0',
            'appium:automationName': 'UiAutomator2',     
            'appium:app': `${process.cwd()}/app/ebacshop.apks`,
            'appium:app': '/home/gustavo/git/ebac_automa_mobile_3/app/ebacshop.apks',
            'appium:appWaitActivity': '.MainActivity',
            'appium:disableIdLocatorAutocompletion': true,
            "appium:fullReset": false,
            "appium:noReset": false,
        }
        // {
        //     platformName: 'Android',
        //     'appium:app': 'storage:filename=ebacshop.aab',
        //     'appium:deviceName': 'Android GoogleAPI Emulator',
        //     'appium:platformVersion': '12',
        //     'appium:automationName': 'UiAutomator2',
        //     'appium:disableIdLocatorAutocompletion': true,
        //     'sauce:options': {
        //        build: 'appium-build-teste-ebacshop',
        //        name: 'Ebac Shop test',
        //        deviceOrientation: 'PORTRAIT',
        //        appiumVersion: '2.0.0',
        //      },
        // }
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec', 
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
            await driver.takeScreenshot();
    }
}
