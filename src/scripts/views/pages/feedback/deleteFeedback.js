import UrlParser from '../../../routes/url-parser';
import ContentData from '../../../data/ContentData';
const deleteFeedback = {
  async init() {
    this.id = UrlParser.parseActiveUrlWithoutCombiner().id;
    this.contentData = new ContentData()
    await this.contentData.requestPOSTWithoutForm({
      request : `testimoni/delete`,
      data : {
        id : this.id,
      }
    }).then((e)=>{
      window.location.href = "#/feedback"
    })
    return '';
  },
  async afterRender() {
  },
};

export default deleteFeedback;
