const navbar = {
	init(namePage){
		let data = JSON.parse(window.sessionStorage.getItem('user'))
		return `
		<div class="w-full h-[84px] flex">
    		<h1 class="my-auto ml-[24px] text-[24px] font-[600] font-primary basis-3/4">${namePage}</h1>
    		<p class="my-auto mr-[50px] text-[16px] text-right font-[600] font-primary basis-1/4">Hello, ${data.username}</p>
    	</div>
		`
	},

	afterRender(){
		return "";
	}
}

export default navbar;