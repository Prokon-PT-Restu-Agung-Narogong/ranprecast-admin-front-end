import sidebar from '../../components/layouts/sidebar.js';

const Products = {
  async init() {
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	<div class="w-full h-[84px] flex">
    		<h1 class="my-auto ml-[24px] text-[24px] font-[600] font-primary basis-3/4">Produk</h1>
    		<p class="my-auto mr-[24px] text-[16px] text-right font-[600] font-primary basis-1/4">Hello, Adminxx</p>
    	</div>
    </div>
    <div class="w-full min-h-full bg-gray-200 flex">
      <div class="block p-6 mt-[35px] mx-auto rounded-md bg-white w-11/12 h-[610px]">
        <div class="flex">
          <a href="#/create-product" class="text-white text-semibold text-[13px] bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center mr-2">
            <i class="fa-solid fa-circle-plus py-1 mr-[5px] w-[20px] h-[20px]"></i> Tambah Produk
          </a>
        </div>
        <div class="overflow-x-scroll relative mt-[20px] w-full h-[460px]">
          <table class="table-fixed w-full h-full text-sm text-center">
            <thead class="text-semibold text-[15px] bg-gray-300 ">
              <tr>
                <th class="px-5 py-2 w-[45px]">No.</th>
                <th class="px-5 py-2 w-[200px]">Id Produk</th>
                <th class="px-5 py-2 w-[165px]">Nama Produk</th>
                <th class="px-5 py-2 w-[190px]">Deskripsi</th>
                <th class="px-5 py-2 w-[420px]">Spesifikasi</th>
                <th class="px-5 py-2 w-[260px]">Dimensi</th>
                <th class="px-5 py-2 w-[90px]">Stok</th>
                <th class="px-5 py-2 w-[150px]">Gambar</th>
                <th class="px-5 py-2 w-[120px]">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-5">1.</td>
                <td class="px-5">P001</td>
                <td class="px-5">Barrier</td>
                <td class="px-5">Barrier adalah produk precast yang digunakan sebagai pembatas jalan</td>
                <td class="px-5">Mutu beton K-350
                Mutu besi U-50 Hard Drawn Deformed Wire (HDDW)
                Cetak Basah dengan getaran frekuensi tinggi
                System join male-female</td>
                <td class="px-5">Lebar : 60cm dan 80cm\n
                Panjang : 100cm dan 120cm\n
                Tinggi : 70cm s.d 120cm\n</td>
                <td class="px-5">1457</td>
                <td class="pl-[25px] ">
                  <img src="images/product/Barier M 500x1000x1000.jpg" class="bg-gray-600 w-[100px] h-auto"></img>
                </td>
                <td class="mx-auto my-[45px] flex">
                  <a href="#/update-product" class="text-white text-semibold text-[13px] bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded text-sm px-3 py-2 text-center inline-flex items-center mr-2">
                    <i class="fa-solid fa-pen py-1 w-[20px] h-[20px]"></i>
                  </a>
                  <a href="#/" class="text-white text-semibold text-[13px] bg-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none font-medium rounded text-sm px-3 py-2 text-center inline-flex items-center mr-2">
                    <i class="fa-solid fa-trash py-1 w-[20px] h-[20px]"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="px-5">2.</td>
                <td class="px-5">P002</td>
                <td class="px-5">Barrier</td>
                <td class="px-5">Barrier adalah produk precast yang digunakan sebagai pembatas jalan</td>
                <td class="px-5">Mutu beton K-350
                Mutu besi U-50 Hard Drawn Deformed Wire (HDDW)
                Cetak Basah dengan getaran frekuensi tinggi
                System join male-female</td>
                <td class="px-5">Lebar : 60cm dan 80cm\n
                Panjang : 100cm dan 120cm\n
                Tinggi : 70cm s.d 120cm\n</td>
                <td class="px-5">1457</td>
                <td class="pl-[25px]">
                  <img src="images/product/Barier M 500x1000x1000.jpg" class="bg-gray-600 w-[100px] h-auto"></img>
                </td>
                <td class="mx-auto my-[45px] flex">
                  <a href="#/update-product" class="text-white text-semibold text-[13px] bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded text-sm px-3 py-2 text-center inline-flex items-center mr-2">
                    <i class="fa-solid fa-pen py-1 w-[20px] h-[20px]"></i>
                  </a>
                  <a href="#/" class="text-white text-semibold text-[13px] bg-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none font-medium rounded text-sm px-3 py-2 text-center inline-flex items-center mr-2">
                    <i class="fa-solid fa-trash py-1 w-[20px] h-[20px]"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="px-5">3.</td>
                <td class="px-5">P003</td>
                <td class="px-5">Barrier</td>
                <td class="px-5">Barrier adalah produk precast yang digunakan sebagai pembatas jalan</td>
                <td class="px-5">Mutu beton K-350
                Mutu besi U-50 Hard Drawn Deformed Wire (HDDW)
                Cetak Basah dengan getaran frekuensi tinggi
                System join male-female</td>
                <td class="px-5">Lebar : 60cm dan 80cm\n
                Panjang : 100cm dan 120cm\n
                Tinggi : 70cm s.d 120cm\n</td>
                <td class="px-5">1457</td>
                <td class="pl-[25px]">
                  <img src="images/product/Barier M 500x1000x1000.jpg" class="bg-gray-600 w-[100px] h-auto"></img>
                </td>
                <td class="mx-auto my-[45px] flex">
                  <a href="#/update-product" class="text-white text-semibold text-[13px] bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded text-sm px-3 py-2 text-center inline-flex items-center mr-2">
                    <i class="fa-solid fa-pen py-1 w-[20px] h-[20px]"></i>
                  </a>
                  <a href="#/" class="text-white text-semibold text-[13px] bg-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none font-medium rounded text-sm px-3 py-2 text-center inline-flex items-center mr-2">
                    <i class="fa-solid fa-trash py-1 w-[20px] h-[20px]"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          <nav class="flex justify-between items-center pt-4" aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Halaman <span class="font-semibold text-red-500">1</span> dari <span class="font-semibold text-red-500">7</span></span>
            <ul class="inline-flex items-center -space-x-px">
                <li>
                    <a href="#" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white ">
                        <p class="text-reguler text-[13px]">Sebelumnya</p>
                    </a>
                </li>
                <li>
                    <a href="#" aria-current="page" class="z-10 py-2 px-3 leading-tight text-white bg-red-500">1</a>
                </li>
                <li>
                    <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">2</a>
                </li>
                <li>
                    <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">3</a>
                </li>
                <li>
                    <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">4</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 leading-tight text-gray-500 bg-white ">
                        <p class="text-reguler text-[13px]">Selanjutnya</p>
                    </a>
                </li>
            </ul>
        </nav>
      </div>
    </div>
		`;
  },
  async afterRender() {
  	sidebar.afterRender();
  },
};

export default Products;
