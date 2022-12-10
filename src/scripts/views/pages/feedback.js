import sidebar from '../components/layouts/sidebar.js';
import ContentData from '../../data/ContentData';
const feedback = {
  async init() {
    this.dataAPI = new ContentData();
    this.data = await this.dataAPI.getDataFeedback();
    console.log(this.data)
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content h-full">
    	<div class="w-full h-[84px] flex">
    		<h1 class="my-auto ml-[24px] text-[24px] font-[600] font-primary basis-3/4">Feedback</h1>
    		<p class="my-auto mr-[50px] text-[16px] text-right font-[600] font-primary basis-1/4">Hello, Adminxx</p>
    	</div>
      <div class="w-full min-h-full bg-gray-200 flex">
        <ul class="feedback-list w-11/12 flex-col h-[89vh] py-[40px] mx-auto overflow-x-scroll">
        </ul>
    	</div>
    </div>
		`;
  },
  showFeedbackItem(){
    this.data.forEach((e)=>{
      $('.feedback-list').append(this.templateItem(e));
    })
  },
  templateItem(data){
    let star = "";
    for (var i = 0; i < data.rating; i++) {
      star += '<i class="fa fa-star text-[15px] md:text-[25px] mx-[2px] color-primary"></i>'
    }
    for (var i = data.rating; i < 5; i++) {
      star += '<i class="fa fa-star text-[15px] md:text-[25px] mx-[2px] text-gray-400"></i>'
    }

    return `
          <li class="min-w-[120px] min-h-[150px] p-[20px] mx-auto mb-[15px] bg-white rounded-md drop-shadow-md">
            <div class="flex">
              <div class="flex min-w-[430px] md:min-w-[980px]">
                <div class="flex flex-col">
                  <h4 class="text-[14px] font-[600] leading-[8px] my-2 ml-[9px] md:text-[18px]">${data.name}</h4>
                  <h5 class="text-[11px] font-[600] leading-[8px] my-2 ml-[9px] md:text-[15px] text-gray-600">${data.email}</h5>
                </div>
                <div class="ml-auto my-auto">
                  <p class="text-[10px] leading-[8px] md:text-[15px] md:leading-[13px] text-gray-600 text-right">${data.date}</p>
                </div>
              </div>
            </div>
            <div class="flex mt-[19px]">
              ${star}
            </div>
            <div>
              <p class="text-[10px] leading-[15px] mt-[16px] font-medium md:text-[15px] md:leading-[20px] text-gray-600">${data.deskripsi}</p>
            </div>
          </li>`
  },
  async afterRender() {
    this.showFeedbackItem()
  	sidebar.afterRender();
  },
};

export default feedback;
