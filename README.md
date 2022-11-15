# Web Service Todolist
## Tech Stack 
- Javascript
- NodeJS
- ExpressJs
- MySQL
- Sequelize
- JWT

## Requirement


For running this project please install nodejs and mysql.

## Getting Started to the development
- Clone the repository:
```
git clone https://github.com/marselinusphs/tpa005.git
```
- Switch to the repo folder:
```
cd tpa005
```
- Install all the dependencies using npm or you can using yarn:
```
npm install or yarn install
```
- Set configuration database like on your environment system,to the config file on mode development in file config/config.json :
```
"development": {
    "
    name": "root",
    "password": "",
    "database": "todo_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```
- Run the server:
```
npm run start
```

You can now access the server at http://localhost:3200

## API Documentation

## Todo

## Create Todo

Request :

- Method : POST
- Endpoint : `/api/todos`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```
{
    "id" : "integer, unique" 
    "title" : "string", 
    "description" : "string",
    "isCompleted" : "boolean"
}
```
Response :

```
{
    "code" : "number",
    "status" : "string",
    "data" : {
         "id" : "integer, unique" 
         "title" : "string", 
         "description" : "string",
         "isCompleted" : "boolean"
         "createdAt" : "date",
         "updatedAt" : "date"
     }
}
```
## Get Todo By ID

Request :

- Method : GET
- Endpoint : `/api/todos/{id}`
- Header :
    - Accept: application/json

Response :

```
{
    "code" : "number",
    "status" : "string",
    "data" : {
        "id" : "integer, unique" 
        "title" : "string", 
        "description" : "string",
        "isCompleted" : "boolean"
         "createdAt" : "date",
         "updatedAt" : "date"
     }
}
```
## Update Todo

Request :

- Method : PUT
- Endpoint : `/api/todos/{id}`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```
{
    "title" : "string", 
    "description" : "string",
    "isCompleted" : "boolean"
}
```
Response :

```
{
    "code" : "number",
    "status" : "string",
    "data" : {
         "id" : "integer, unique" 
         "title" : "string", 
         "description" : "string",
         "isCompleted" : "boolean"
         "createdAt" : "date",
         "updatedAt" : "date"
     }
}
```
## List Todos

Request :

- Method : GET
- Endpoint : `/api/todos`
- Header :
    - Accept: application/json
- Query Param :
    - size : number,
    - page : number

Response :

```
{
    "code" : "number",
    "status" : "string",
    "data" : [
        {
             "id" : "integer, unique" 
             "title" : "string", 
             "description" : "string",
             "isCompleted" : "boolean"
             "createdAt" : "date",
             "updatedAt" : "date"
        },
        {
             "id" : "integer, unique" 
             "title" : "string", 
             "description" : "string",
             "isCompleted" : "boolean"
             "createdAt" : "date",
             "updatedAt" : "date"
        }
    ]
}
```
## Delete Todo

Request :

- Method : DELETE
- Endpoint : `/api/todos/{id}`
- Header :
    - Accept: application/json

Response :

```
{
    "code" : "number",
    "status" : "string"
}
```
