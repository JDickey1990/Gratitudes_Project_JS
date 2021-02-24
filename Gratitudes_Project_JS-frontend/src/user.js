class User {
    static allUsers = []

    constructor(user) {
        this.id = user.id
        this.name = user.name 
        this.gratitudes = user.gratitudes
        User.allUsers.push(this)
    }

    static eventListeners() {
        const login = document.querySelector(".new-user-container")
       
        login.addEventListener("submit", (e) => {
            e.preventDefault()
            const userName = e.target.name.value
            User.generateUser(userName)
        })
    }
    
    
    static generateUser(userName){
        apiService.fetchUser(userName)
            .then(userData => 
                 {
                const newUser = new User(userData)
                Ui.renderUsersPage()
                newUser.renderUserGratitudes()
        }) 
        
    }


    renderUserGratitudes(){
        const list = document.querySelector(".gratitudes-container")
            this.gratitudes.forEach(gratitude =>{
            //   call render gratitude here
                const div = document.createElement("div")
                const h2 = document.createElement("h2")
                const h3 = document.createElement("h3")
                const h4 = document.createElement("h4")
                const p = document.createElement("p")
                const img = document.createElement("img")
                const button = document.createElement("button")
                
                div.setAttribute("class", "card")
                div.setAttribute("data-id", gratitude.id)
                img.setAttribute("src",gratitude.image)
                img.setAttribute("class", "card-img" )
                button.setAttribute("class", "delete-gratitude")
                button.setAttribute("data-gratitude-id", gratitude.id)

                h3.innerHTML = gratitude.name
                h4.innerHTML = `Reason: ${gratitude.reason}`
                p.innerHTML = `Description: ${gratitude.description}`
                button.innerHTML = "Delete"
                
                div.appendChild(h3)
                div.appendChild(h4)
                div.appendChild(p)
                div.appendChild(img)
                div.appendChild(button)
            
                list.appendChild(div)
            })  
        Gratitude.eventListeners(this.id)
    }

}