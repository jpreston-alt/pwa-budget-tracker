# Budget Tracker (PWA)

## Breakdown of Tasks
* go through given code - understand, comment, breakdown.
* manifest.json (public folder)
* register service worker in HTML
* service-worker.js (public folder)
    * files to cache
    * install
    * activate
    * listen for fetches
    * if request is not for API, serve static files with "offline-first" approach.
* IndexedDB (db.js)
    * create a new database
    * create objectStore "pending"
    * check if online - if online checkDatabase()
    * saveTransaction() function 
        * open a transaction on pending store
        * add to pending store
        * use saveTransaction() function in index.js when user attempts to post to database and it fails because there is no internet connection (use in the catch)
    * checkDatabase() function
        * open a transaction on pending store
        * getAll pending transactions
        * if pending transactions exists, POST them to our API, then send the response, then open a transaction and clear object store.
        * window.addEventListener("online", checkDatabase);