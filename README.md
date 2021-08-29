# react-app-socialmedia
 Deployed using Firebase: https://react-app-socialmedia.web.app/

A pre-existing account -> Email: dave@gmail.com, Password: davedave
 
 A social media single-page application using React, Redux, Material-UI and Firebase. Based on Linkedin.
 Allows registering account, logging in with a registered account, and creating posts.
 
 React is used to create the main application. 
 
 Redux is used to manage logins/logouts and authentication. When a user is logged in, that user is stored in the redux user state, which will determine if a user is logged in, and who exactly the user is.
 
 Material-UI is used for the icons.
 
 Firebase is used for authentication, creating accounts and storing account details/posts. When a user attempts to register on the website, the firebase authentication database will be checked to make sure the entered email address does not exist yet. If it already exists, an error message will be displayed. If the email is unique, and all other fields have been filled, the entered inputs will be added as a row to the authentication database, and the user will be logged in.
 
 When logging in, the application will retrieve all the posts that are stored in the firestore database, and display them in the feed.
 
 Deployed using Firebase: https://react-app-socialmedia.web.app/
