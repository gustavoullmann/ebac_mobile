import { $ } from '@wdio/globals'

class LoginPage {
  get email() {
    return $('id:email')
  }

  get password() {
    return $('id:password')
  }

  get firstName() {
    return $('id:firstName')
  }

  get lastName() {
    return $('id:lastName')
  }

  get phone() {
    return $('id:phone')
  }

  get repassword() {
    return $('id:repassword')
  }

  get btnCreate() {
    return $('id:create')
  }

  get btnBack() {
    return $('//android.view.ViewGroup[@content-desc=""]')
  }

  async login(email, password){
    await this.email.setValue(email);
    await this.password.setValue(password);
    await this.btnLogin.click()    
  }

  async signUp( firstName, lastName, phone, email, password){
    await this.firstName.setValue(firstName)
    await this.lastName.setValue(lastName)
    await this.phone.setValue(phone)
    await this.email.setValue(email)
    await this.password.setValue(password)
    await this.repassword.setValue(password)
    await this.btnCreate.click()
  }

  async goBack(){
    await this.btnBack.click()
  }
}

export default new LoginPage();
