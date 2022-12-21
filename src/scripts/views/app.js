import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import footer from './components/layouts/footer'
import header from './components/layouts/header'
import ContentData from '../data/ContentData';
class App {
  constructor({ header, main, footer }){
    $.fn.dataTableExt.sErrMode = 'throw';
    this.contentData = new ContentData()
    this.header = header;
    this.main = main;
    this.footer = footer;
    this.initialAppShell();
  }

  initialAppShell() {
    this.header.innerHTML = header.init();
    this.footer.innerHTML = footer.init();
    header.afterRender();
    footer.afterRender();
  }
  async validateSessionUser(){
    let dataUserAdmin = await this.contentData.getDataUserAdmin();
    let user = window.sessionStorage.getItem('user');
    user = JSON.parse(user) || null
    if(user != undefined){
        dataUserAdmin.forEach((e)=>{
          if(e.username == user.username && e.password == user.password ){
            return true;
          }
        })
    }else{
      return false
    }
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    let page = routes[url];
    if(await this.validateSessionUser() == false){
      console.log(!await this.validateSessionUser())
      page = routes["/login"]
    }
    this.main.innerHTML = await page.init();
    await page.afterRender();
  }
}

export default App;
