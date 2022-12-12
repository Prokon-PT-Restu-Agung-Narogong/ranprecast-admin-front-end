import sidebar from "../../components/layouts/sidebar.js";
import ContentData from '../../../data/ContentData';
const contact = {
  async init() {
    this.contentData = new ContentData();
    this.data = await this.contentData.getDataKontak();
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	<div class="w-full h-[84px] flex">
    		<h1 class="my-auto ml-[24px] text-[24px] font-[600] font-primary basis-3/4">Kontak Perusahaan</h1>
    		<p class="my-auto mr-[50px] text-[16px] text-right font-[600] font-primary basis-1/4">Hello, Adminxx</p>
    	</div>
    </div>

    <div class="w-full min-h-full bg-gray-200 flex">
      <div class="block p-12 mt-[35px] mx-auto rounded-md bg-white w-11/12 lg:h-[750px]">
				<div class="md:flex flex-col md:w-full md:h-full">

          <div class="w-full md:h-auto md:flex flex-col mx-4">
            <div class="md:w-full md:h-auto my-4 md:flex">
              <div class="my-2 w-32">
                <p><b>Alamat 1:</b></p>
              </div>
              <div class="text-justify my-2">
                <p>${this.data.alamat_1}</p>
              </div>
            </div>

            <hr/>

            <div class="md:w-full md:h-auto my-4 md:flex">
              <div class="my-2 w-32">
                <p><b>Alamat 2:</b></p>
              </div>
              <div class="text-justify my-2">
                <p>${this.data.alamat_2}</p>
              </div>
            </div>

            <hr/>
              
            <div class="md:w-full md:h-auto my-4 md:flex">
              <div class="my-2 w-32">
                <p><b>Telepon:</b></p>
              </div>
              <div class="text-justify my-2">
                <p>${this.data.telepon}</p>
              </div>
            </div>

            <hr/>

            <div class="md:w-full md:h-auto my-4 md:flex">
              <div class="my-2 w-32">
                <p><b>Email:</b></p>
              </div>
              <div class="text-justify my-2">
                <p>${this.data.email}</p>
              </div>
            </div>

            <hr/>

            <div class="md:w-full md:h-auto my-4 md:flex">
              <div class="my-2 w-32">
                <p><b>Whatsapp 1:</b></p>
              </div>
              <div class="text-justify my-2">
                <p>${this.data.whatsapp_1}</p>
              </div>
            </div>

            <hr/>

            <div class="md:w-full md:h-auto my-4 md:flex">
              <div class="my-2 w-32">
                <p><b>Whatsapp 2:</b></p>
              </div>
              <div class="text-justify my-2">
                <p>${this.data.whatsapp_2}</p>
              </div>
            </div>

            <hr/>

            <div class="md:w-full md:h-auto my-4 md:flex">
              <div class="my-2 w-32">
                <p><b>Link Instagram:</b></p>
              </div>
              <div class="text-justify my-2">
                <p>${this.data.link_instagram}</p>
              </div>
            </div>

            <hr/>

            <div class="md:w-full md:h-auto my-4 md:flex">
              <div class="my-2 w-32">
                <p><b>Link Youtube:</b></p>
              </div>
              <div class="text-justify my-2">
                <p>${this.data.link_youtube}</p>
              </div>
            </div>

            <hr/>
            
            <div class="md:w-full md:h-auto my-4 md:flex justify-center">
              <div>
               <a href="#/update-contact" class="px-7 mt-10 py-3 bg-blue-500 text-white font-semibold text-[13px]
                leading-tight rounded mx-auto hover:bg-blue-500 hover:shadow-md focus:bg-blue-500 focus:shadow-md focus:outline-none focus:ring-0
                active:bg-blue-500 active:shadow-md transition duration-150 ease-in-out">Update Konten</a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
		`;
  },
  async afterRender() {
    sidebar.afterRender();
  },
};

export default contact;
