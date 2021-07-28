class Ui {
  static modalLoginHandler() {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const btnCloseModal = document.querySelector(".close-modal");
    const btnShowModal = document.querySelector(".show-modal");
    const login = document.querySelector(".submit")

    const openModal = function () {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    };

    const closeModal = function () {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    };

    btnShowModal.addEventListener("click", openModal);

    btnCloseModal.addEventListener("click", closeModal);

    login.addEventListener("click", closeModal)

    overlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
  }

  static renderUsersPage() {
    const page = document.querySelector(".IndexPage");
    const bgDiv = document.querySelector(".bg-img");
    const quotes = document.querySelector("#quotes");

    page.setAttribute("class", "show-page");
    page.innerHTML = Ui.userPage;

    bgDiv.setAttribute("class", "grey");
    quotes.setAttribute("class", "white heading quote-img");
    Ui.appendQuotes();
  }

  static renderGratitude(gratitude) {
    const list = document.querySelector(".gratitudes-container");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const img = document.createElement("img");
    const button = document.createElement("button");

    div.setAttribute("class", "card");
    div.setAttribute("data-id", gratitude.id);
    img.setAttribute("src", gratitude.image);
    img.setAttribute("class", "card-img");
    button.setAttribute("class", "delete-gratitude");
    button.setAttribute("data-gratitude-id", gratitude.id);

    h3.innerHTML = gratitude.name;
    h4.innerHTML = `Reason: ${gratitude.reason}`;
    p.innerHTML = `Description: ${gratitude.description}`;
    button.innerHTML = "Delete";

    div.append(h3, h4, p, img, button);

    list.appendChild(div);
  }

  static userPage = `
        <div class="new-gratitude-form">
            <form id="form">
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
    `;

  static quotes = {
    1: {
      quote:
        "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.",
      author: "Gilbert K. Chesterton",
    },
    2: {
      quote:
        "Gratitude is the healthiest of all human emotions. The more you express gratitude for what you have, the more likely you will have even more to express gratitude for.",
      author: "Zig Ziglar",
    },
    3: {
      quote:
        "Learn to be thankful for what you already have, while you pursue all that you want.",
      author: "Jim Rohn",
    },
    4: {
      quote:
        "‘Thank you’ is the best prayer that anyone could say. I say that one a lot. Thank you expresses extreme gratitude, humility, understanding.",
      author: "Alice Walker",
    },
    5: {
      quote:
        "Thankfulness is the beginning of gratitude. Gratitude is the completion of thankfulness. Thankfulness may consist merely of words. Gratitude is shown in acts.",
      author: "Henri Frederic Amiel",
    },
    6: {
      quote:
        "Enjoy the little things, for one day you may look back and realize they were the big things.",
      author: "Robert Brault",
    },
    7: {
      quote:
        "Feeling gratitude and not expressing it is like wrapping a present and not giving it.",
      author: "William Arthur Ward",
    },
    8: {
      quote:
        "The way to develop the best that is in a person is by appreciation and encouragement.",
      author: "Charles Schwab",
    },
    9: {
      quote:
        "When I started counting my blessings, my whole life turned around.",
      author: "Willie Nelson",
    },
    10: {
      quote:
        "The roots of all goodness lie in the soil of appreciation for goodness.",
      author: "Dalai Lama",
    },
    11: {
      quote:
        "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
      author: "Albert Einstein",
    },
    12: {
      quote:
        "Reflect upon your present blessings, of which every man has plenty; not on your past misfortunes, of which all men have some.",
      author: "Charles Dickens",
    },
    13: {
      quote:
        "None is more impoverished than the one who has no gratitude. Gratitude is a currency that we can mint for ourselves, and spend without fear of bankruptcy.",
      author: "Fred De Witt Van Amburgh",
    },
    14: {
      quote:
        "Some people grumble that roses have thorns; I am grateful that thorns have roses.",
      author: "Alphonse Karr",
    },
  };

  static appendQuotes() {
    const quotes = document.querySelector(".quotes");
    const author = document.querySelector(".quote-author");
    const number = Ui.getRandomInt(14);
    quotes.innerHTML = Ui.quotes[number].quote;
    author.innerHTML = Ui.quotes[number].author;
  }

  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
