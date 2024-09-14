import { $ } from '@wdio/globals'

class HomePage {

  async openMenu(menu){
    await $(`id:tab-${menu}`).click();
  }

  async pageTitle(){
    return await $('//android.widget.TextView[@text="EBAC Store"]')
  }
}

export default new HomePage();
