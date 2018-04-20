# THE IOT TEST APPLICATION
The repository contains:
1) the REST API nodejs server
2) a simple single paged Dashboard App created in React.js

The Database used is MongoDB;

# To Build this app

navigate to the main directory 

docker-compose build

# To run the app alltogether 

docker-compose up -d  # -d options for runnig as a deamon

The command spins up three services  1) the Dashborard app, 2) the Rest Server 3) mongodb server

# To individually run the application 

change the database configuration in the config.js according to the specification.
The React Dashboard App runs at port 3600 through Docker or at 3000 run locally
The Server runs at port 8080 both locally and through Docker.
the mongodb as usuall runs on port 27017. 

#Runnig apps individually 
For REST Server 
    rum npm start or use nodemon app.js 
For React Dashboard  
    run npm start

# Web Application 
The choice of building a web application was with the purpose of demonstrating a web application developement. 
I am also able to create a client side CLI REST application  using nodejs. 
The web Apllication is just to demonstrate my work with front-end. 
I can also work on react-redux but with the time limit I decided to build the app in core React. 
If needed I can also create a CLI bases nodejs client app and the complete implementation of the react-redux framwork. 

