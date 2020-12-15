
# Tax Flow of money in PG County Maryland
## Links
  - Heroku link: https://finalproject377.herokuapp.com/#
  - [Known bugs](#known-bugs)
  - [User Manual](#user-manual)
  - [Developer Manual](#developer-manual)
  
  
## Description
  Our project is a relatively simple project. We found that tax data is far too large and not easy to read. The website does offer interactivity to create your own visualizations of the tax data, however, we do not think people will actually use this feature. This is why we set out to create a website that creates the graphs and displays them for you. We would create a certain amount of graphs that would tell a story of how the tax money is used within the system. We originally wanted to include all facetes of PG County. This would be have been far too much data to work with and we ended up narrowing our focus to just Police data. The data includes the amount of money spent, payee name, agency name, zip code, and payment description. We primarily used the money spent, payee name, and agency name. The agency name for our graphs will always be Police, while money spent and payee name are not static variables. The graphs generated are graphs that we thought, as data scientists, describe the best picture of your tax dollars at work. We used four different apis that will be linked at the top of this page. We used tax data from 2015-2019, we excluded 2020 as it would only give us an incomplete dataset ending in September. This would have heavily skewed our data and not showed the true picture. 
  
  We wanted to make the use of this website as simple as possible. We realize that we could have it incredibly interactive for any data scientist to use, but that is not the information problem we see. We wanted to make a system that was easy to read and user friendly to anyone that is not technologically savy and not a data scientist. We wanted a simple interface where people can go in order to check the history of tax money usage at a moments notice. There is no shuffling through data sources or creating your own visualizations. At the click of a button there is the data you wanted and should know regarding your tax dollars. See the [User Manual](#user-manual) for more details on how this application works. 


  
## User Manual
  As previously mentioned this application is incredibly simple to use. Once the application is loaded simply click the button that says display graphs and there is the graphs that are automatically generated for your usage. There is also a navigation bar that contains what the application is about and a Documentation page for the future developers that undertake this project.
  In order to display the graphs you want select the year you are curious about and a graph will show up. The graphs include the top 15 agencies that were paid the most often each year. 
  
  
  
## Developer Manual 
  In order to work on this repo you will need to pull and copy the repository to your local desktop or computer. Through there you can either work on it from your local side by creating a local server for your usage or by using an external application to host the application through a website. This will require installing npm by typing npm install into your console and then typing npm start in order to start the local host. 
  There is 5 get and post requests that occur on the backend. These include each of the 5 years that the data is from within the server.js file. The fetch requests for this data are in the script.js file. Each endpoint goes to the api's for the PG County website. We created 5 different eventlisteners that run when the user clicks the buttons and it will display the graph for that specific year. 
  Two of the aspects that we did not get to in this project were the addition of another graph per year and the combined dataset. The reason we did not get to adding another graph was simply we felt that we could not make it look presentable to user, we felt it did more harm than good. We simply could not figure out how to create an entirely new array that combines all five of the apis into one. In order to see what our whole vision was for this project please check the wireframes pdf that is within this repository. 

