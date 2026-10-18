const { I } = inject();


export default {

  
  fields: {
    emailAddressField: '#user',
    passwordField: '#password',
    
  },

  buttons: {
    
    
    loginButton: '#btnLogin',

  },

  messages: {

  },

  
  submitbillingsInformation(email, password) {
    I.fillField(this.fields.emailAddressField, email);
    I.fillField(this.fields.passwordField, password);
    I.click(this.buttons.loginButton);
  }
}
