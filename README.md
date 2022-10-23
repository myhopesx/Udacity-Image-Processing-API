# Udacity-Image-Processing-API

## Script needed
  - **npm i** to intall all required dependencies
  - **npm run build** to build the project
  - **npm run start** to build and start the server
  - **npm run test** to run the jasmine test
  - **npm run format** to run lint with prettier
  
## API Endpoint
 - http://localhost:3000/api/images/:image/:width/:height
 
## required Params
 - image name
 - width
 - height
 
 ## Api Output example:
 1.**Request**:http://localhost:3000/api/images/encenadaport
 - output: error in get reqeust
 
 2.**Request**:http://localhost:3000/api/images/encenadaport/800
 - output: error in get reqeust
 
 3.**Request**:http://localhost:3000/api/images/encenadaport/800/-1
 - output: please enter correct height and width
 
 4.**Request**:http://localhost:3000/api/images/encenadaports/800/800
 - output: image not found 
 
 5.**Request**:http://localhost:3000/api/images/encenadaport/500/600
 - output: ![image](https://user-images.githubusercontent.com/71808558/197424632-83290092-309d-40c0-a04c-d30db2a5b5b2.png)
 
 ### image name examples:
 ![image](https://user-images.githubusercontent.com/71808558/197424548-1a7951c1-43cd-4cc9-846b-e86d2b93e9d9.png)

 
 
 
