# justDoc-assistant

Assignment Summary:

The Scope of the assignment was to create a bot-like assistant interface Web app using MEAN stack. The bot greets the User and asks 4 predefined questions. The response and the upload links are then stored in the database (MongoDB). The database can be then queried to retrieve user data for any user for any date and sent to a doctor. Currently as an example the database is queried and the response is shown as a response-slip.

Assignment Execution:

The assignment was assigned on 4th of April and has been completed on 8th of April. This assignment has been executed with the best of knowledge of the scope. Use case flow is as follows:

User opens browser link -> 
 Option is provided to consult the bot -> 
   On-select, Bot opens and greets ->
     On selecting to proceed, Bot asks Name -> 
       On selecting to proceed, Bot asks Age -> 
         On selecting to proceed, Bot asks to mark Symptoms on a check Box -> 
           On selecting to proceed, Bot provides choice to upload any Document(if any) to support ailments -> 

           ( However, any document could be added, The web app only supports images for display)

             On selecting to proceed, Bot thanks the user -> 
               On selecting to finish, Bot shuts down and user is provided with their responses

Pre-Requisites:

The web app requires Node and MongoDb to be installed in the Local-System to run.


Instructions to run the App:

1. Make a directory named justDoc/ or anything of your choice
2. If git is not yet installed, install git
3. Then, open console, and enter the directory created
4. IMPORTANT - initialise git by entering command : "git init"
5. pull the code from git hub by entering command : "git pull https://github.com/Subrat1108/justDoc-assistant"
6. IMPORTANT - install dependencies by entering command : "npm install"
7. update packages just in case : "npm update"
8. IMPORTANT - before running the file make sure the data/db/ directory is created for mongoDb. If not follow the link
            for heads up : https://wesleytsai.io/2015/07/26/mongodb-server-directory-permission-denied/
9. IMPORTANT - Run Mongod.exe file FIRST. This way mongoDB opens port 27017 and waits for connection from the app.
10. Finally run the app by entering command : "npm start" OR "node ./bin/www"
11. The app is now running on port 3000, to see the output open link : localhost:3000/ on any browser.

