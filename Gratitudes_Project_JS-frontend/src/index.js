//anything that doesn't belong in gratitude.js/service.js etc..
 const apiService = new ApiService()

 
 
document.addEventListener("DOMContentLoaded", function() {
    bindEventListeners()
    Gratitude.generateGratitudes()
    //Gratitude.renderGratitudes(Gratitude.allGratitudes)
    Ui.appendQuotes()
})

function bindEventListeners() {

    // Move this to the User class
    const login = document.querySelector(".new-user-container")
   

    login.addEventListener("submit", (e) => {
        e.preventDefault()
        const userName = e.target.name.value
        User.generateUser(userName)
    })
    
 
}


