import UrlParser from '../../../routes/url-parser';
import ContentData from '../../../data/ContentData';
const deleteProtofolio = {
  async init() {
    this.id = UrlParser.parseActiveUrlWithoutCombiner().id;
    this.contentData = new ContentData()
    await this.contentData.requestPOSTWithoutForm({
      request : `produk/delete`,
      data : {
        id : this.id,
      }
    }).then((e)=>{
      window.location.href = "#/products"
    })
    return '';
  },
  async afterRender() {
  },
};

export default deleteProtofolio;
