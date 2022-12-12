import sidebar from "../../components/layouts/sidebar.js";
import ContentData from '../../../data/ContentData';
import navbar from "../../components/layouts/navbar";

const updatecontact = {
  async init() {
    this.contentData = new ContentData();
    this.data = await this.contentData.getDataKontak();
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	${navbar.init("Update Kontak")}

    <div class="w-full min-h-full bg-gray-200 flex">
      <div class="block p-12 mt-[35px] mx-auto rounded-md bg-white w-11/12 lg:h-[600px]">
        <div class="md:flex flex-col md:w-full md:h-full">
            <form id="form" method="POST" enctype="multipart/form-data" action="" >
                <div class="md:grid gap-2 grid-cols-2 my-4 md:w-full">
                <div>
                    <div>
                    <p><b>Alamat 1</b></p>
                    </div>
                    <div>
                    <input type="text" value="${this.data.alamat_1}" id="alamat_1" name="alamat_1" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                </div>
                <div class=" md:flex flex-col">
                    <div>
                        <p><b>Alamat 2</b></p>
                    </div>
                    <div>
                    <input type="text" value="${this.data.alamat_2}" id="alamat_2" name="alamat_2" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                </div>
                </div>

                <div class="md:grid gap-2 grid-cols-2 my-4 md:w-full">
                    <div>
                        <div>
                            <p><b>Telepon</b></p>
                        </div>
                        <div>
                            <input type="text" value="${this.data.telepon}"  id="telepon" name="telepon" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                    <div class=" md:flex flex-col">
                        <div>
                            <p><b>Email</b></p>
                        </div>
                        <div>
                            <input type="email"  value="${this.data.email}" id="email" name="email" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                </div>

                <div class="md:grid gap-2 grid-cols-2 my-4 md:w-full">
                    <div>
                        <div>
                            <p><b>Whatsapp 1</b></p>
                        </div>
                        <div>
                            <input type="text" value="${this.data.whatsapp_1}" id="whatsapp_1" name="whatsapp_1" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                    <div class=" md:flex flex-col">
                        <div>
                            <p><b>Whatsapp 2</b></p>
                        </div>
                        <div>
                            <input type="text" value="${this.data.whatsapp_2}" id="whatsapp_2" name="whatsapp_2" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                </div>

                <div class="md:grid gap-2 grid-cols-2 my-4 md:w-full">
                    <div>
                        <div>
                            <p><b>Link Instagram</b></p>
                        </div>
                        <div>
                            <input type="text" value="${this.data.link_instagram}" id="link_instagram"  name="link_instagram" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                    <div class=" md:flex flex-col">
                        <div>
                            <p><b>Link Youtube</b></p>
                        </div>
                        <div>
                            <input type="text" value="${this.data.link_youtube}" id="link_youtube" name="link_youtube"  class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                </div>

                <div class="md:flex justify-end">
                <div>
                    <button type="submit" class="px-7 mt-10 py-3 place-items-right bg-green-500 text-white font-semibold text-[13px]
                    leading-tight rounded mx-auto hover:bg-green-500 hover:shadow-md focus:bg-green-500 focus:shadow-md focus:outline-none focus:ring-0
                    active:bg-green-500 active:shadow-md transition duration-150 ease-in-out">Simpan</button> 
                </div>
                </div>
            </form>
        </div>
      </div>
    </div>
		`;
  },
  validateForm(){
    $("#form").validate({
      rules: {
        alamat_1 : {
          required : true,
            maxlength: 84,
        },
       alamat_2 : {
          required : true,
            maxlength: 84,
        },
        telepon : {
          required : true,
            maxlength: 84,
        },
        email : {
          required : true,
            maxlength: 84,
        },
      }
    });
  },
  postData(){
    $('#form').submit((e)=>{
      e.preventDefault()
      let data = {
          alamat_1 : $('#alamat_1').val(),
          alamat_2 : $('#alamat_2').val(),
          telepon : $('#telepon').val(),
          email : $('#email').val(),
          whatsapp_1 : $('#whatsapp_1').val(),
          whatsapp_2 : $('#whatsapp_2').val(),
          link_instagram : $('#link_instagram').val(),
          link_youtube : $('#link_youtube').val(),
      }
      this.contentData.requestPOSTWithoutForm({
        request : 'kontak',
        data : data
      }).then((e)=>{
        console.log(e.status)
        if(e.status == 200){
          window.location.href = "#/contact"
        }else{
          alert(e.message)
        }
      })
    })
  },
  async afterRender() {
    this.postData();
    this.validateForm();
    sidebar.afterRender();
  },
};

export default updatecontact;
