import sidebar from '../../components/layouts/sidebar.js';
import ContentData from '../../../data/ContentData';
import UrlParser from '../../../routes/url-parser';
const UpdateProducts = {
  async init() {
    this.id = UrlParser.parseActiveUrlWithoutCombiner().id;
    this.contentData = new ContentData()
    this.data = await this.contentData.getDataProdukByID(this.id)
    this.data = this.data[0]
    return `
    <section class="w-1/6 sidebar">
      ${sidebar.init()}
    </section>
    <section class="w-5/6 content">
      <div class="w-full h-[84px] flex">
        <h1 class="my-auto ml-[24px] text-[24px] font-[600] font-primary basis-3/4">Tambah Produk</h1>
        <p class="my-auto mr-[50px] text-[16px] text-right font-[600] font-primary basis-1/4">Hello, Adminxx</p>
      </div>
    </div>
    <div class="w-full min-h-full bg-gray-200 flex">
      <div class="block p-6 mt-[35px] mx-auto rounded-md bg-white w-11/12 h-[610px]">
        <form method="POST" id="form_produk" enctype="multipart/form-data" action="">
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-[10px]">
              <label for="id" class="form-label inline-block mb-2 font-semibold text-gray-700 text-[12px]">Id  <a class="text-red-500 font-bold">*</a></label>
              <input type="text" required name="id" class="form-control block w-full px-3 py-3 text-[12px] font-normal bg-gray-300 text-white border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-white focus:bg-gray-300 focus:outline-none" id="idProduk"
                aria-describedby="xxx" placeholder="" value="${this.data.id}">
            </div>
            <div class="form-group mb-[10px] col-span-1">
              <label for="namaProduk" class="form-label inline-block mb-2 font-semibold text-gray-700 text-[12px]">Nama Produk <a class="text-red-500 font-bold">*</a></label>
              <input required type="text" class="form-control block w-full px-3 py-3 text-[12px] font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:outline-none" id="namaProduk"
                aria-describedby="xxx" placeholder="Examples : Barrier" value="${this.data.name}">
            </div>
            <div class="form-group mb-[10px] col-span-2">
              <label for="deskripsiProduk" class="form-label inline-block mb-2 font-semibold text-gray-700 text-[12px]">Deskripsi <a class="text-red-500 font-bold">*</a></label>
              <textarea required type="text" rows="4" class="form-control block w-full px-3 py-3 text-[12px] font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:outline-none" id="deskripsiProduk"
                aria-describedby="xxx" placeholder="Examples : Barrier adalah produk precast yang digunakan sebagai pembatas jalan">${this.data.desc}</textarea>
            </div>
            <div class="form-group mb-[10px]">
              <label for="spesifikasiProduk" class="form-label inline-block mb-2 font-semibold text-gray-700 text-[12px]">Spesifikasi <a class="text-red-500 font-bold italic">* Gunakan ,(koma) untuk setiap item</a></label>
              <textarea required type="text" rows="4" class="form-control block w-full px-3 py-3 text-[12px] font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:outline-none" id="spesifikasiProduk"
                aria-describedby="xxx" placeholder="Examples : Mutu beton K-350,Mutu besi U-50 Hard Drawn Deformed Wire (HDDW),Cetak Basah dengan getaran frekuensi tinggi,System join male-female,">${this.data.specs}</textarea>
            </div>
            <div class="form-group mb-[10px]">
              <label for="jenisProduk" class="form-label inline-block mb-2 font-semibold text-gray-700 text-[12px]">Jenis <a class="text-red-500 font-bold italic">* Gunakan ,(koma) untuk setiap item</a></label>
              <textarea required type="text" rows="4" class="form-control block w-full px-3 py-3 text-[12px] font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:outline-none" id="jenisProduk"
                aria-describedby="xxx" placeholder="Examples : Lebar : 60cm dan 80cm,Panjang : 100cm dan 120cm,Tinggi : 70cm s.d 120cm,">${this.data.jenis}</textarea>
            </div>
            <div class="form-group mb-[10px]">
              <label for="stokProduk" class="form-label inline-block mb-2 font-semibold text-gray-700 text-[12px]">Stok <a class="text-red-500 font-bold">*</a></label>
              <input required type="number" class="form-control block w-full px-3 py-3 text-[12px] font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:outline-none" id="stokProduk"
                aria-describedby="xxx" placeholder="" value="${this.data.stok}">
            </div>
            <div class="form-group mb-[10px]">
              <label for="gambarProduk" class="form-label inline-block mb-2 font-semibold text-gray-700 text-[12px]">Gambar <a class="text-red-500 font-bold">*</a></label>
              <input type="file" class="form-control block w-full py-3 text-[12px] font-normal text-gray-700 bg-white transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:outline-none" id="gambarProduk"
                aria-describedby="xxx" placeholder="">
            </div>
            <div class="grid col-span-2 place-items-center">
              <button type="submit" class="px-7 py-3 place-items-center bg-green-500 text-white font-semibold text-[13px]
                leading-tight rounded mx-auto hover:bg-green-500 hover:shadow-md focus:bg-green-500 focus:shadow-md focus:outline-none focus:ring-0
                active:bg-green-500 active:shadow-md transition duration-150 ease-in-out">Tambahkan Produk</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    `;
  },
  postData(){
    $('#form_produk').submit((e)=>{
      let photo = document.getElementById("gambarProduk").files[0];
      e.preventDefault()
      let formData = new FormData();
      formData.append("id", $('#idProduk').val());
      formData.append("name", $('#namaProduk').val());
      formData.append("deskripsi", $('#deskripsiProduk').val());
      formData.append("specs", $('#spesifikasiProduk').val());
      formData.append("jenis", $('#jenisProduk').val());
      formData.append("stok", $('#stokProduk').val());
      formData.append("image", photo);
      this.contentData.requestPOST({
        request : 'produk',
        data : formData
      }).then((e)=>{
        if(e.status == 200){
          window.location.href = "#/products"
        }else{
          alert("Gagal Terkirim")
        }
      })
    })
  },
  async afterRender() {
    this.postData();
    sidebar.afterRender();
  },
};

export default UpdateProducts;
