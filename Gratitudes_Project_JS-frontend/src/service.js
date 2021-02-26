class ApiService {

    constructor(){
        this.baseUrl = `http://localhost:3000`
    }

    async getGratitudes(){
        const res = await fetch(`${this.baseUrl}/gratitudes`, {
        headers: {
            'content-type': 'application/json',
            }
        })
        const data = await res.json()
        return data
    }     

    fetchUser(userName){
         return fetch(`${this.baseUrl}/users`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
            body: JSON.stringify({
                name: userName, 
            })
        })
        .then(res => res.json())
      
    }

    fetchCreateGratitude(name, description,reason, image, userId){
        return fetch(`${this.baseUrl}/gratitudes`, {
           method: "POST",
           headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
           },
           body: JSON.stringify({
               name: name,
               description: description,
               reason: reason,
               image: image, 
               user_id: userId,
           })
       })
       .then(res => res.json())
   }

   fetchDeleteGratitude(gratitude_id){
        return fetch(`${this.baseUrl}/gratitudes/${gratitude_id}`, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            }
      
        })

    }

   
}