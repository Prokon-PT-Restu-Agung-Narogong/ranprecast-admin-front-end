import sidebar from "../../components/layouts/sidebar.js";

const updateabout = {
  async init() {
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
          <form action="/action_page.php">
            <div class="md:grid gap-2 grid-cols-2 md:w-full md:my-4">
              <div>
                  <div class="mb-3">
                      <p><b>Logo Perusahaan</b></p>
                  </div>
                  <div class="md:flex md:w-full">
                      
                        <input type="file" id="myFile" name="filename">
                      
                  </div>
              </div>
              
              <div class=" md:flex flex-col ">
                <div class="mb-3">
                    <p><b>Nama Perusahaan</b></p>
                </div>
                <div>
                  <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
              </div>
            </div>

            <div class="md:flex flex-col my-4">
              <div class="mb-3">
                <p><b>Deskripsi</b></p>
              </div>
              <div>
                <input type="text" id="large-input" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>

            <div class="md:grid gap-2 grid-cols-2 my-4 md:w-full">
              <div>
                <div class="mb-3">
                  <p><b>Visi</b></p>
                </div>
                <div>
                  <input type="text" id="large-input" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
              </div>
            
              <div class=" md:flex flex-col">
                <div class="mb-3">
                  <p><b>Misi</b></p>
                </div>
                <div>
                  <input type="text" id="large-input" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
              </div>
            </div>

            <div class="md:flex flex-col my-4 md:w-full">
              <div class="mb-3">
                <p><b>Gambar Profil Perusahaan</b></p>
              </div>
              <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 rounded-lg cursor-pointer dark:border-gray-600 dark:hover:border-gray-500">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
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
  async afterRender() {
    sidebar.afterRender();
  },
};

export default updateabout;
