import UrlParser from '../../../routes/url-parser';
import ContentData from '../../../data/ContentData';
const deleteProtofolio = {
  async init() {
    this.id = UrlParser.parseActiveUrlWithoutCombiner().id;
    this.contentData = new ContentData()
    await this.contentData.requestPOSTWithoutForm({
      request : `portofolio/delete`,
      data : {
        id : this.id,
      }
    }).then((e)=>{
      window.location.href = "#/portofolio"
    })
    return '';
  },
  async afterRender() {
  },
};

export default deleteProtofolio;
