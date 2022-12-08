class APIConfig {
    baseUrl = "";

    constructor(){
        this.baseUrl = "https://api.ranprecast.com/api"
    }

    async requestGET({request}) {
        return await $.ajax({
            type: "GET",
            url: `${this.baseUrl}/${request}`,
        }).then((response, status) => {
            return (status !== 'error') ? response : status;
        });
    }

    async requestPOST({request,data}) {
      return fetch(`${this.baseUrl}/${request}`, {method: "POST", body: data}).then((response,status)=>{
            return (status !== 'error') ? response : status;
      })
    }

}


export default APIConfig;