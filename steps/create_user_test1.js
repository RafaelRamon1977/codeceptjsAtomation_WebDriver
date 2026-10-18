import { faker } from '@faker-js/faker';
const name = faker.person.firstName();
const lastName = faker.person.lastName();
//tem que criar uma constate para o gerador de cpf
//const cpfName = require('../utils/cpf_name.js');
const { I, home_page, login_page, create_userPage, my_accout_page } = inject();

Feature('create user');


//para usar o gerador de cpf basta chamar nessa forma:
// Before Suite(() => {
// console.log(cpfName.cpfName());      
//}
Scenario('Login with success', ({ login }) => {
    login('user');
    I.waitForText('Login realizado', 10);
}),
    Scenario('Cadastro de Informações de pagamento', () => {

        //console.log(`${name} ${lastName}`);

        I.amOnPage('/');
        //home
        home_page.accessLoginPage();
        //login
        login_page.submitbillingsInformation(faker.internet.email(), '123456');


        //create Billings Information
        create_userPage.submitbillingsInformationWithSucces(name, lastName);
        create_userPage.createUser();
        // my account
        my_accout_page.validateUserLogged(name, lastName);


        // I.wantForElemenent('#fname', 10);
        // var tituloPrincipal = I.grabTextFrom('.check-heading');
        // validacao.equal(tituloPrincipal, 'Billings Information');

        // I.waitForVisible('#user', 5);
        // I.fillField('#user', faker.internet.email());
        // I.waitForVisible('#password', 5);
        // I.fillField('#password', '123456');
        // I.waitForVisible('#btnLogin', 5);
        // I.click('#btnLogin');
        // I.waitForText('Login realizado', 10);
        // I.see('Login realizado');
        // I.waitForVisible('.swal2-confirm.swal2-styled', 10);
        // I.click('.swal2-confirm.swal2-styled');
        // I.scrollPageToBottom();
        // I.waitForElement('a[href="/checkout-one"]', 10);
        // I.scrollIntoView('a[href="/checkout-one"]');
        // I.forceClick('a[href="/checkout-one"]');
        // I.waitInUrl('/checkout-one', 10);
        // I.waitForText('Billings Information', 10);
        // I.see('Billings Information');
        // I.fillField('#fname', name);
        // I.fillField('#lname', lastName);
        // I.fillField('#cname', 'ABS Testes S/A');
        // I.fillField('#email', 'joao.silva@qazando.com.br');
        // I.selectOption('#country', 'usa');
        // I.selectOption('#city', 'Aland Islands');
        // I.fillField('#zip', '21051-040');
        // I.scrollPageToBottom();
        // I.fillField('#faddress', 'Rua Itapera, 344')
        // I.fillField('#messages', 'bloco 5, apto 203, referenci ao lado da padaria do Ernesto');
        // I.click('#materialUnchecked');
        // I.click('#css');
        // const placeOrderButton = '//button[contains(translate(normalize-space(.), "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "PLACE ORDER")]';
        // I.waitForClickable(placeOrderButton, 10);
        // I.click(placeOrderButton);

    });

