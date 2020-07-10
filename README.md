# [Budget-Tracker](https://jp-pwa-budget.herokuapp.com/)

## Description
Budget Tracker is a progressive web application that allows the user to track their finances, with or without internet connection. My task with this project was to add functionality to a pre-built application to allow for offline access and functionality. I added some minor stylistic changes, but the front-end logic remained the same. This application achieves offline functionality by utilizing Service Workers and the Cache API to store static files and API responses in the users local cache. When the user is offline they have access to this data and these cached files. While offline, they may add an expense or deposit, which is stored in their local IndexedDB database. When internet connection is detected, those transactions are posted from their IndexedDB database to their MongoDB database. Their total budget is then updated, and their IndexedDB pending object store is cleared.

<p float="left">
<img src="./public/images/add.png" alt="Dashboard Image" height="125px" style="margin: 10px;"/>
<img src="./public/images/table.png" alt="Homepage Image" height="125px" style="margin: 10px;"/>
<img src="./public/images/chart.png" alt="Login Page Image" height="125px" style="margin: 10px;"/>
</p>

## Table of Contents
* [Technologies](#technologies)
* [Usage](#usage)
* [Finished Product](#finished-product)
* [Directions for Future Development](#Directions-for-future-Development)
* [Questions](#questions)

## Technologies
* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose
* IndexedDB
* Service Workers
* Cache API

## Usage
* Navigate to the [deployed Heroku App](https://jp-pwa-budget.herokuapp.com/).
* Enter a transaction name and amount, choose whether the transaction is a deposit (add funds) or an expense (subtract funds).
* View a table containing past transactions.
* View a chart that tracks your total budget over time.
* While offline you may continue to view the application and add transactions.
* When internet is detected, your total budget will update based on those transactions.
* To test offline capabilities either:
    * Turn your wifi off or 
    * Open your browsers' Dev Tools --> Application --> Service Workers --> Check the "Offline" box.

## Finished Product
View deployed Heroku app [here](https://jp-pwa-budget.herokuapp.com/). <br>

![](/public/images/pwa-budget.gif)

## Directions for Future Development
While this application does successfully allow for the user to add and view expenses while they're offline, I think it would be useful for them to be able to delete and update expenses as well. In the future I would do so using the same process as described in the [description](#description) above.

## Questions
​If you have any questions about the repo, please contact me:

On GitHub: [jpreston-alt](https://github.com/jpreston-alt) | Via Email: joannappreston@gmail.com
