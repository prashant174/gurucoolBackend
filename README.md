<h1 align="center">Gurucool Backend Assignment</h1>

## Deployed link

<br>
https://gurucoolbackendbyprashant.onrender.com/

<br>

## Installation

```
npm install
```

## Start the Backend server 

```


npm run server
```


<br>

##  MVC Structure

```

     ├── config
     |    └── db.js
     ├── controllers
     |    └── quizController.js
     |    └── userController.js
     ├── middleware
     |    └── authenticate.js
     |    
     ├── models
     |    └── quizModel.js
     |    └── UserModel.js
     ├──routes
     |    └── quizRoute.js
     |    └── userRoute.js
     └── index.js
```
Things to do before starting the server:- 

-  create `.env` file and put "PORT", "MONGO_URL", "SECRET_KEY".
- "PORT" is for listening the server.
- "MONGO_URL" write your mongo url here.
- "SECRET_KEY" write your jwt secret key here

<br>

## Schema 

<br>

<h3><strong>Schema for signUp</strong><h3>

```js

{
    "name": "enter your name ,
    "email": "enter your email here",
    "password": "enter your password here",
  
}
```


<h3><strong>Schema for creating/posting  Quizzes</strong><h3>

```js
{
  "question": "What is the capital of India?",
  "options": ["Kolkata", "Delhi", "Mumbai", "Jaipur"],
  "rightAnswer": 1,
  "startDate": "2023-12-18T08:00:00.000Z",
  "endDate": "2023-12-29T09:00:00.000Z"
}
```

## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/signup</td>
            <td>This endpoint should allow users to register</td>
            <td>201</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/login</td>
            <td>This endpoint should allow users to login.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/quizzes</td>
            <td>This endpoint is used to create new quizzes  if valid token present in headers authorization with Bearer</td>
            <td>201</td>
        </tr>
         <tr>
            <td>GET</td>
            <td>/quizzes/active</td>
            <td>This endpoint is used to get all active quizzes if valid token present in headers authorization with Bearer</td>
            <td>200</td>
        </tr>
         <tr>
            <td>GET</td>
            <td>/quizzes/:id/result</td>
            <td>This endpoint is used to get Quiz result by Quiz ID if valid token present in headers authorization with Bearer</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/quizzes/all</td>
            <td>This endpoint is used view all Quizzes if valid token present in headers authorization with Bearer</td>
            <td>200</td>
        </tr>
        
    </tbody>
</table>


<br>

## Thank you for visiting

