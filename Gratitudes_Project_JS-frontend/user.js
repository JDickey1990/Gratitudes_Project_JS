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
                console.log(newUser)
        }) 
        
    }

}