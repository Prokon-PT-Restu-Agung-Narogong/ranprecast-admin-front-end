import sidebar from "../../components/layouts/sidebar.js";
import UrlParser from '../../../routes/url-parser';
import ContentData from "../../../data/ContentData";
import navbar from "../../components/layouts/navbar";


const updatesuperiority = {
  async init() {
    this.contentData = new ContentData();
    this.id = UrlParser.parseActiveUrlWithoutCombiner().id;
    this.data = await this.contentData.getDataUserAdminByID(this.id);
    this.data = this.data[0]
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	${navbar.init("Update Users")}

    <div class="w-full min-h-full bg-gray-200 flex">
      <div class="block p-12 mt-[35px] mx-20 rounded-md bg-white w-7/12 lg:h-[550px]">
        <div class="md:flex flex-col md:w-full md:h-full">
            <form method="POST" id="form_users" action="">                
                <div class=" md:flex flex-col ">
                    <div class="mb-3">
                        <p><b>ID</b></p>
                    </div>
                    <div>
                        <input type="text" id="id_users" placeholder="PT002" readonly class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="${this.data.id}">
                    </div>
                </div>
                <div class=" md:flex flex-col ">
                    <div class="mb-3">
                        <p><b>Username</b></p>
                    </div>
                    <div>
                        <input type="text" id="username_users" placeholder="ranprecast-admin" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="${this.data.username}">
                    </div>
                </div>
                <div class=" md:flex flex-col ">
                    <div class="mb-3">
                        <p><b>Password</b></p>
                    </div>
                    <div>
                        <input type="text" id="password_users" placeholder="ranprecast-admin" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="${this.data.password}">
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
        $('#form_users').submit((e)=>{
                e.preventDefault()
                let data = {
                    id : $('#id_users').val(),
                    username : $('#username_users').val(),
                    password : $('#password_users').val(),
                    type : "admin"
                }
                this.contentData.requestPOSTWithoutForm({
                    request : 'useradmin',
                    data : data
                }).then((e)=>{
                if(e.status == 200){
                    window.location.href = "#/users"
                }else{
                  alert(e.message)
                }
              })
        })
    },
    async afterRender() {
        this.postData();
        sidebar.afterRender();
    },
};

export default updatesuperiority;
