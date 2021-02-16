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
                        console.log(this.allGratitudes)
                    })
                )
                // .then(resp => Gratitude.renderGratitudes)

        }
}