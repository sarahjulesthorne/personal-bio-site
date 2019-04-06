# Personal Bio Site  
### Description  
#####Stage 1  
This project is the first stage of a personal bio site. I used hard-coded HTML to form a nav bar with fake links, a list of sample (but not yet accurate) technologies, and a div for the project cards. I then built an array of fake projects in my JavaScript. I looped over that array, testing on each iteration to see if the `available` key tested as true. If so, the string-builder function printed that product's card.  
##### Stage 2  
I redid the nav bar to be a Bootstrap nav bar with responsive sizing.  
I added event listeners to the nav links that displayed the selected page on link click and hid the other pages.  
I added notes and cleaned up my code from stage 1.  
### Screenshots  
##### stage 2  
![screenshot of projects page with two cards featuring information about example projects]()  
![screenshot of technologies page with list of learned tools and technologies]()  
![screenshot of bio page with paragraphs about the project author]()  
### Getting Started  
![Screenshot of the top half of my personal bio site. Displays page title, paragraphs of bio text, and list of technologies learned.](https://raw.githubusercontent.com/sarahjulesthorne/personal-bio-site/master/images/2019-03-23%20(1).png "Screenshot of top half of page on pageload in browser")  
![Screenshot of project cards. Display project title, image of example project, and information about the project.](https://raw.githubusercontent.com/sarahjulesthorne/personal-bio-site/master/images/2019-03-23%20(2).png "Screenshot of project cards")  
Clone the project down:  
```  
$ git clone url  
```  
### Prerequisites  
```  
$ npm install -g http-server  
```  
### Running  
```  
$ hs -p 5000  
```  
In your web browser navigate to localhost:5000
