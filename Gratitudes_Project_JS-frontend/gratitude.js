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
    
}