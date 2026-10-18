const { I } = inject();

export default {

  // insert your locators and methods here
  fields: {

    firstNameField: '#fname',
    lastNameField: '#lname',
    companyNameField: '#cname',
    emailField: '#email',
    countryField: '#country',
    cityField: '#city',
    zipCodeField: '#zip',
    addressField: '#faddress',
    messageField: '#messages'

  },

  buttons: {
    createAccountButton: '#btnRegister',
    buttonSave: '#materialUnchecked',
    placeHolderButton: '#css',
    savecheck: '#materialUnchecked',
    placeOrderButton: '//button[contains(translate(normalize-space(.), "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "PLACE ORDER")]'
  },

  messages: {
    // Billings Information registred with success!
    // Order success!
  },

  labels: {
    createBillingsInformationLabel: '.check-heading'

  },


  submitbillingsInformationWithSucces(name, lastName) {
    I.waitForVisible('.swal2-confirm.swal2-styled', 10);
    I.click('.swal2-confirm.swal2-styled');
    I.scrollPageToBottom();
    I.waitForElement('a[href="/checkout-one"]', 10);
    I.scrollIntoView('a[href="/checkout-one"]');
    I.forceClick('a[href="/checkout-one"]');
    I.waitInUrl('/checkout-one', 10);
    I.waitForText('Billings Information', 10);
    I.see('Billings Information');
    I.fillField('#fname', name);
    I.fillField('#lname', lastName);
    I.fillField('#cname', 'ABS Testes S/A');
    I.fillField('#email', 'joao.silva@qazando.com.br');
    I.selectOption('#country', 'usa');
    I.selectOption('#city', 'Aland Islands');
    I.fillField('#zip', '21051-040');
    I.scrollPageToBottom();
    I.fillField('#faddress', 'Rua Itapera, 344')
    I.fillField('#messages', 'bloco 5, apto 203, referenci ao lado da padaria do Ernesto');
    I.click('#materialUnchecked');
    I.click(this.buttons.placeHolderButton);
  },

  // my accout

  createUser(){
    I.waitForClickable(this.buttons.placeOrderButton, 10);
    I.click(this.buttons.placeOrderButton);
  }
};