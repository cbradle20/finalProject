
# Tax Flow of money in PG County Maryland
## Links
  - Heroku link: https://finalproject377.herokuapp.com/#
  - [Known bugs](#known-bugs)
  - [User Manual](#user-manual)
  - [Developer Manual](#developer-manual)
##Known bugs
  The main and biggest issue with this project was trying to figure out how to get our data into an array from the server. As of typing this we have yet to figure out how to accomplish this even though our code seems correct, we all know this is a common programming issue. The fetch requests work and are collecting the data from the apis, however, there is nothing to show for it besides in the console. In order to determine what our project was supposed to look like please see the interactive wireframes pdf within this repo. 
## Description
  Our project is a relatively simple project. We found that tax data is far too large and not easy to read. The website does offer interactivity to create your own visualizations of the tax data, however, we do not think people will actually use this feature. This is why we set out to create a website that creates the graphs and displays them for you. We would create a certain amount of graphs that would tell a story of how the tax money is used within the system. We originally wanted to include all facetes of PG County. This would be have been far too much data to work with and we ended up narrowing our focus to just Police data. The data includes the amount of money spent, payee name, agency name, zip code, and payment description. We primarily used the money spent, payee name, and agency name. The agency name for our graphs will always be Police, while money spent and payee name are not static variables. The graphs generated are graphs that we thought, as data scientists, describe the best picture of your tax dollars at work. We used four different apis that will be linked at the top of this page. We used tax data from 2015-2019, we excluded 2020 as it would only give us an incomplete dataset ending in September. This would have heavily skewed our data and not showed the true picture. 
  
  We wanted to make the use of this website as simple as possible. We realize that we could have it incredibly interactive for any data scientist to use, but that is not the information problem we see. We wanted to make a system that was easy to read and user friendly to anyone that is not technologically savy and not a data scientist. We wanted a simple interface where people can go in order to check the history of tax money usage at a moments notice. There is no shuffling through data sources or creating your own visualizations. At the click of a button there is the data you wanted and should know regarding your tax dollars. See the [User Manual](#user-manual) for more details on how this application works. 
  
  
  
## User Manual
  As previously mentioned this application is incredibly simple to use. Once the application is loaded simply click the button that says display graphs and there is the graphs that are automatically generated for your usage. There is also a navigation bar that contains what the application is about and a Documentation page for the future developers that undertake this project.
  In order to display the graphs you want select the year you are curious about and two graphs will show up. The graphs include the top 3 agencies that were paid and the average amount paid per payment. If you click on all it will include both of those graphs through the 5 years and also include a timeseries graph for the amount spent each year from 2015-2019. 

## Developer Manual 
  In order to work on this repo you will need to pull and copy the repository to your local desktop or computer. Through there you can either work on it from your local side by creating a local server for your usage or by using an external application to host the application through a website. This will require installing npm by typing npm install into your console and then typing npm start in order to start the local host. 
  There is 5 get and post requests that occur on the backend. These include each of the 5 years that the data is from within the server.js file. The fetch requests for this data are in the script.js file. Each endpoint goes to the api's for the PG County website. 
  Our Road Map consists of the wireframes pdf document in the repository. Please see [Known Bugs](#known-bugs) in order to determine where we went wrong while doing this project. 
  
  
  
README (top part of your README.md)

Title of your project
Description of your project
Link to the Heroku instance where your application can be used
Description of target browsers (iOS? Android? Which ones? Which versions?)
Link to User Manual
Link to Developer Manual
Developer Manual (bottom half of your README.md)

The audience of this document is future developers who will take over your system.
They know technical terms and have general knowledge about web applications, but do not have knowledge about your system design.
You need to provide a technical document so that future developers can start setting up the application on their local machines, and keep working on the system development after you leave the team.
Your Developer Manual covers:
How to install your application and all dependencies
How to run your application on a server
How to run any tests you have written for your software
The API for your server application - all GET, POST, PUT, etc endpoints, and what they each do
A clear set of expectations around known bugs and a road-map for future development.
