import UrlParser from '../../../routes/url-parser';
import ContentData from '../../../data/ContentData';
const deleteUserAdmin = {
  async init() {
    this.id = UrlParser.parseActiveUrlWithoutCombiner().id;
    this.contentData = new ContentData()
    await this.contentData.requestPOSTWithoutForm({
      request : `useradmin/delete`,
      data : {
        id : this.id,
      }
    }).then((e)=>{
      window.location.href = "#/users"
    })
    return '';
  },
  async afterRender() {
  },
};

export default deleteUserAdmin;
