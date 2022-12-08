import sidebar from '../../components/layouts/sidebar.js';
import UrlParser from '../../../routes/url-parser';
import ContentData from '../../../data/ContentData';
const UpdatePortofolio = {
  async init() {
    this.id = UrlParser.parseActiveUrlWithoutCombiner().id;
    this.contentData = new ContentData()
    this.data = await this.contentData.getDataPortofolioByID(this.id)
    this.data = this.data[0]
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	<div class="w-full h-[84px] flex">
    		<h1 class="my-auto ml-[24px] text-[24px] font-[600] font-primary basis-3/4">Update Produk</h1>
    		<p class="my-auto mr-[50px] text-[16px] text-right font-[600] font-primary basis-1/4">Hello, Adminxx</p>
    	</div>
    </div>
    <div class="w-full min-h-full bg-gray-200 flex">
      <div class="block p-6 mt-[35px] mx-auto rounded-md bg-white w-11/12 h-[610px]">
        <form method="POST" id="form_portofolio" enctype="multipart/form-data" action="">
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-[10px]">
              <label for="id" class="form-label inline-block mb-2 font-semibold text-gray-700 text-[12px]">Id  <a class="text-red-500 font-bold">*</a></label>
              <input type="text" name="id" class="form-control block w-full px-3 py-3 text-[12px] font-normal bg-gray-300 text-white border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-white focus:bg-gray-300 focus:outline-none" id="id_portofolio"
                aria-describedby="xxx" placeholder="" value="${this.data.id}">
            </div>
            <div class="form-group mb-[10px] col-span-1">
            </div>
            <div class="form-group mb-[10px] col-span-1">
              <label for="gambar" class="form-label inline-block mb-2 font-semibold text-gray-700 text-[12px]">Gambar <a class="text-red-500 font-bold">*</a></label>
              <input type="file" name="gambar" class="form-control block w-full py-3 text-[12px] font-normal text-gray-700 bg-white transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:outline-none" id="gambar_portofolio"
                aria-describedby="xxx" placeholder="">
            </div>
            <div class="form-group mb-[10px] col-span-1">
              <img src="${this.data.img}"  class="w-[100px] h-[100px] object-cover">
            </div>
            <div class="form-group mb-[10px] col-span-2">
              <label for="deskripsi" class="form-label inline-block mb-2 font-semibold text-gray-700 text-[12px]">Deskripsi <a class="text-red-500 font-bold">*</a></label>
              <textarea type="text" name="deskripsi" rows="4" class="form-control block w-full px-3 py-3 text-[12px] font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:outline-none" id="deskripsi_portofolio"
                aria-describedby="xxx" placeholder="Deskripsi">${this.data.deskripsi}</textarea>
            </div>
            <div class="grid col-span-2 place-items-center">
              <button type="submit" class="px-7 py-3 place-items-center bg-green-500 text-white font-semibold text-[13px]
                leading-tight rounded mx-auto hover:bg-green-500 hover:shadow-md focus:bg-green-500 focus:shadow-md focus:outline-none focus:ring-0
                active:bg-green-500 active:shadow-md transition duration-150 ease-in-out">Simpan</button>
            </div>
          </div>
        </form>
      </div>
    </div>
		`;
  },
  postData(){
    $('#form_portofolio').submit((e)=>{
      let photo = document.getElementById("gambar_portofolio").files[0];
      e.preventDefault()
      let formData = new FormData();
      formData.append("image", photo);
      formData.append("id", $('#id_portofolio').val());
      formData.append("deskripsi", $('#deskripsi_portofolio').val());
      this.contentData.requestPOST({
        request : 'portofolio',
        data : formData
      }).then((e)=>{
        if(e.status == 200){
          location.reload()
          alert("Berhasil Terkirim")
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

export default UpdatePortofolio;
