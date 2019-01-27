# Overview
A handlebars app where MySQL and Node.js are used for burgers that are stored in MySQL. The user enters a burger, which gets added to the database and if the burger is eaten, it's considered devoured. The user can continue to add new burgers, but cannot bring back devoured burgers.

## Technologies:
### Frontend:
* HTML
* CSS
* Bootstrap
* Javascript (jQuery)
* Handlebars
### Backend:
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
Using (Object Relational Mapper)ORM, the app has three methods:

1. **GET:** All entries from the MySQL database and display them to the DOM using Handlebars.
2. **PUT:** A selected burger by clicking "Devour It", which... 
   * hits a route in Express to change its "devoured" status in the MySQL database
   * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
3. **POST:** A new burger using the "Place Order" form, which... 
    * Hits a route in Express to insert a new burger into the MySQL database
    * Re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)

### Link to App
* <strong>[Burger](https://github.com/khanm1/burger)</strong>