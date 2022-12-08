import sidebar from '../../components/layouts/sidebar.js';
import ContentData from '../../../data/ContentData';
const CreatePortofolio = {
  async init() {
    this.contentData = new ContentData()
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
            <div class="form-group mb-[10px] col-span-1">
              <label for="gambar" class="form-label inline-block mb-2 font-semibold text-gray-700 text-[12px]">Gambar <a class="text-red-500 font-bold">*</a></label>
              <input type="file" required name="gambar" class="form-control block w-full py-3 text-[12px] font-normal text-gray-700 bg-white transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:outline-none" id="gambar_portofolio"
                aria-describedby="xxx" placeholder="">
            </div>
            <div class="form-group mb-[10px] col-span-2">
              <label for="deskripsi" class="form-label inline-block mb-2 font-semibold text-gray-700 text-[12px]">Deskripsi <a class="text-red-500 font-bold">*</a></label>
              <textarea type="text" required name="deskripsi" rows="4" class="form-control block w-full px-3 py-3 text-[12px] font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:outline-none" id="deskripsi_portofolio"
                aria-describedby="xxx" placeholder="Deskripsi"></textarea>
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
      formData.append("deskripsi", $('#deskripsi_portofolio').val());
      this.contentData.requestPOST({
        request : 'portofolio/add',
        data : formData
      }).then((e)=>{
        if(e.status == 200){
          window.location.href = "#/portofolio"
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

export default CreatePortofolio;
