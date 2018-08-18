Friend-finder
Description:

  Build a compatibility-based "Friend Finder" application -- basically and only a friend finder app. This full-stack site will take in results from the users' surveys, then compare their answers with those from other users which is in the friends.js file of the application. The application will then display the name and picture of the user with the best overall match. And the current user details like name, phot url, and the scores will be added to the friend list in friend.js file of the application.

Technologies Used:

  	Language: JavaScript.

  	Environment: Node JS.

  	Web application: Express.js.

  	Front-end: HTML5, Bootstrap, CSS3.

Packages Used:

    body-parser NPM package
    express NPM package
    path NMP package

Method:

  First created local server using express.js and ran it locally and connected the frontend to the backend.

  Created the frontend page using html5, bootstrap, css3. Here the user will enter their name, enter url of a photo, take the survey and submit it. There The script is written in the survey.html file where the action is controlled when the submit button is clicked. It takes the data entered by the user send to the friends api and compare it with the other friend list. Compares and displays the name and photo that best match.

  Created two routes: htmlRoutes and apiRoutes. The htmlRoutes will connect the html files to the server and the apiRoutes will connect to the api.

The logic behind:
  When the user entered data, it is captured and send to the friend api, the score is compared with each friend data scores. Then the difference of each score for each question of the user and the friend data is found and added up to make the sumdifference.
  for e.g.:
    newuser_score = [2,3,4,5,1]
    friendapi[0] = [3,4,1,4,2]
    difference = [1, 1, 3, 1, 1]
    sumdifference = [1+1+3+1+1] = 7

  Then the sumdifference for each friend in the api is found and pushed into an array. Then the smallest sumdifference from the array will be the best match for the user.

  This information is collected and send to the modal window which will display the name and the photo of the best match and the information of the new user is added to the friend api.

  Installation:
    The needed npm packages has to be installed :
      express : npm install Express
      body-parser: npm install body-parser

      Before running the app, the local server has to be run in the terminal with the command "node server.js" and local server has to be run in the browser.

  Deploy:
     The application is deployed in Heroku.
     Link to Heroku:
