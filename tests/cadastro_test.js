
import { faker } from '@faker-js/faker';

const name = faker.person.firstName();
const lastName = faker.person.lastName();

Feature('Cadastro de Usuário');

Scenario('Validar campo nome vazio no cadastro de conta', ({ I }) => {
    I.amOnPage('/cadastro');
    I.click('.fa-lock');
    //I.fillField('#user', faker.person.fullName());
    //I.fillField('#email', faker.internet.email());
    //I.fillField('#password', '123456');
    I.click('#btnRegister');
    I.waitForText('errorMessageFirstName', 5);
    I.see('O campo nome deve ser prenchido')
});

Scenario('Cadastrar um novo usuário com sucesso', ({ I }) => {
    I.amOnPage('/cadastro');
    I.click('.fa-lock');
    I.fillField('#user', faker.person.fullName());
    I.fillField('#email', faker.internet.email());
    I.fillField('#password', '123456');
    I.click('#btnRegister');
});

Scenario('Login com Sucesso', async ({ I }) => {
    I.amOnPage('/');
    I.click('a[href="/login"]');
    I.waitForVisible('#user', 5);
    I.fillField('#user', faker.internet.email());
    I.waitForVisible('#password', 5);
    I.fillField('#password', '123456');
    I.waitForVisible('#btnLogin', 10);
    I.click('#btnLogin');
    I.waitForText('Login realizado', 10);
    I.see('Login realizado');
    I.waitForVisible('.swal2-confirm.swal2-styled', 10);
    I.click('.swal2-confirm.swal2-styled');
    I.scrollPageToBottom();

});

Scenario('Cadastro de Informações de pagamento', async ({ I }) => {

    //console.log(`${name} ${lastName}`);

    I.amOnPage('/');
    I.click('a[href="/login"]');
    I.waitForVisible('#user', 5);
    I.fillField('#user', faker.internet.email());
    I.waitForVisible('#password', 5);
    I.fillField('#password', '123456');
    I.waitForVisible('#btnLogin', 5);
    I.click('#btnLogin');
    I.waitForText('Login realizado', 10);
    I.see('Login realizado');
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
    I.click('#css');
    const placeOrderButton = '//button[contains(translate(normalize-space(.), "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "PLACE ORDER")]';
    I.waitForClickable(placeOrderButton, 10);
    I.click(placeOrderButton);

});   
