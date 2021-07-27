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
       
        login.addEventListener("submit", e => {
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
                Gratitude.eventListeners(newUser.id)
        }) 
        
    }

    renderUserGratitudes(){
        this.gratitudes.forEach(gratitude =>{
            Ui.renderGratitude(gratitude)
        })
    }

}