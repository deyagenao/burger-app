# Nom-A-Burger
### An App for Eating an Imaginary Burger 
Nom-A-Burger is a CRU (CRUD - D) application that uses the MVC framework and incorporates Node, mySQL, Express, and Handlebars. Users can enter the name of a burger they would like to eat and see it added to the site. Once added, users have the option to "devour" the burger, which moves the burger from one section of the webpage to another. 

### About the Code 
The Nom-A-Burger app code is written using the Model-View-Controller (MVC) framework. Read about how each component was implemented below:

- Model: The model in this app refers to the mySQL `burgers_db` database and queries to this database. The connection.js file establishes the connection to the database, while the orm.js function uses Object-Relational-Mapping to develop global functions for making queries to the database. The ORM functions are then built on in the burger.js file to make specific queries to the "Burgers" table in the database. 

- View: The view in this app is handled by Node package, Express Handlebars. The app's index page is rendered from the main.handlebars file, using the data retrieved from the mySQL database. Express also handles serving the static files associated with the front-end, including images, CSS styling and front-end javascript.

- Controller: Using Express's Router, the controller for this app builds on the burger.js model queries to offer several routes in response to client actions. 
  - `"GET"` route: retrieves all information from the `burgers_db` database and uses Handlebars to display the information. 
  - `"POST"` route: allows users to post data to the database, by entering the name of a burger. Page automatically reloads to display this new data.  
  - `"PUT"` route: allows users to update the `"devoured"` value of the burgers from `false` to `true`. This "Burger" moves from one section of the webpage to another to relect that change in its `"devoured"` state. 

