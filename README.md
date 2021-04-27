# Age of Environment

## Welcome to the Age of Environment

As you all know, we are facing a significant climate crisis. With the planet getting into a worse and worse state, it is up to us to shop responsibly and buy with our conscience in mind. Our mission statement is to help people buy responsibly and protect the planet. Our website will help you find plenty of products that you can substitute for a more eco-friendly alternative. Use our search function to find something specific or if you don’t know what you may want then our 'all products' tag will help you to find and explore.

## Frontend project for the Bright Network Technology Academy (BNTA)

This website has been developed to utilise the backend API (https://github.com/zmervey18/EcoSwap) that our group inherited from the "EcoSwap" group, created for the backend BNTA project. This API was developed using Flask and an SQLite database. 

A few small changes were made to the API, with the main purpose of making the endpoints return JSON data which we could use on our frontend, instead of the backend rendering HTML templates. The API we used to serve our frontend can be found at 
https://github.com/JosephSimmons/EcoSwap-clone. 

We chose to use React for our frontend web framework due to its usability and the great developer toolset that comes with it.

To run the backend server, run the command
```sh
pip install -r requirements.txt
```
to install all the requirements, then navigate in to EcoSwap-clone/new/05 and run the command
```sh
flask run
```

Then to start our frontend React app, navigate in to age-of-environment/age-of-environment-app and run the command
```sh
npm install
```
to install all of the dependencies and then
```sh
npm start
```
to run the app in development mode on http://localhost:3000 in the browser.

## Contributors
* [Joseph Simmons](https://github.com/JosephSimmons)
* [Danyaal Ghafoor](https://github.com/danyaalg)
* [Balraj Dhadda](https://github.com/bdhaddas)
* [Isabella Smales](https://github.com/isabella-smales)
