//anything that doesn't belong in gratitude.js/service.js etc..
 const apiService = new ApiService()

 
 
document.addEventListener("DOMContentLoaded", function() {
    bindEventListeners()
    Gratitude.generateGratitudes()
    Ui.appendQuotes()
   
   
})

function bindEventListeners() {
    const login = document.querySelector(".new-user-container")
    // let newGratitude = document.querySelector(".new-gratitude-form")

    login.addEventListener("submit", (e) => {
        e.preventDefault()
        const userName = e.target.name.value
        User.generateUser(userName)
    })

    // if(newGratitude) {
    //     newGratitude.addEventListener("submit", (e) => {
    //         e.preventDefault()
    //         const gName = e.target.name.value
            
    //     })
    // }
    
 
}


