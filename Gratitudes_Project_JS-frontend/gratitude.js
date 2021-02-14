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

}