# Thoughts
This is thoughts website where you can put you thoughts and create a note of it.
You also able to edit, delete thoughts and this will help you to nicely organize your thoughts

Link - https://thoughtsnote.netlify.app/


## How to Run locally
1. First clone the repository.
2. Open up this repository at your favorite code editor (my case "Visual Studio Code") and perform following :

### First start server
To start server perform following commands in the new terminal

- First move to the server directory by following command.
```
cd server
```
- Now install all the dependencies. This will create node_modules folder in server directory.
```
npm install
```
- Now create the **.env** file into the server directory. In the .env file write the following key and value(value should be your mongoDB connection string).
```
DB_URI = "value" //add your mongoDB database connection string as value
```
- After that, Run the following command to start the server.
```
npm run start
```

This commands will start your server and you can see the message in your terminal,

### Now start client
To start client perform following commands in the new terminal

- First move to the client directory by following command.
```
cd client
```
- Now install all the dependencies. This will create node_modules folder in client directory.
```
npm install
```
- After that, Run the following command to start the client.
```
npm start
```

  After running above commands you can see this type of message of **"Compiled successfully!"** in the terminal.
This commands will start your client and you can see the application running on the browser,
This is running locally on http://localhost:3000/


## Author
**Dhruvil Lathiya**

github - https://github.com/Dhruvil015

project link - https://github.com/Dhruvil015/Thoughts-MERN-stack

