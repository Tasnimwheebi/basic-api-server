# basic-api-server


## LAB - 03
## **Deployment Test**
## **Author: Tasnim Wheebi**
[PR LINK](https://github.com/Tasnimwheebi/basic-api-server/pull/2)


[Heroku APP](https://tasnim-basic-api-server.herokuapp.com/)


[Report Test](https://github.com/Tasnimwheebi/basic-api-server/actions)

## **Setup**
* .env requirements
  * PORT - 3000


## **Running the app**

* Endpoint: 
**npm start**

    * `/api/v1/food` : json object
   


          [

          {
           "id": "60a65f8c4839a32019dd4857",
            "name": "strawberry",
            "type": "fruit"
            }

           ]


     * `/api/v1/clothes`  : json object 

            [

                {
                 "id": "60a65f8c4839a32019dd4857",
                 "name": "T-shirt",
                  "color": "green"
                  }

           ]  

  * `/`
            
        Return Welcome to my web App

  * `/bad` 

          Something went wrong

  * `*`

        Page not found 404

## **Tests**

npm test

![Test img](img/basic-api-server.PNG)

* 404 on a bad route
* 404 on a bad method
* The correct status codes and returned data for each REST route
  * Create a record using POST
  * Read a list of records using GET
  * Read a record using GET
  * Update a record using PUT
  * Destroy a record using DELETE

## **UML**

![uml img](img/3.PNG)
