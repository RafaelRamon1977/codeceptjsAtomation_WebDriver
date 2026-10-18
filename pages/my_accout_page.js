const { I } = inject();

export default {
 
  button: {
    userName: '#fname'

  },
 validateUserLogged(name, lastName){
 I.waitForElement(this.button.userName)
   I.seeInField(this.button.userName, name)
   I.seeInField('#lname', lastName)
 }
}
