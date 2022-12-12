import sidebar from "../../components/layouts/sidebar.js";
import ContentData from '../../../data/ContentData';

const updateabout = {
  async init() {
    this.contentData = new ContentData();
    this.dataTentang = await this.contentData.getDataTentang();
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	<div class="w-full h-[84px] flex">
    		<h1 class="my-auto ml-[24px] text-[24px] font-[600] font-primary basis-3/4">Update Tentang Perusahaan</h1>
    		<p class="my-auto mr-[50px] text-[16px] text-right font-[600] font-primary basis-1/4">Hello, Adminxx</p>
    	</div>
    </div>

    <div class="w-full min-h-full bg-gray-200 flex">
      <div class="block p-12 mt-[35px] mx-auto rounded-md bg-white w-11/12 lg:h-[780px]">
        <div class="md:flex flex-col md:w-full md:h-full">
          <form  method="POST"  id="form_tentang" enctype="multipart/form-data">
            <div class="md:grid gap-2 grid-cols-2 md:w-full md:my-4">
              <div>
                  <div class="mb-3">
                      <p><b>Logo Perusahaan</b></p>
                  </div>
                  <div class="md:flex md:w-full">
                        <input type="file"  id="gambar_tentang" name="gambar_tentang">
                  </div>
                  <div class="md:flex md:w-full mt-[10px]">
                        <img src="${this.dataTentang.logo}" width="150" height="150" class="w-[150px] h-[150px] object-cover">
                  </div>
              </div>
              
              <div class=" md:flex flex-col ">
                <div class="mb-3">
                    <p><b>Nama Perusahaan</b></p>
                </div>
                <div>
                  <input type="text" value="${this.dataTentang.nama}" id="nama_tentang" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[20px]  dark:placeholder-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
              </div>
            </div>

            <div class="md:flex flex-col my-4">
              <div class="mb-3">
                <p><b>Deskripsi</b></p>
              </div>
              <div>
                <textarea type="text" id="deskripsi_tentang" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">${this.dataTentang.deskripsi}</textarea>
              </div>
            </div>

            <div class="md:grid gap-2 grid-cols-2 my-4 md:w-full">
              <div>
                <div class="mb-3">
                  <p><b>Visi</b></p>
                </div>
                <div>
                  <textarea type="text" id="visi_tentang" class="block w-full p-4 min-h-[200px]  border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">${this.dataTentang.visi}</textarea>
                </div>
              </div>
            
              <div class=" md:flex flex-col">
                <div class="mb-3">
                  <p><b>Misi</b></p>
                </div>
                <div>
                  <textarea type="text" id="misi_tentang" class="block w-full p-4 min-h-[200px]  border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">${this.dataTentang.misi}</textarea>
                </div>
              </div>
            </div>
            <div class="md:flex justify-center">
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
  postData(){
    $('#form_tentang').submit((e)=>{
      let photo = document.getElementById("gambar_tentang").files[0];
      e.preventDefault()
      console.log('asdsad');

      let formData = new FormData();
      formData.append("image", photo);
      formData.append("nama", $('#nama_tentang').val());
      formData.append("deskripsi", $('#deskripsi_tentang').val());
      formData.append("visi", $('#visi_tentang').val());
      formData.append("misi", $('#misi_tentang').val());
      this.contentData.requestPOST({
        request : 'tentang',
        data : formData
      }).then((e)=>{
        if(e.status == 200){
          window.location.href = "#/about"
        }else{
          alert("Gagal Terkirim")
        }
      })
    })
  },
  async afterRender() {
    this.postData()
    sidebar.afterRender();
  },
};

export default updateabout;
