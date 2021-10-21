# Basic Api Server

## Installation

  clone repo, and then run the 'npm i' command while in the root directory to install dependencies.

## Summary of Problem Domain

  Application created with the purpose of practicing the following skills:
  
  Middleware, routes, and database operations testing using Jest

  Creating express APIs that follows the REST standard and perform CRUD operations on a SQL DB

## Links to application deployment

  App deployed on Heroku [here](https://basic-api-server-lab03.herokuapp.com/)

  Pull req from dev found [here](https://github.com/Beers15/basic-api-server/pull/3)

## Uml Diagram

![diagram](./basic-api-server.png)
^Plus /clothing route

## Routes

* REST Method GET
  * Path: /food
    * returns all food items in db as an array
  * Path: /food/:id
    * returns the specified food item with supplied id

  * Path: /clothing
    * returns all clothing items in db as an array
  * Path: /clothing/:id
    * returns the specified clothing item with supplied id

* REST Method POST
  * Path: /food
    * takes a JSON obj as input and returns the record that was added to the DB

  * Path: /clothing
    * takes a JSON obj as input and returns the record that was added to the DB

* REST Method PUT
  * Path: /food/:id
    * takes a JSON obj as input and returns the record that was updated in the DB, with updated data included

  * Path: /clothing/:id
    * takes a JSON obj as input and returns the record that was updated in the DB, with updated data included

* REST Method DELETE
  * Path: /food/:id
    * deletes the record with the specified id and returns the deleted item upon successful deletion

  * Path: /clothing/:id
    * deletes the record with the specified id and returns the deleted item upon successful deletion
