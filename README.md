# Overview
A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then they get to devour them!

## Technologies:
### Frontend
* HTML
* CSS
* Bootstrap
* Javascript (jQuery)
* Handlebars
### Backend
* Nodejs
* Mysql
* Express
* jawsDB
* Heroku
## Dependencies:
* body-parser
* dotenv
* express
* express-handlebars
* method-override
* mysql

## Functionality:
Using ORM, the app has 3 methods:

1. **GET** all entries from the MySQL database and display them to the DOM using Handlebars.
2. **PUT** a selected burger by clicking "Devour It", which... 
   * hits a route in Express to change its "devoured" status in the MySQL database
   * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
3. **POST** a new burger using the "Place Order" form, which... 
    * hits a route in Express to insert a new burger into the MySQL database
    * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)

### Link to App
* <strong>[Burger](https://github.com/khanm1/burger)</strong>