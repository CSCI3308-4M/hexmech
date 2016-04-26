# HexMech

## Project Members

| Name               | Github                                             |
|:------------------ |:-------------------------------------------------- |
| Matthew Kaplan     | [@maka0945](https://github.com/maka0945)           |
| Max Lookabaugh     | [@MaxLookabaugh](https://github.com/MaxLookabaugh) |
| Michael R. Shannon | [@mrshannon](https://github.com/mrshannon)         |
| Mack Colwell       | [@MColwell](https://github.com/MColwell)           |


# Repo organization  
Directly in the app folder, you can find our Makefile, our README, and several important subfolders.  
app/public contains public-facing resources including images, javascript that generates the content the user sees, and the stylesheets.  
app/lib contains our libraries.  
app/routes contains the .js files required for navigation.  
app/test contains the automated tests.  
app/views contains all the .jade files required to serve the content on each specific page  

#Where to find the docs  
Our current build of the docs can be found at http://csci3308-4m.github.io/hexmech/index.html  

#How to build the docs  
The docs are built with JSDoc, and you can use the following command from the app directory to rebuild them after any changes:  
>make doc  

#How to build the code  
We have included a Makefile in the app directory. In a terminal, navigate to the app folder and run the command:  
>make  

#How to run the code  
    In the app directory, run the command:  
>npm start  

#How to test the code  
To run our automated unit tests, download this repository and run the following commands (from the `app` directory):  
>npm install  
>npm start  
