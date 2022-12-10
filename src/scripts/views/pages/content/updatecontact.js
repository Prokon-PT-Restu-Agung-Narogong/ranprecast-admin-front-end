import sidebar from "../../components/layouts/sidebar.js";

const updatecontact = {
  async init() {
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	<div class="w-full h-[84px] flex">
    		<h1 class="my-auto ml-[24px] text-[24px] font-[600] font-primary basis-3/4">Update Kontak Perusahaan</h1>
    		<p class="my-auto mr-[50px] text-[16px] text-right font-[600] font-primary basis-1/4">Hello, Adminxx</p>
    	</div>
    </div>

    <div class="w-full min-h-full bg-gray-200 flex">
      <div class="block p-12 mt-[35px] mx-auto rounded-md bg-white w-11/12 lg:h-[600px]">
        <div class="md:flex flex-col md:w-full md:h-full">
            <form action="/action_page.php">
                <div class="md:grid gap-2 grid-cols-2 my-4 md:w-full">
                <div>
                    <div>
                    <p><b>Alamat 1</b></p>
                    </div>
                    <div>
                    <input type="text" id="large-input" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                </div>
                <div class=" md:flex flex-col">
                    <div>
                        <p><b>Alamat 2</b></p>
                    </div>
                    <div>
                    <input type="text" id="large-input" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                </div>
                </div>

                <div class="md:grid gap-2 grid-cols-2 my-4 md:w-full">
                    <div>
                        <div>
                            <p><b>Telepon</b></p>
                        </div>
                        <div>
                            <input type="number" id="large-input" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                    <div class=" md:flex flex-col">
                        <div>
                            <p><b>Email</b></p>
                        </div>
                        <div>
                            <input type="email" id="large-input" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                </div>

                <div class="md:grid gap-2 grid-cols-2 my-4 md:w-full">
                    <div>
                        <div>
                            <p><b>Whatsapp 1</b></p>
                        </div>
                        <div>
                            <input type="number" id="large-input" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                    <div class=" md:flex flex-col">
                        <div>
                            <p><b>Whatsapp 2</b></p>
                        </div>
                        <div>
                            <input type="number" id="large-input" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                </div>

                <div class="md:grid gap-2 grid-cols-2 my-4 md:w-full">
                    <div>
                        <div>
                            <p><b>Link Instagram</b></p>
                        </div>
                        <div>
                            <input type="text" id="large-input" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                    <div class=" md:flex flex-col">
                        <div>
                            <p><b>Link Youtube</b></p>
                        </div>
                        <div>
                            <input type="text" id="large-input" class="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
  async afterRender() {
    sidebar.afterRender();
  },
};

export default updatecontact;
