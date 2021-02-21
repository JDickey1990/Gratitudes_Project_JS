class Ui {

    static quotes = [
       ' “I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.” ~Gilbert K. Chesterton~',
       ' “Gratitude is the healthiest of all human emotions. The more you express gratitude for what you have, the more likely you will have even more to express gratitude for.” ~Zig Ziglar~',
       ' “Learn to be thankful for what you already have, while you pursue all that you want.” ~Jim Rohn~',
       ' “ ‘Thank you’ is the best prayer that anyone could say. I say that one a lot. Thank you expresses extreme gratitude, humility, understanding.” ~Alice Walker~',
       ` “Thankfulness is the beginning of gratitude. Gratitude is the completion of thankfulness. Thankfulness may consist merely of words. Gratitude is shown in acts.” ~Henri Frederic Amiel~`,
       ` “Enjoy the little things, for one day you may look back and realize they were the big things.” ~Robert Brault~`,
       ` “Feeling gratitude and not expressing it is like wrapping a present and not giving it.” ~William Arthur Ward~`,
       ` “The way to develop the best that is in a person is by appreciation and encouragement.” ~Charles Schwab~`,
       ` “When I started counting my blessings, my whole life turned around.” ~Willie Nelson~`,
       ` “The roots of all goodness lie in the soil of appreciation for goodness.” ~Dalai Lama~`,
       ` “There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.” ~Albert Einstein~`,
       ` “Reflect upon your present blessings, of which every man has plenty; not on your past misfortunes, of which all men have some.” ~Charles Dickens~`,
       ` “None is more impoverished than the one who has no gratitude. Gratitude is a currency that we can mint for ourselves, and spend without fear of bankruptcy.” ~Fred De Witt Van Amburgh~`,
       ` “Some people grumble that roses have thorns; I am grateful that thorns have roses.” ~Alphonse Karr~`
    ]

    static appendQuotes() {
        let quotes = document.querySelector(".Quotes")
        let number = Ui.getRandomInt(14)
        quotes.innerHTML = Ui.quotes[number]
    }

    static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }



      static renderUsersPage(){
       
        let page = document.querySelector(".IndexPage")
        let bgDiv = document.querySelector(".bg-img")
        let quotes = document.querySelector("#quotes")
       
        page.setAttribute("class", "show-page")
        page.innerHTML = Ui.userPage

        bgDiv.setAttribute("class", "grey")
        quotes.setAttribute("class", "white heading quote-img")
        Ui.appendQuotes()
    }
    
    //   static renderUsersPageHTML(){
          
    //        `  <div class="new-gratitude-form">
    //             <form>
    //                 <h1> 99 Problems but this ain't one!</h1>

    //                 <input
    //                     type="text"
    //                     name="name"
    //                     value=""
    //                     placeholder="Enter what you are grateful for..."
    //                     class="input-text"
    //                 />
    //                 <br />
    //                 <input
    //                     type="text"
    //                     name="image"
    //                     value=""
    //                     placeholder="Enter an image URL..."
    //                     class="input-text"
    //                 />
    //                 <br />
    //                 <input
    //                     type="submit"
    //                     name="submit"
    //                     value="Add a new gratitude"
    //                     class="submit"
    //                 />
    //             </form>
                // </div>

    //       `
    //   }

      static userPage =    
                `
                <div class="new-gratitude-form">
                    <form>
                        <h1>I got 99 Problems but this ain't one!</h1>

                        <input
                            type="text"
                            name="name"
                            value=""
                            placeholder="What you are grateful for..."
                            class="input-text"
                            size="40"
                        />
                        <br><br>
                        <input
                            type="text"
                            name="description"
                            value=""
                            placeholder="Description"
                            class="input-text"
                            size="40"
                        />
                        <br><br>
                        <input
                            type="text"
                            name="reason"
                            value=""
                            placeholder="Reason"
                            class="input-text"
                            size="40"
                        />
                        <br><br>
                        <input
                            type="text"
                            name="image"
                            value=""
                            placeholder="Enter an image URL..."
                            class="input-text"
                            size="40"
                        />
                        <br><br>
                        <input
                            type="submit"
                            name="submit"
                            value="Add a new gratitude"
                            class="submit"
                        />
                    </form>

                </div>

                    <div id="gratitudes-container" class="gratitudes-container">
                        <h3>These are a few of the things you are grateful for!</h3>
                       
                    </div>
                `
}