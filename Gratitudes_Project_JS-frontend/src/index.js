//anything that doesn't belong in gratitude.js/service.js etc..
 const apiService = new ApiService()

 
 
document.addEventListener("DOMContentLoaded", function() {
    User.eventListeners()
    Gratitude.generateGratitudes()
    Ui.appendQuotes()
})
     


