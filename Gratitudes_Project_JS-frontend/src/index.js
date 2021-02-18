//anything that doesn't belong in gratitude.js/service.js etc..
 const apiService = new ApiService()
 


document.addEventListener("DOMContentLoaded", function() {
    console.log("HELLO!")
    Gratitude.generateGratitudes()

    const login = document.querySelector(".new-user-container")

    login.addEventListener("submit", function(e){
        e.preventDefault()
        const userName = e.target.name.value
        User.generateUser(userName)
    })
})

