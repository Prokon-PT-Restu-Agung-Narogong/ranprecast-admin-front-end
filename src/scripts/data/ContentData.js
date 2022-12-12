import APIConfig from '../config/APIConfig';

class ContentData extends APIConfig{
	// start request dari /api
	async getDataTentang(){
		return await this.requestGET({
			request : "tentang",
		})
	}
	async getDataQuality(){
		return await this.requestGET({
			request : "keunggulan",
		})
	}

	async getDataQualityByID(id){
		return await this.requestGET({
			request : `keunggulan/${id}`,
		})
	}

	async getDataPortofolio(){
		return await this.requestGET({
			request : "portofolio",
		})
	}

	async getDataPortofolioByID(id){
		return await this.requestGET({
			request : `portofolio/${id}`,
		})
	}

	async getDataProduk(){
		return await this.requestGET({
			request : "produk",
		})
	}
	async getDataProdukByID(id){
		return await this.requestGET({
			request : `produk/${id}`,
		})
	}
	async getDataFeedback(){
		return await this.requestGET({
			request : "testimoni",
		})
	}
	async getDataKontak(){
		return await this.requestGET({
			request : "kontak",
		})
	}

	async getDataVisitors(){
		return await this.requestGET({
			request : "visitors",
		})
	}
	async getDataUserAdmin(){
		return await this.requestGET({
			request : "useradmin",
		})
	}

	async getDataUserAdminByID(id){
		return await this.requestGET({
			request : `useradmin/${id}`,
		})
	}
}

export default ContentData;