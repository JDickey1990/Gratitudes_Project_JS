//all fetch functions
class ApiService {

    constructor(){
        this.baseUrl = `http://localhost:3000`
    }

    //Retrieving all of the gratitude objects from the database
     fetchGratitudes(){
        return fetch(`${this.baseUrl}/gratitudes`, {
        headers: {
            'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        }     

    //Finding or creating a User object 
     fetchUser(userName){
         return fetch(`http://localhost:3000/users`, {
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
        return fetch(`http://localhost:3000/gratitudes`, {
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
               user_id: userId
           })
       })
       .then(res => res.json())
     
   }

   
}