# README

# Welcome to the Gratitude Application!

# Description
My choice for the Mod 4 JavaScript Project is an application that allows a user to use a pseudo login page. Upon submitting the user login form a post fetch request with the users name is sent to a create action in the back end user controller. A find or create method either instantiates a new user object or finds the existing user and renders the object and its associated data in JSON format. 

Once a user is "logged in" a series of functions prevents the default action of the DOM and manipulates the HTML displayed to mimic changing pages to a user show page. On the show page gratitude objects associated with the user are displayed in in individual div cards. The div cards display the objects attributes and include a button to allow for a gratitude object to be deleted. The user show page also is rendered with a form that allows a user to create a new gratitude object by filling out its attributes and triggering a post fetch when the form is submitted.

# Install Instructions: 
To use this application simply clone, bundle update, rails db:migrate in a server opened up for the backend. Then start your rails server by running rails s in the backend terminal. Open a seperate terminal in the frontend of the project and open the index.html file in the broswer by running open ./index.html or explorer.exe index.html

# Contributor's Guide: 
Bug reports and pull requests are welcome on GitHub at https://github.com/JDickey1990/Gratitudes_Project_JS This project is open for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct. License: Here is a link to the license https://opensource.org/licenses/MIT





