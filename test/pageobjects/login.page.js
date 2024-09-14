import { $ } from '@wdio/globals'

class LoginPage {
  get email() {
    return $('id:email')
  }

  get password() {
    return $('id:password')
  }

  get btnLogin() {
    return $('id:btnLogin')
  }

  get btnSignUp() {
    return $('id:signUp')
  }

  async login(email, password){
    await this.email.setValue(email);
    await this.password.setValue(password);
    await this.btnLogin.click()    
  }

  async signUpClick(){
    await this.btnSignUp.click();
  }
}

export default new LoginPage();
