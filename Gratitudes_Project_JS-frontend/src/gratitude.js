class Gratitude {

    constructor(gratitude){
        this.id = gratitude.id
        this.name = gratitude.name 
        this.description = gratitude.description
        this.reason = gratitude.reason
        this.image = gratitude.image
    }

    static generateGratitudes(){
        apiService.fetchGratitudes()
        .then(data => 
            data.forEach(gratitude => {
                const newGratitude = new Gratitude(gratitude)
                Gratitude.renderGratitudes(gratitude) 
            })
        )  
    }

    static renderGratitudes(gratitude) {
        const ul = document.querySelector(".gratitudes-list")
        const li = document.createElement("li")
        li.innerHTML = gratitude.name
        ul.appendChild(li)
    }

    static eventListeners(userId){
        let newGratitude = document.querySelector(".new-gratitude-form")
        let deleteButtons = document.querySelectorAll(".delete-gratitude")

        newGratitude.addEventListener("submit", (e) => {
            e.preventDefault()
            const name = e.target.name.value
            const description = e.target.description.value
            const reason = e.target.reason.value
            const image = e.target.image.value
            Gratitude.createGratitude(name, description,reason, image, userId)  
            document.getElementById("form").reset();
        })

        deleteButtons.forEach(button => {
            button.addEventListener("click", (e) =>{
                e.preventDefault()
                apiService.fetchDeleteGratitude(e.target.dataset.gratitudeId)
                e.target.parentElement.remove()
            })
        })
    }

    static createGratitude(name, description,reason, image, userId){
        apiService.fetchCreateGratitude(name, description,reason, image, userId)
            .then(gratitudeData => 
                 {
                const newGratitude = new Gratitude(gratitudeData)
                Ui.renderGratitude(newGratitude)
                Gratitude.eventListeners()
                }
            )
        
    }

}