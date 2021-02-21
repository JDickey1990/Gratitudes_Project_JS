//class for gratitude 
// "class" static methods and "instance" (method on the prototype) methods for the post class
class Gratitude {

    static allGratitudes = []

    constructor(gratitude){
        this.id = gratitude.id
        this.name = gratitude.name 
        this.description = gratitude.description
        this.reason = gratitude.reason
        Gratitude.allGratitudes.push(this)
    }

    static generateGratitudes(){
        const gratitudesData = apiService.fetchGratitudes()
            .then(data => 
                data.forEach(gratitude => {
                    const newGratitude = new Gratitude(gratitude)
                    Gratitude.renderGratitudes(gratitude) 
                })
            )  
            // console.log(Gratitude.allGratitudes)
            // Gratitude.renderGratitudes() 
    }

    static renderGratitudes(gratitude) {
        const ul = document.querySelector(".gratitudes-list")
        // const array = Gratitude.allGratitudes ~~~~~~~WHY CAN'T I ACCESS THIS ARRAY HERE??~~~~~~~~~~~
        // console.log(Gratitude.allGratitudes)
        // for(const element of array) {
            // console.log(gratitude)
            const li = document.createElement("li")
            li.innerHTML = gratitude.name
            ul.appendChild(li)
        // }
    
    }

    static eventListeners(user_id){
        let newGratitude = document.querySelector(".new-gratitude-form")
        newGratitude.addEventListener("submit", (e) => {
            e.preventDefault()
            const name = e.target.name.value
            const description = e.target.description.value
            const reason = e.target.reason.value
            const image = e.target.image.value
            const userId = user_id
            Gratitude.createGratitude(name, description,reason, image, userId)     
            })
    }

    static createGratitude(name, description,reason, image, userId){
        apiService.fetchCreateGratitude(name, description,reason, image, userId)
            .then(gratitudeData => 
                 {
                const newGratitude = new Gratitude(gratitudeData)
               console.log(newGratitude)
        }) 
        
    }

    
}