class User {
    static allUsers = []

    constructor(user) {
        this.id = user.id
        this.name = user.name 
        this.gratitudes = user.gratitudes
        User.allUsers.push(this)
    }

    static generateUser(userName){
        apiService.fetchUser(userName)
            .then(userData => 
                 {
                const newUser = new User(userData)
                newUser.renderUsersPage()
                newUser.renderUserGratitudes()
        }) 
        
    }

     renderUsersPage(){
        Ui.appendQuotes()
        let page = document.querySelector(".UIPage")
        page.innerHTML = Ui.userPage

    }

    renderUserGratitudes(){
        const list = document.querySelector(".gratitudes-container")
            this.gratitudes.forEach(gratitude =>{
              
                const div = document.createElement("div")
                const h2 = document.createElement("h2")
                const h3 = document.createElement("h3")
                const h4 = document.createElement("h4")
                const p = document.createElement("p")
                
                div.setAttribute("class", "card")
                div.setAttribute("data-id", gratitude.id)
                h3.innerHTML = gratitude.name
                h4.innerHTML = `Reason: ${gratitude.reason}`
                p.innerHTML = `Description: ${gratitude.description}`
             
                div.appendChild(h3)
                div.appendChild(h4)
                div.appendChild(p)
            
                list.appendChild(div)
            })
      
    }

}