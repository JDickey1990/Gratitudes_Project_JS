//all fetch functions
class ApiService {

    constructor(){
        this.baseUrl = `http://localhost:3000`
    }

    fetchGratitudes(){
        return fetch(`${this.baseUrl}/gratitudes`, {
        headers: {
            'content-type': 'application/json',
            }
        })
        .then(res => res.json())
    }      



}