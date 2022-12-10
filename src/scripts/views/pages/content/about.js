import sidebar from "../../components/layouts/sidebar.js";

const about = {
  async init() {
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	<div class="w-full h-[84px] flex">
    		<h1 class="my-auto ml-[24px] text-[24px] font-[600] font-primary basis-3/4">Tentang Perusahaan</h1>
    		<p class="my-auto mr-[50px] text-[16px] text-right font-[600] font-primary basis-1/4">Hello, Adminxx</p>
    	</div>
    </div>

    <div class="w-full min-h-full bg-gray-200 flex">
      <div class="block p-12 mt-[35px] mx-auto rounded-md bg-white w-11/12 lg:h-[850px]">
				<div class="md:flex flex-col md:w-full md:h-full">
					<div class="w-full h-auto md:flex mb-5">
						<img src="images/Logo.png" class="my-18 mx-16 w-[80px] h-[80px] md:w-[180px] md:h-[180px]"/>
            <div class="w-full h-full md:flex flex-col">
              <div class="w-full my-4 text-justify md:flex">
                <div>
                  <p><b>Nama Perusahaan: </b></p>
                </div>
                <div class="ml-4">
                  PT. Restu Agung Narogong</p>
                </div>
              </div>
              <div class="w-full md:flex my-4 text-justify">
                <div>
                  <p><b>Deskripsi:</b></p>
                </div>
                <div class="md:w-full ml-20 text-justify">
                  <p>PT Restu Agung Narogong adalah perusahaan yang bergerak di bidang Kontraktor, Supplier, manufacture, Fabrikasi & Engineering. Selain itu PT. Restu agung Narogong juga memiliki beberapa unit usaha yang mana salah satunya adalah RAN PRECAST.</p>
                </div>
              </div>
            </div>
					</div>
          
          <hr/>

          <div class="w-full h-auto md:flex flex-col mx-4">
            <div class="w-full h-auto md:flex my-4 mt-6">
                <div class="my-4 text-justify">
                  <p><b>Visi:</b></p>
                </div>
                <div class="ml-16 text-justify">
                  <p>Menjadikan perusahaan industry beton yang menghasilkan produk berkualitas, dengan mengutamakan “research and development” serta inovasi, sehingga menjadi perusahaan industry beton yang bertaraf internasional.</p>
                </div>
            </div>
            <hr/>
            <div class="w-full h-auto md:flex my-4 mb-6">
                <div class="my-6 text-justify">
                  <p><b>Misi:</b></p>
                </div>
                <div class="ml-16 text-justify">
                  <p>Menghasilkan produk-produk inovatif dan berkualitas, yang dapat mengikuti perubahan dan perkembangan zaman.</p>
                  <p>Menjalin Kerjasama dengan mengedepankan profesionalisme, integritas. Kejujuran dan keadilan yang berfokus pada kebutuhan pelanggan.</p>
                  <p>Mewujudkan SDM Ketenagakerjaan yang kompeten, dan membuka akses kesempatan kerja yang lebih luas.</p>
                </div>
            </div>
          </div>
          
          <hr/>

          <div class="w-full h-auto md:flex flex-col mx-4">
            <div class="w-full h-auto my-3 flex">
              <p><b>Gambar Profil Perusahaan</b></p>
            </div>
            <div class="w-auto h-auto md:flex">
              <div class="w-auto h-auto md:flex flex-col md:mx-8 text-center bord">
                <img src="images/Logo.png" class="w-[80px] h-[80px] md:w-[180px] md:h-[180px]"/>
                <p>image 1</p>
              </div>
              <div class="w-auto h-auto md:flex flex-col md:mx-8 text-center">
                <img src="images/Logo.png" class="w-[80px] h-[80px] md:w-[180px] md:h-[180px]"/>
                <p>image 1</p>
              </div>
              <div class="w-auto h-auto md:flex flex-col md:mx-8 text-center">
                <img src="images/Logo.png" class="w-[80px] h-[80px] md:w-[180px] md:h-[180px]"/>
                <p>image 1</p>
              </div>
              <div class="w-auto h-auto md:flex flex-col md:mx-8 text-center">
                <img src="images/Logo.png" class="w-[80px] h-[80px] md:w-[180px] md:h-[180px]"/>
                <p>image 1</p>
              </div>
            </div>
            <div class="md:flex justify-center">
              <div>
                <button type="submit" class="px-7 mt-10 py-3 bg-blue-500 text-white font-semibold text-[13px]
                leading-tight rounded mx-auto hover:bg-blue-500 hover:shadow-md focus:bg-blue-500 focus:shadow-md focus:outline-none focus:ring-0
                active:bg-blue-500 active:shadow-md transition duration-150 ease-in-out">Update Konten</button> 
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

export default about;
