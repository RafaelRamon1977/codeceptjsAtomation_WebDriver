/** @type {CodeceptJS.MainConfig} */
import bootstrapServer, { teardown as teardownServer } from './server/server.js';

export const config = {
  name: 'cadastro_codeceptjs',
  // tests: './tests/*_test.js',
  tests: './steps/*_test1.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://automationpratice.com.br/',
      browser: 'chrome',
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {
          args: ['--window-size=1920,1200'
            // '--headless'
          ]
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    home_page: './pages/home_page.js',
    login_page: './pages/login_page.js',
    create_userPage: './pages/create_user_page.js',
    my_accout_page: './pages/my_accout_page.js'
  },
  bootstrap: bootstrapServer,
  teardown: teardownServer,

  noGlobals: true,
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshot: {
      enabled: true,
      on: 'fail'
    },
    testomatio: {
      enabled: true,
      require: '@testomatio/reporter/codecept',
      html: true,
      reportDir: 'output/report',
      uniqueScreenshotNames: false
    },
    auth: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        user: {
          login: (I) => {
            I.amOnPage('/');
            I.click('a[href="/login"]');
            I.waitForVisible('#user', 10);
            I.fillField('#user', 'rafa.ramon@hotmail.com');
            I.waitForVisible('#password', 10);
            I.fillField('#password', '123456');
            I.click('#btnLogin');
          },
          check: (I) => {
            I.amOnPage('/');
            I.see('rafa.ramon@hotmail.com');
          }
        }
      }
    }
  },
};