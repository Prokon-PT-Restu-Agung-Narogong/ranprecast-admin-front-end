class APIConfig {
	baseUrl = "";

	constructor(){
		this.baseUrl = "http://localhost:3000/api/"
	}

	async request({request,method}) {
        return await $.ajax({
            type: method,
            url: `${this.baseUrl}/${request}`,
        }).then((response, status) => {
            return (status !== 'error') ? response : status;
        });
    }

}


export default APIConfig;