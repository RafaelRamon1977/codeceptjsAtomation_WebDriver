const { I } = inject();

export default {
  // locators and helper methods for the home page
  fields: {
    
  },

  button: {
    loginButton: 'a[href="/login"]'
  },

  messages: {

  },

  accessLoginPage() {
    I.click(this.button.loginButton);
  }
};
