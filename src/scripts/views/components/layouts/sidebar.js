const sidebar = {
	init(){
		let dataUserAdmin = JSON.parse(window.sessionStorage.getItem('user'));
		let checkSuperAdmin = dataUserAdmin.type == "superadmin" ? true : false;
		return `
			<nav class="w-full h-[100vh] bg-red-600 flex flex-col">
				<ul class="w-full text-white mx-auto mt-[87px] flex flex-col">
					<a href="#/home">
						<li class="flex pl-[37px] py-[10px] hover:bg-red-200">
							<img alt="icon" src="icons/sidebar-1.png" width="20" height="20" class="w-[20px] h-[20px]">
							<span class="ml-[15px]">Dashboard</span>
						</li>
					</a>

					<a href="#/users" class="${checkSuperAdmin ? "show" : "hidden"}">
						<li class="flex pl-[37px] py-[10px] hover:bg-red-200">
							<img alt="icon" src="icons/sidebar-2.png" width="20" height="20" class="w-[20px] h-[20px]">
							<span class="ml-[15px]">Users Admin</span>
						</li>
					</a>
					
					<li class="py-[10px] daftar-produk ">
						<div class="flex hover:bg-red-200 py-[10px] w-full pl-[37px] daftar-produk-button cursor-pointer">
							<img alt="icon" src="icons/sidebar-3.png" width="20" height="20" class="w-[20px] h-[20px]">
							<span class="ml-[15px]">Produk</span>
							<img alt="icon-left" src="icons/arrow-left.png" class="daftar-produk-arrow ml-auto mr-4">
						</div>
						<ul class="daftar-produk-list hidden">
							<a href="#/products">
								<li class="pl-[37px] flex  py-[10px] bg-red-900">
									<img alt="icon" src="icons/sidebar-3-1.png" width="20" height="20" class="w-[20px] h-[20px]">
									<span class="ml-[15px]">Daftar Produk</span>
								</li>
							</a>
							<a href="#/create-product">
								<li class="pl-[37px] flex  py-[10px] bg-red-900">
									<img alt="icon" src="icons/sidebar-3-2.png" width="20" height="20" class="w-[20px] h-[20px]">
									<span class="ml-[15px]">Tambah Produk</span>
								</li>
							</a>
						</ul>
					</li>

					<li class="py-[10px] konten ">
						<div class="flex hover:bg-red-200 py-[10px] w-full pl-[37px] konten-button cursor-pointer">
							<img alt="icon" src="icons/sidebar-4.png" width="20" height="20" class="w-[20px] h-[20px]">
							<span class="ml-[15px]">Konten</span>
							<img alt="icon-left" src="icons/arrow-left.png" class="konten-arrow ml-auto mr-4">
						</div>
						<ul class="konten-list hidden">
							<a href="#/about">
								<li class="pl-[37px] flex  py-[10px] bg-red-900">
									<img alt="icon" src="icons/sidebar-4-1.png" width="20" height="20" class="w-[20px] h-[20px]">
									<span class="ml-[15px]">Tentang Perusahaan</span>
								</li>
							</a>
							<a href="#/contact">
								<li class="pl-[37px] flex  py-[10px] bg-red-900">
									<img alt="icon" src="icons/sidebar-4-2.png" width="20" height="20" class="w-[20px] h-[20px]">
									<span class="ml-[15px]">Kontak Perusahaan</span>
								</li>
							</a>
							<a href="#/portofolio">
								<li class="pl-[37px] flex  py-[10px] bg-red-900">
									<img alt="icon" src="icons/sidebar-4-3.png" width="20" height="20" class="w-[20px] h-[20px]">
									<span class="ml-[15px]">Portofolio</span>
								</li>
							</a>

							<a href="#/superiority">
								<li class="pl-[37px] flex  py-[10px] bg-red-900">
									<img alt="icon" src="icons/sidebar-4-4.png" width="20" height="20" class="w-[20px] h-[20px]">
									<span class="ml-[15px]">Keunggulan</span>
								</li>
							</a>
						</ul>
					</li>

					<a href="#/feedback">
						<li class="flex pl-[37px] py-[10px] hover:bg-red-200">
							<img alt="icon" src="icons/sidebar-5.png" width="20" height="20" class="w-[20px] h-[20px]">
							<span class="ml-[15px]">Hasil Feedback</span>
						</li>
					</a>

					<a href="#/login">
						<li class="flex pl-[37px] py-[10px] hover:bg-red-200">
							<img alt="icon" src="icons/sidebar-6.png" width="20" height="20" class="w-[20px] h-[20px]">
							<span class="ml-[15px]">Logout</span>
						</li>
					</a>
				</ul>
			</nav>
		`
	},

	afterRender(){
		$('.daftar-produk-button').on('click',()=>{

			$('.daftar-produk-list').toggleClass('hidden')
			if(!$('.daftar-produk-list').hasClass('hidden')){
				$('.daftar-produk-button .daftar-produk-arrow').attr('src','icons/arrow-down.png')
			}else{
				$('.daftar-produk-button .daftar-produk-arrow').attr('src','icons/arrow-left.png')
			}
		})

		$('.konten-button').on('click',()=>{

			$('.konten-list').toggleClass('hidden')
			if(!$('.konten-list').hasClass('hidden')){
				$('.konten-button .konten-arrow').attr('src','icons/arrow-down.png')
			}else{
				$('.konten-button .konten-arrow').attr('src','icons/arrow-left.png')
			}
		})
	}
}

export default sidebar;