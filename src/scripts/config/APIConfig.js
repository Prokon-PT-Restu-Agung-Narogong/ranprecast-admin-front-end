class APIConfig {
    baseUrl = "";

    constructor(){
        this.baseUrl = "http://localhost:3000/api"
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

    async requestPOSTWithoutForm({request,data}) {
      return await $.ajax({
            type: "POST",
            url: `${this.baseUrl}/${request}`,
            data : data
        }).then((response, status) => {
            return (status !== 'error') ? response : status;
        });
    }

}


export default APIConfig;