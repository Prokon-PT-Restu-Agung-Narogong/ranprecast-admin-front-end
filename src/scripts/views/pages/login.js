import ContentData from '../../data/ContentData';

const login = {
  async init() {
    this.destroySession()
    this.contentData = new ContentData()
    this.data = await this.contentData.getDataTentang();
    return `
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12 bg-red-500 w-full">
            <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div class="mx-auto flex w-full max-w-md flex-col space-y-8">
                    <div class="flex flex-col items-center justify-center text-center space-y-5">
                        <div class="bg-white w-full h-full flex">
							<img src="${this.data.logo}" class="w-[50px] h-[50px] m-auto"/>
						</div>
                        <div class="font-bold text-3xl">
                            <p>LOGIN ADMIN</p>
                        </div>
                    </div>
    
                    <div>
                        <form action="" method="POST" id="form_login">
                            <div class="flex flex-col space-y-2">
                                <div class="flex flex-col mx-auto w-full max-w-xs">
                                    <div class="mb-4">
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                    </div>
                                    <div class="mb-6">
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
                                    </div>
                                </div>
            
                                <div class="flex flex-col mx-auto w-full max-w-xs">
                                    <button class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-2 bg-red-500 border-none text-white text-lg font-semibold shadow-sm">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>    
    `;
  },
  destroySession(){
    window.sessionStorage.removeItem('user');
  },
    postData(){
        $('#form_login').submit((e)=>{
                e.preventDefault()
                let data = {
                    username : $('#username').val(),
                    password : $('#password').val()
                }
                this.contentData.requestPOSTWithoutForm({
                    request : 'login',
                    data : data
                }).then((e)=>{
                if(e.status == 200){
                    window.sessionStorage.setItem('user', JSON.stringify(e.data));
                    window.location.href = "#/dashboard"
                }else{
                  alert(e.message)
                }
              })
        })
    },
    async afterRender() {
        this.postData();
    }
};

export default login;
