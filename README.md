# nodeServerClient

This code uses pure nodeJS to send a file, read by the server, to the client. It can also send a file, read by the client ,to the server.

To run this program you will need two terminal windows, one to run the server and one to run the client.

## Steps

1. Fork and clone the repo.
2. Run the server:
  * Open a window in the terminal. 
  * Navigate to the main directory. 
  * Type in the following command `nodemon server.js`
  
3. Run the client without sending information to the server:
  * Open a new window in the terminal. 
  * Navigate to the main directory. 
  * Type in the following command `nodemon client.js`

4. Run the client and send information to the server:
  * Open a new window in the terminal. 
  * Navigate to the main directory. 
  * Type in the following command `nodemon client.js post`
