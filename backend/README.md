# frist we npm init to get package.json
# Now install all dependencies that we need inside this project  this is name -
# npm i express, mongoose, jsonwebtoken, bcrypt, cors, dotenv, body-parser, multer, stripe, validator, nodemon.
# creating folder structure only -
# config, controllers, middleware, models, routes, uploads, .env
# Added this fetures ES6 "type":"module"
# Now importing all packages in server.js and making server 
# Now creating mongoDb cluster in mongoatlas getting url from thier now going to connect 
# congif folder creating db.js file and making connection to connect 
# creating models to store data into database 
# creating file foodModel.js
# creating file for controllers foodController.js and here import foodModel.js
# creating file for routes foodRoute.js and here imort express,foodController.js
# creating endpoint for foodRoute.js in server.js file.
# and uploading image using multer 
# logic inside foodController.js to store image in databasse using cloudinary
# creating  endpoint for Foodlist in foodRouter.jsx in funt in foodController
# remove food item from db using findbyid from foodmodel.js 
# creating files userController,userModel, userRouter to authenticate user to login and access all functionality.
# writing code for userModel.jsx after importing in usercontroller.jsx 
# importing usercontroller.jsx in userRouter.jsx after making endpoint make api endpoind in server.jsx.
# creating endpoind for store userCart data into database 
# creating file cartController.jsx
# creating file cartRouter.jsx
# now is this both intiliaze in server.jsx
# now creating file for auth.js to authenticate user using middleware  now connect to the cartRouter.jsx using import 