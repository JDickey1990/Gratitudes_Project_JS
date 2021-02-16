class User {
    static allUsers = []

    constructor(user) {
        this.id = user.id
        this.name = user.name 
        User.allUsers.push(this)
    }

    static generateUser(){
        const userData = apiService.fetchUser()
            .then(data => 
                data.forEach(user => {
                    const newUser = new User(user)
                    console.log(this.allUsers)
                })
            )
           

    }

}