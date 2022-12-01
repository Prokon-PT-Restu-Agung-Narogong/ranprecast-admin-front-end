import sidebar from '../components/layouts/sidebar.js';

const feedback = {
  async init() {
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	<div class="w-full h-[84px] flex">
    		<h1 class="my-auto ml-[24px] text-[24px] font-[600] font-primary basis-3/4">Feedback</h1>
    		<p class="my-auto mr-[50px] text-[16px] text-right font-[600] font-primary basis-1/4">Hello, Adminxx</p>
    	</div>
      <div class="w-full min-h-full bg-gray-200 flex">
        <ul class="feedback-list w-11/12 flex-col h-auto my-[40px] mx-auto">
          <li class="min-w-[120px] min-h-[150px] p-[20px] mx-auto mb-[15px] bg-white rounded-md drop-shadow-md">
            <div class="flex">
              <div class="flex-none">
                <img src="images/profile.jpg" class="bg-gray-600 w-[30px] h-[30px] md:w-[50px] md:h-[50px] object-cover rounded-[100%]"></img>
              </div>
              <div class="flex min-w-[430px] md:min-w-[980px]">
                <div class="flex flex-col ml-[10px]">
                  <h4 class="text-[14px] font-[600] leading-[8px] my-auto ml-[9px] md:text-[18px]">userxxx</h4>
                  <h5 class="text-[11px] font-[600] leading-[8px] my-auto ml-[9px] md:text-[15px] text-gray-600">userxxx@mail.id</h5>
                </div>
              </div>
              <div class="flex-none">
                <p class="text-[10px] leading-[8px] md:text-[15px] md:leading-[13px] text-gray-600 text-right">2022/12/11</p>
              </div>
            </div>
            <div class="flex mt-[19px]">
              <i class="fa fa-star text-[15px] md:text-[25px] mx-[2px] color-primary"></i>
              <i class="fa fa-star text-[15px] md:text-[25px] mx-[2px] color-primary"></i>
              <i class="fa fa-star text-[15px] md:text-[25px] mx-[2px] color-primary"></i>
              <i class="fa fa-star text-[15px] md:text-[25px] mx-[2px] color-primary"></i>
              <i class="fa fa-star text-[15px] md:text-[25px] mx-[2px] text-gray-400"></i>
            </div>
            <div>
              <p class="text-[10px] leading-[15px] mt-[16px] font-medium md:text-[15px] md:leading-[20px] text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </li>
          <li class="min-w-[120px] min-h-[150px] p-[20px] mx-auto mb-[15px] bg-white rounded-md drop-shadow-md">
            <div class="flex">
              <div class="flex-none">
                <img src="images/free-profile-photo.png" class="bg-gray-600 w-[30px] h-[30px] md:w-[50px] md:h-[50px] object-cover rounded-[100%]"></img>
              </div>
              <div class="flex min-w-[430px] md:min-w-[980px]">
                <div class="flex flex-col ml-[10px]">
                  <h4 class="text-[14px] font-[600] leading-[8px] my-auto ml-[9px] md:text-[18px]">seethisuser</h4>
                  <h5 class="text-[11px] font-[600] leading-[8px] my-auto ml-[9px] md:text-[15px] text-gray-600">thisuser@mail.id</h5>
                </div>
              </div>
              <div class="flex-none">
                <p class="text-[10px] leading-[8px] md:text-[15px] md:leading-[13px] text-gray-600 text-right">2022/12/27</p>
              </div>
            </div>
            <div class="flex mt-[19px]">
              <i class="fa fa-star text-[15px] md:text-[25px] mx-[2px] color-primary"></i>
              <i class="fa fa-star text-[15px] md:text-[25px] mx-[2px] color-primary"></i>
              <i class="fa fa-star text-[15px] md:text-[25px] mx-[2px] color-primary"></i>
              <i class="fa fa-star text-[15px] md:text-[25px] mx-[2px] text-gray-400"></i>
              <i class="fa fa-star text-[15px] md:text-[25px] mx-[2px] text-gray-400"></i>
            </div>
            <div>
              <p class="text-[10px] leading-[15px] mt-[16px] font-medium md:text-[15px] md:leading-[20px] text-gray-600">Lorem Ipsum of Lorem Ipsum.</p>
            </div>
          </li>
        </ul>
    	</div>
    </div>
		`;
  },

  async afterRender() {
  	sidebar.afterRender();
  },
};

export default feedback;
