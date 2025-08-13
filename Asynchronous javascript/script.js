/* Following code is written by borudeyash1*/
/*------------Instruction!------------ 
please try implementing following code one by one.*/
//  alert('RELOADED');
/* 
**************************************Fundaments of JavaScript**************************************
->Function returns
->Arrays and Objects
->Function returnsmethods:forEach , map, filter, reduce, find,
->findIndex, some, every, sort, reverse,etc.


->async js coding           */ 

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 3000);
//     });
//     let result = await promise; // wait until the promise resolves (*)
//     console.log(result); // "done!"
//     console.log("Async function executed");
//     return result; // return the value
// }
// f(); // call the async function
// //Function returns:
// //logic: function returns the value.
// function add(a, b) {
//     return a + b;
//   }
//   console.log(add(5, 3));

//Please open the index.html file on your browser and
// please check the console(inspect -> console).

//-------------------ARRAYS------------------------//
// //array : array is a collection of elements.
//Tip -this array is not like array in c/c++/java/python.
// It can store any type of data.
//example:
// const arr =['yash', 1, true, 'harsh', 2, 'smit', 3];    //can use 'var' or 'let' or 'const'
// console.log(arr);          //return statement



////foreach function:
////logic : foreach function is used to iterate over an array.
// const numbers = [1, 2, 3, 4, 5];     //can use 'var' or 'let' or 'const'
// numbers.forEach(function(n) {
//   console.log(n);
// });

////map function:
////logic : map function is used to create new array from an existing array.
// n  = parseInt(prompt('Enter size of array:'));
// const numbers = prompt('Enter array elements (space separated):').split(' ').map(Number);

// const square = numbers.map(function(num){
//   return num**3;
// });
// console.log('Squared Numbers are:', square);


// //filter function:
// //logic : filter function is used to filter an array based on a condition.
////way 1: using anonymous function
// var arr = [1 , 2 , 3 , 4 , 5 , 8 , 6 , 0 , 9 , 7];
// var even = arr.filter(function(num){   //here,function(num) is callback function
//     if(num % 2 === 0)return true;
//     else return false;

// });                                                                          
// console.log('even numbers are: ',even);

// //way 2: using arrow function and directly returning the value
// const numbers = [1, 2, 3, 4, 5];                      //can use 'var' or 'let' or 'const'
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log('Even numbers are:', evenNumbers);


// //reduce function:
// //logic : reduce function is used to reduce an array to a single value.
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);  //here,acc is accumulator
// console.log('Sum of numbers is:', sum);  

////find function:
////logic : find function is used to find the first element in an array that matches a condition.
// const numbers = [1, 2, 3, 4, 5];
// const evenNumber = numbers.find(num => num % 2 === 0);
// console.log('First even number is:', evenNumber);

////find function : using anonymous function to find a particular value only
// var arr = [1 , 2 ,3 ,4];
// var ans = arr.find(function(num){
//     if(num === 9)return true;   //test case : num = 9 then it will return false(undefined in console)
//     else return false;
// })              
// console.warn(ans);       //we can use console.warn() , console.log() , console.error() 
//                         // to print the value in console


////indexOf function:
////logic : indexOf function is used to find the index of an element in an array.
// const numbers = ['harsh','yash','smitraj','abhishek'];            //can use 'var' or 'let' or 'const'
// const index = numbers.indexOf('smitraj');
// console.log('smitraj found at index:', index);

////reverse function:
////logic : reverse function is used to reverse the order of elements in an array.
// const numbers = [1, 2, 3, 4, 5];
// const reversed = numbers.reverse();
// console.log('Reversed numbers are:', reversed);

//-------------------OBJECTS-------------------//
// //object : object is a collection of key-value pairs.
////Basically in javascript, functions are called objects.
//EXAMPLE 1:
// const person = {            //can use 'var' or 'let' or 'const'
//         name: 'Harsh',
//         age: 20,
//         city: 'Delhi'
//       };
//   console.log(person);

// //EXAMPLE 2:
// function Person(name, age){}
// console.log(Person);

//Finding size of function/object: 
//size of function is the number of arguments/parameters passed to the function and it takes.
//size of object is the number of properties in the object.
//example:
// function person(name, age, city){}
//   log(person);         //test case : got '3' as length in console by typing 'person.length'


//Synchronous code - line by line coding(simple)

// // Asynchronous js coding:Jo bhi code async nature ka ho ,use side stack mein bhejo 
//aur agle code ko run karo,jo sync nature ka ho
//Jab  sync code chal jaein tab check karo ki async code complete hua ki nahi
//agar complete hua to use main stack mein lao aur usko run karo 



//EXAMPLE 1.
// async function myFunction() {    //async function
//     console.log('Hello ');
//   }
//   myFunction();

////EXAMPLE 2.
// async function myFunction() {    //async function
// await console.log('Hello ');    //await is used to wait for the function to complete
// }
// myFunction();

////example 3.
// async function myFunction() {    //async function
//     var blob = await fetch('https://randomuser.me/api/');   //fetch is used to fetch data from api
//     var ans = await blob.json();    //json is used to convert data to json and awiat is used to wait for the function to complete
//     console.log(ans);           //replace this with console.log(ans.results[0].name) to get the name of the person ans.results[0].name .Refresh the page to get a new person.
//   }
// myFunction();

////We are done with the intro of Js.Let's learn about basics of Node.js

//**************************************Node.js************************************************************//
/*
1.Node.js basics
2.Introduction
3.Instaliing Node.js and npm
4.Working with modules
5.File system operations
6.Understanding HTTP modules and API */

/* Node.js BASICS:
Node.js:Not a programming language
Node.js is a 'runtime environment' for JavaScript.Runtime means jabtak chalega
It allows you to run JavaScript code outside of a web browser.
It is used to build server-side applications and APIs.
It is built on Chrome's V8 JavaScript engine.
It is open-source and free to use.
*/
/* INTRODUCTION:
Because javascript doesn't have functionalities for backend development
Ryan Dahl created Node.js-he designed it for the backend.
Ryan Dehl modified code in Google Chrome  V8 engine (open source)to create Node.js.
He tried to create server in Node.js-I have to code in js(becuase chrome's V8 engine is in c++).
he use js wrapper to create server in Node.js and it is called Node.js.
BACKEND WORKING:
node.js-is a javascript runtime environment(OUTER LAYER)
js wrappers:  are used to create server in node.js(SECOND LAYER)
v8 engine : is used to create server in node.js(INNER LAYER)
*/
/*INSTALLING NODE.JS AND NPM:
Node.js  and npm can be downloaded from the official website.
npm is a package manager that helps you install and manage Node.js packages.

*/
/*WORKING WITH MODULES:
Modules are a way to organize and reuse code in Node.js.
Modules are created by exporting and importing code.

In your folder , use new terminal.
type 'node -v' to check if node.js is installed
type 'npm -v' to check if npm is installed
type 'npm init' to create a package.json file (it is a file that contains information about your project)
type 'npm install express' to install express module (it is a framework that helps you create server in node.js)
type 'npm install nodemon' to install nodemon module (nodemon is used to restart the server)
type 'npm install -g nodemon' to install nodemon globally( it is a package that helps you restart the server)

------WE ARE NOT USING PROMISE APIs.WE WILL USE CALLBACK AND SYNC APIs------
In your script.js file , type 'nodemon script.js' to start the server

*/
/*CALLBACK API:
Callback API is a way to handle asynchronous operations in Node.js.
Callback API is used when you want to execute a function after another function has finished executing.
We will be learning:

*/


////CALLBACK API Details:
//// 1.writefile:It is used to write a file.
//// syntax: fs.writeFile(filename, data, callback)
////EXAMPLE:
// const fs = require('fs');   //require is used to import fs(Filesystem) module
// fs.writeFile('abhi.txt', 'Kaise Ho abhishek!!', function(err) {   //err is used to check if the file is written
// if (err) {
//      console.error('Error',err);  //if the file is not written
//      return;        
//    }else console.log('Write hogaya bhai!!!');  //if the file is written
//  });
////Code running instructions:1.open terminal and type 'node script.js'.
////test case: error will be displayed if the file is not written 
////test case: 'Write hogaya bhai!!!' will be displayed if the file is written.

/*----------------------------------------------------------------------*/

//// 2.appendfile:It is used to append(add data to a file)
//// syntax: fs.appendFile(filename, data, callback)
////EXAMPLE:
////note: hey.txt should be present in your folder
// const fs = require('fs');   //require is used to import fs(Filesystem) module
// fs.appendFile('hey.txt', 'Main To achha Hun Bhai!!', function(err) {   //err is used to check if the file is written
// if (err) {
//      console.error('Error',err);  //if the file is not written
//      return;        
//    }else console.log('Append hogaya bhai!!!');  //if the file is written
//  });
////Code running instructions:1.open terminal and type 'node script.js'.
////test case: error will be displayed if the file is not written r 
////test case: 'Append hogaya bhai!!!' will be displayed if the file is written.
////change in txt file:Kaise Ho Bhai!!Main To achha Hun Bhai!!

/*----------------------------------------------------------------------*/
//// 3.copyfile:It is used to copy a file.
//// syntax: fs.copyFile(src, dest, callback)
////EXAMPLE:
////note: hey.txt should be present in your folder
// const fs = require('fs');   //require is used to import fs(Filesystem) module
// fs.copyFile('hey.txt', 'copy.txt', function(err) {   //err is used to check if the file is written
// if (err) {
//          console.error('Error',err);  //if the file is not written
//          return;        
//        }else console.log('Copy hogaya bhai!!!');  //if the file is written
//   });
////Code running instructions:1.open terminal and type 'node script.js'.
////test case: error will be displayed if the file is not written
////copy.txt will be created.
////test case: 'Copy hogaya bhai!!!' will be displayed if the file is written.  

// /*----------------------------------------------------------------------*/

//// 4.rename:It is used to rename a file.
//// syntax: fs.rename(oldPath, newPath, callback)
////EXAMPLE:
////note: hello.txt should be present in your folder if not,you can make it as 'hello.txt'
// const fs = require('fs');   //require is used to import fs(Filesystem) module
// fs.rename('hey.txt', 'hi.txt', function(err) {   //err is used to check if the file is written
// if (err) {
//              console.error('Error',err.message);  //if the file is not written
//              return;        
//            }else console.log('Rename hogaya bhai!!!');  //if the file is written
//   });
////Code running instructions:1.open terminal and type 'node script.js'.
////test case: error 
////test case: 'Rename hogaya bhai!!!' will be displayed if the file is written.
////change in txt file:name changed from hello.txt to hi.txt


// /*----------------------------------------------------------------------*/


//// 5.unlink:It is used to unlink(delete) a file.
//// syntax: fs.unlink(path, callback)
////EXAMPLE:
////note: hi.txt should be present in your folder
// const fs = require('fs');   //require is used to import fs(Filesystem) module
// fs.unlink('hi.txt', function(err) {   //err is used to check if the file is written
// if (err) {
//          console.error('Error',err.message);  //if the file is not written
//          return;        
//        }else console.log('Unlink/delete hogaya bhai!!!');  //if the file is written
//   });
////Code running instructions:1.open terminal and type 'node script.js'.
////test case: error will be displayed if the file is not written 
////test case: 'Unlink hogaya bhai!!!' will be displayed if the file is written.


// /*----------------------------------------------------------------------*/


//// 6.readdir:It is used to read a Folder/ directory.
//// syntax: fs.readdir(path, callback)
////EXAMPLE:
// const fs = require('fs');   //require is used to import fs(Filesystem) module
// fs.readdir('.', function(err, files) {   //err is used to check if the file is written
// if (err) {
    //          console.error('Error',err.message);  //if the file is not written
    //          return;        
    //        }else console.log(files);  //if the file is written
//   });
////Code running instructions:1.open terminal and type 'node script.js'.
////test case: error will be displayed if the file is not written 
////test case: '[ \'script.js\', \'package.json\' ]' will be displayed if the file is written.

// /*----------------------------------------------------------------------*/
//// 7.mkdir:It is used to create a directory.
// syntax: fs.mkdir(path, { recursive: true }, callback)
//EXAMPLE:
// const fs = require('fs');   //require is used to import fs(Filesystem) module
// fs.mkdir('./newdir', { recursive: true }, function(err) {   //err is used to check if the file is written
// if (err) {
//              console.error('Error',err.message);  //if the file is not written
//              return;        
//            }else console.log('Directory created successfully!!!');  //if the file is written
//   });
////Code running instructions:1.open terminal and type 'node script.js'.
////test case: error will be displayed if the file is not written 
////test case: 'Directory created successfully!!!' will be displayed if the file is written.

// /*----------------------------------------------------------------------*/  

// 8.rmdir:It is used to remove a directory(only empty directory).
// syntax: fs.rmdir(path, callback)
//EXAMPLE:there is a folder named 'rmdir' in your main directory
//it has no files in it
// const fs = require('fs');   //require is used to import fs(Filesystem) module
// fs.rmdir('./newdir',{recursive: true}, function(err) {   //here,rmdir is the directory/folder path that you want to remove
// if (err) {
//              console.error('Error',err.message);  //if the file is not written
//              return;        
//            }else console.log('Directory removed successfully!!!');  
//   });
////Code running instructions:1.open terminal and type 'node script.js'.
////test case: ' Directory gayi bhai bhai!!!' will be displayed if the file is

/*--But----------------------------------------------------
if the directory is not empty,you will get an error
suppose it has 'a.txt' file in it
then,we use the option {recursive: true}
syntax: fs.rmdir(path, {recursive: true}, callback)
*/

////example:
// const fs = require('fs');   //require is used to import fs(Filesystem) module
// fs.rmdir('./rmdir', {recursive: true}, function(err) {   //here,rmdir is the directory/folder path that you want to remove
// if (err) {
//              console.error('Error',err.message);  //if the file is not written
//              return;        
//            }else console.log('Directory removed successfully!!!');  
//   });
////Code running instructions:1.open terminal and type 'node script.js'.
////test case: ' Directory gayi bhai bhai!!!' will be displayed if the file is written



/*-----------------------------------------------------------------------------------------------------*/
/*HTTP and HTTPS SERVER:
What is Protocol?
A protocol is a set of rules that define how data is transmitted over a network.
There are two types of protocols: HTTP and HTTPS.

What is HTTP?
HTTP (Hypertext Transfer Protocol) is a protocol for transferring data over the internet.
It is a set of rules that define how data is transmitted over the internet.
HTTP is used for communication between clients and servers.

What is HTTPS?
HTTPS (Hypertext Transfer Protocol Secure) is a protocol for transferring data over the internet.
It is a set of rules that define how data is transmitted over the internet.
HTTPS is a secure version of HTTP that uses encryption to protect data from being intercepted or modified by third parties.
*/

/*HTTP SERVER:
HTTP servers are used to handle requests from clients.
HTTP servers are created by exporting and importing code.   
HTTP 1 HAS TWO VERSIONS:
HTTP 1.0 and HTTP 1.1

WHAT is HTTP 1.0?
HTTP 1.0 is a version of the HTTP protocol.
specs:It is a stateless protocol, meaning that each request
is treated as a separate entity and does not depend on the
state of the server.
It is a connection-oriented protocol, meaning that the server keeps
a connection open between the client and the server until the client disconnects. 


WHAT IS HTTP 1.1?    
HTTP 1.1 is a version of the HTTP protocol.
specs:It has all the features of HTTP 1.0,but it is more efficient because 
it uses persistent connections
(means that the server keeps a connection open between the client and the server).




WHAT IS HTTP 2.0?
specs:
- It is a more efficient version of HTTP 1.1.
- It uses multiplexing to improve performance.
- It uses header compression to reduce overhead.
- It uses server push to improve performance.

WHAT IS HTTP 3.0?
specs:
- It is a more efficient version of HTTP 2.0 because it uses QUIC(Quick UDP Internet Connections)
-faster recovery from packets lost
- faster connection establishment
- faster data transfer


*/
/*HTTP MODULES:
HTTP modules are used to create HTTP servers in Node.js.
HTTP modules are created by exporting and importing code.
HTTP modules are used to handle requests from clients.

*/
//example:
// const http = require('http');
// const server = http.createServer(function(req, res){
//     res.end('Hello World');
// });
// server.listen(3300);   //any inactive port can be used
//just go to http://localhost:3300 in your browser
//it will display 'Hello World' in your browser until the server is closed(if we type 'ctrl+c' in the terminal)
//the server will be closed and the browser will display 'Cannot connect to the server' in the browser
//  until the server is restarted(if we type 'node script.js' /'nodemon script.js' in the terminal)


/*******************************************NPM*****************************************************************************/
/*
1.NPM understanding
2.Installing and uninstalling anything basics and advanced
3.dependencies
4.devdependencies
scripts - understanding default scripts PATH and custom scripts
*/

/*NPM understanding:
npm is a package manager that helps you install and manage Node.js packages.
Fun fact : it has a lot of packages other than Node.js packages.
like react,react-native,angular,etc.

Installed node.js is called as 'module'
and downloaded from 'npm' is called as 'package'
example:
1.text to speech package by npm : 'npm i text-to-speech'
2.image to speech package by npm : 'npm i image-to-speech'
3.video to speech package by npm : 'npm i video-to-speech'
4.face detection package by npm : 'npm i face-detection'
5.speech to text package by npm : 'npm i speech-to-text'
6.object detection package by npm : 'npm i object-detection'
7.image classification package by npm : 'npm i image-classification'
8.natural language processing package by npm : 'npm i natural-language-processing'
9.machine learning package by npm : 'npm i machine-learning'
10.deep learning package by npm : 'npm i deep-learning'

Uninstall:npm uninstall <package_name>  
*/
/*What are Node modules?
Node modules are packages that contain code that can be reused across multiple projects.
Node modules are created by exporting and importing code.

It has dependencies of devDependencies.

dependencies:are used to install packages that are required for the project.example: express,etc.
install: npm i express 
uninstall: npm uninstall express

/*
devDependencies:are used to install packages that are required for the development of the project
but are not required for the production/deployment of the project eg: nodemonetc.
install: npm i nodemon --save-dev
uninstall: npm uninstall nodemon

*/

/* 
---------NPM SCRIPTS---------------------*start and test are the only two default scripts
OS will run 'npm start' and 'npm test' by default
npm start   //start the server 
npm test    //test the server
---------OTHERS NEED run' BEFORE STARTING THE SERVER---------beacuse,these are custom scripts
and problem can occur if we run them before starting the server or incorrectly run them.eg:npm chacha  //invalid command,not built yet
npm run dev    // start the server in development mode
npm run concurrency  //start the server in concurrent mode(means that multiple requests can be handled at the same time ;ike react + nodejs in MERN stack)
npm run watch        //start the server in watch mode (means that the server will be restarted when the source code changes)
npm run build//     //build the project
npm run lint        //check if the code is linted(means that the code is clean and has no errors)
npm run format      //format the code(means that the code is clean and has no errors)

*/

/*ACTIVITY:
open package.json file
in scripts section,add the following scripts:
"start": "node server.js",
chacha: "echo\"Chacha is here",

now save it and open terminal 
test cases:
1.npm start:should start node server.js

2.npm chacha:should print Chacha is here in the terminal
but,it will return an error because chacha is an unknown command.
Therefore,we have to use 'npm run chacha' instead of 'npm chacha'.
Npw,> backend-practice@1.0.0 chacha
    > echo"Chacha is here    //success
*/

/*************************Express.js Framework************************** */
/*What is a framework?
A framework is a collection of tools and libraries that help you build a software application.
It is a set of pre-built components that you can use to build your application.


What is Express.js?
It is a npm package that helps you build web applications and APIs.
Express.js is a popular Node.js web framework for building web applications and APIs.
It is used to create a server and handle HTTP requests and responses.
It is a set of tools and libraries that help you build a software application.

How it works?
Suppose we sent a request (clicked on the image link) to facebook to show the image.
Facebook will use Express.js to handle the request and send the image to the user.
It is a set of tools and libraries that help you build a software application.

installation; In your terminal, type 'npm i express' or 'npm install express' .
*/
////In your script.js file, type 
// const express = require('express');     // to import express module.
// const app = express();                  // to create an express app.
// app.get('/', (req, res) => {            // to create a route.
//     res.send('Hello Harsh');  
    
//               // to send a response.
// });
// app.listen(3300);                       // to start the server.

/*-----------------------------------------------ROUTES----------------------------------------------------------------*/
/*What is a route?
A route is a path that is used to access a resource.
example:http://localhost:3000/                     //this is default (/) route.
        http://localhost:3000/home                 //this is home route.
        http://localhost:3000/contact             //this is contact route.
        http://localhost:3000/about               //this is about route.
*/


//example:
// Run the following code in your script.js file:
//use command 'nodemon script.js'

// const express = require('express');
// const app = express();

// app.get('/',function(req,res){
//   res.send("Home page hain bhai")
// })

// app.get('/profile',function(req,res){
//     //linking index.html to it

//     console.log("Profile page hain bhai")
//   })
// app.get('/profile/male',function(req,res){
//     res.send("Male kaProfile page hain bhai")
//   })
// app.get('/profile/male/smit',function(req,res){
//     res.send("Smitraj ka Profile page hain bhai")
//   })  
// //and so on for all the route
// app.listen(3000);

//What is nodemon and what is it used for?
//nodemon is a tool that automatically restarts the server when you make changes to the code.
//install->npm install -g nodemon
//run script.js using nodemon:nodemon script.js   or npx nodemon script.js

/*-----------------------------------------------MIDDLEWARES----------------------------------------------------------------*/
/*What is a middleware?
A middleware is a function that is used to handle requests and responses.
It is a function that is used to handle requests and responses.

How middleware  works?
Suppose we sent a request (clicked on the image link) to facebook to show the image.
facebook will accept the request and send the image to the user.
but we can add a middleware to facebook to handle the request and send the image to the user.
We can pause the recieving request and perform some action before sending the response(using middelware).
requests can be:1.get 2.post 3.put 4.delete
*/
////example:
// const { Console } = require('console');
// const express = require('express');
// const app = express();

// app.use(function(req, res, next) {                               //1st middleware(we want to call it first)
//     console.warn("Middleware hain bhai");         
//     next();                                                    //we must use next to continue display the route(doesn't matter if it is working or not)
// });

// app.use(function(req, res, next) {                                //2nd middleware
//     console.warn("Doosra middleware hain bhai");         
//     next(); 
// });

// const path = require("path");
// app.get('/', function(req, res) {   
//   //i have my index.html file in my home directory.i want to access it using this route
//   //please give me the address of index.html file
//   res.sendFile(path.join(__dirname, 'index.html'));
//   console.log("index file hain bhai");
  
// });

// app.get('/profile', function(req, res) {                          //profile route (working)
//     res.send("Profile page hain bhai")
// });

// app.get('/login', function(req, res, next) { 
//     return next(new Error("Not implemented"));                   //we want to show that login page has problem
// });                                                              //so,we called the error handler middleware using next

// app.use(function(err, req, res, next) {                           //error handler middleware
//     console.error(err.stack); 
//     res.status(500).send('Something broke!'); 
// });

// app.listen(3000);         
 
////---------------------------------------------------------------------------------------------------------------//
////******************Remember:  FRONTEND - BACKEND - FRONTEND********************              // server
/*-------------ERROR HANDLERS-------------*/
////Syntax FOR ERROR HANDLERS(PLEASE USE AT LAST IN YOUR SCRIPT.JS FILE):
/*const express = require('express');
const app = express();
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
*/


/**********************************FORM HANDLING*****************************************************/
/*What is a form? :
A form is a HTML element that is used to collect user input.
syntax:
<form action="/action_page.html  " method="post">
<label for="fname">First name:</label><br>
<input type="text" id="fname" name="fname" value="John"><br>
<label for="lname">Last name:</label><br>
<input type="text" id="lname" name="lname" value="Doe"><br>
<input type="submit" value="Submit">
</form>
*/

/*---------------------------Cookies-------------------------------------------*/
//Usually what happens,when we use some wesite,if we give request to download the image,it asks ,what is your username and 
//password.We give it .Again ,we want to see another picture,again it happens ,server asks you what is your username and
//this is very frustrating.
//So,we use cookies to save the user's information.
//syntax:
// app.use(express.json());                         //these two lines are for parsing the request body(used in postman)
// app.use(express.urlencoded({ extended: true }));  //parsing means converting the request body to a javascript object


//example:


// const express = require('express');
// const cookieParser = require('cookie-parser'); // Import cookie-parser middleware
// const app = express();

// app.use(cookieParser()); // Use cookie-parser middleware

// app.get('/', function(req, res) {
//     res.send("Home page hai bhai");
// });

// app.get('/profile', function(req, res) {
//     res.send("Profile page hai bhai");
// });

// app.get('/setcookie', function(req, res) {
//     res.cookie('name', 'harsh');
//     res.send("Cookie hai bhai");
// });

// app.get('/getcookie', function(req, res) {
//     var name = req.cookies.name; // Access the cookie using req.cookies
//     if (name) {
//         res.send(`Cookie name value: ${name}`);
//     } else {
//         res.send("Cookie not found");
//     }
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

////test cases:
//1.open terminal and type 'node script.js'
//2.open browser and type 'http://localhost:3000'
//3.open browser and type 'http://localhost:3000/profile'
//4.open browser and type 'http://localhost:3000/setcookie'->
//5.open browser and type 'http://localhost:3000/getcookie'->cookie name value: harsh


//*************************************SESSION************************************************** */
//What is a session?
//A session is a way to store information about a user in a web application.
//It is a way to keep track of a user's interactions with the application.
//A session is typically stored on the server-side, and is associated with a unique identifier, known as a session ID.
//The session ID is stored in a cookie on the client-side, and is used to retrieve the session information from the server.

//How session works?
//When a user makes a request to the server, the server checks if the user has a valid session. If the user has a valid session,
//the server serves the user's request. If the user does not have a valid session, the server creates a new session for the user,
//stores the session ID in a cookie, and sends the user's request to the server.

//When the user makes a request to the server, the server checks if the user has a valid session. If the user has a valid session,
//syntax:
// app.use(session({                      //session middleware
//     secret: 'secret',                  //secret key
//     resave: false,                     //resave
//     saveUninitialized: true            //saveUninitialized(means if the session is not initialized,save it)
//   }));

////Example:

// const express = require('express');
// const session = require('express-session');

// const app = express();

// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: false, // Set to true if using HTTPS
//         httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
//         maxAge: 60000 // Cookie expires after 1 minute
//     }
// }));

// app.get('/', function(req, res) {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`You have visited this page ${req.session.count} times`);
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


//1.start server
//2.open browser and type 'http://localhost:3000'
//3.refresh the page
//4.refresh the page again(you will get the same result)
//5.refresh the page again(you will get the same result)


/*********************DYNAMIC ROUTES************************ */
//Dynamic routes are routes that can be changed at runtime. They are useful when you want to creat
// routes dynamically based on user input or other dynamic data.

//How dynamic routes work?

/* ->create a url you want by going on browser(ignore the error).
example:localhost:3000/about/

->create a route in server.js
->agar us hi url ko dynamic banana hain ,t oonly variable route ke pehle colon(:) lagado
syntax::localhost:3000/:about/              //dynamic route
example:
app.get("/profile/:variable", function (req, res) {
    res.send("Hello " + req.params.variable);  //req.params.variable will contain the value of the variable in the URL
});
TEST CASE : 
START THE NODE,JS server.
IN YOUR BROWSER ,RELOAD THE PAGE.
USE THE PATH localhost:3000/profile/:SMITRAJ
you will get "Hello , SMITRAJ"

change to localhost:3000/profile/:YASH
you will get "Hello ,YASH"  

similarly , we can display output for any variable route using this 'dynamic routing'.\


*
 */
//start node.js server
////EXAMPLE:
// const express = require("express");
// const path = require("path"); // Correctly require the path module
// const app = express();

// app.use(express.json());                            // For parsing JSON
// app.use(express.urlencoded({ extended: true }));    // For parsing form data

// // Set the view engine to EJS
// app.set("view engine", "ejs");

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, "public"))); 

// app.get("/", function (req, res) {
//     res.render("index");
// });
// app.get("/profile", function (req, res) {
//     res.send("This is a profile page");
// });

// app.get("/profile/:variable", function (req, res) {     //dynamic routing for any variable value
//     res.send("Hello " + req.params.variable);  //req.params.variable will contain the value of the variable in the URL
// });
// app.get("/profile/:name/:age", function (req, res) {  //dynamic routing for name and age
//     res.send("Hello " + req.params.name + " of age " + req.params.age + " years");  //req.params.variable will contain the value of the variable in the URL
// });      //here, name and age are variable names.

// app.listen(3000, function () {
//     console.log("Server started on port 3000");
// });

//*****************************MONGO DB******************************* */
//what is mongo db?
//MongoDB is a NoSQL database that stores data in a JSON-like format. It is a
//document-oriented database, which means that it stores data in the form of
//documents or objects, where each document represents a single record or entity.
//it is a relational database.
//example:
// const express = require("express");
// const mongoose = require("mongoose");
// const userModel = require("./models/userModel"); // Importing the user model

// const app = express();

// // Connect to MongoDB
// mongoose
//   .connect("mongodb+srv://borudeyash1:%40Yborude369@cluster0.dhq0o.mongodb.net/", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log("Error connecting to MongoDB:", err));

// // Routes
// app.get("/", (req, res) => {
//   res.send("Hey, welcome to the homepage!");
// });

// app.get("/create", async (req, res) => {
//   try {
//     const accept = async (name, username, email) => {
//       const user = await userModel.create({
//         name,
//         username,
//         email,
//       });
//       console.log("User created:", user);
//       return user;
//     };

//     const user1 = await accept("harsh", "harsh12", "harsh@123");
//     const user2 = await accept("yash", "yash12", "yash@123");
//     const user3 = await accept("smit", "smit12", "smit@123");

//     res.send("Users created successfully");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(`Failed to create users: ${err.message}`);
//   }
// });
// app.get("/users", async (req, res) => {
//   try {
//     const users = await userModel.find();
//     console.log("Users:", users);
//     res.send(users);
//   } catch (err) {
//     console.error("Error fetching users:", err);
//     res.status(500).send("Error fetching users");
//   }
// });

// // Start the server
// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });
////How to use?
//1. Install the required packages using npm install
//2. Run the server using node script.js
//3. Open your browser and navigate to http://localhost:3000/
//4. The server will respond with "Hey, welcome to the homepage!"
//5. Open your browser and navigate to http://localhost:3000/create
//6. The server will create a new user and return the user object
//7. Open your browser and navigate to http://localhost:3000/users
//8. The server will return a list of all users