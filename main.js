/*Projects loads array of cards to page on page load and attaches event listeners to nav links, also on page load
Cards are built using a createProjectCards function which builds cards using data from projects array and prints them using printToDom function
Event listener calls three functions, one for each nav link
Each function removes the class of hide from the attached page and adds it to the others */


//array of example projects
const projects = [{
        title: 'HTML project',
        screenshot: './images/2019-03-12.png',
        description: 'This project is an exercise in basic HTML. I created it to practice HTmL tags, and I did so by writing an HTmL document with various tags such as sections and headers.',
        technologiesUsed: 'HTML, CSS, vanilla JavaScript, version control with Github, Ubuntu terminal.',
        available: true,
        url: 'www.github.com/sarahjulesthorne',
        githubURL: 'www.github.com/sarahjulesthorne',
    },
    {
        title: 'CSS Project',
        screenshot: './images/2019-03-12.png',
        description: 'This project is an exercise in styling using CSS. I created it to practice flexbox and color manipulation. I used various styles such as display, background-color, and flex-flow to reach my outcome.',
        technologiesUsed: 'HTML, CSS, vanilla JavaScript, version control with Github, Ubuntu terminal.',
        available: false,
        url: 'www.github.com/sarahjulesthorne',
        githubURL: 'www.github.com/sarahjulesthorne',
    },
    {
        title: 'JavaScript Project',
        screenshot: './images/2019-03-12.png',
        description: 'This project is an exercise in JavaScript functions. I created it to practice looping, variables, and functions, etc. I reached my goal by practicing creating arrays, looping over them with for loops, and printing to the dom.',
        technologiesUsed: 'HTML, CSS, vanilla JavaScript, version control with Github, Ubuntu terminal.',
        available: true,
        url: 'www.github.com/sarahjulesthorne',
        githubURL: 'www.github.com/sarahjulesthorne',
    },
    {
        title: 'Github Project',
        screenshot: './images/2019-03-12.png',
        description: 'This project is an exercise in version control with Github. I created it to master repository basics in Github. I did so by creating, initializing, adding, commiting, and pushing repositories and files to Github. I also practiced branch creation and merging/pull requesting in the branches.',
        technologiesUsed: 'HTML, CSS, vanilla JavaScript, version control with Github, Ubuntu terminal',
        available: false,
        url: 'www.github.com/sarahjulesthorne',
        githubURL: 'www.github.com/sarahjulesthorne',
    },
];

//print function which selects an element by its id and sets the inner HTML to the designated variable's value
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

//domStringBuilder function which uses a for loop to iterate over the projects array, builds the selected values into an HTML card, and prints the final array of cards to the dom
const createProjectCards = () => {
    let domString = '';
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].available) {
            domString += `<section class='project-card padding'>`;
            domString += `<h5 class='card-title padding-vertical title'>${projects[i].title}</h5>`;
            domString += `<img class='padding-vertical' src=${projects[i].screenshot} alt='screenshot of project page'/>`;
            domString += `<p class='padding'><span class='italic-text'>Project Description</span>: ${projects[i].description}</p>`;
            domString += `<p class='padding'><span class='italic-text'>Technologies Used</span>: ${projects[i].technologiesUsed}</p>`;
            domString += `<footer>`;
            domString += `<p class='padding'>View the project <a href=projects[i].url>here</a></p>`;
            domString += `<p class='padding'>View the project on Github <a href=projects[i].githubURL>here</a></p>`;
            domString += `</footer>`;
            domString += `</section>`;
        }
    }
    printToDom('projectsContainer', domString);
};

//function which removes the class of hide from the bioPage and adds it to the other two pages
const bioNavDisplay = (event) => {
    event.preventDefault;
    document.getElementById('bioPage').classList.remove('hide');
    document.getElementById('technologiesPage').classList.add('hide');
    document.getElementById('projectsPage').classList.add('hide');
};

//function which removes the class of hide from the technologies page and adds it to the other pages
const technologiesNavDisplay = () => {
    event.preventDefault;
    document.getElementById('technologiesPage').classList.remove('hide');
    document.getElementById('bioPage').classList.add('hide');
    document.getElementById('projectsPage').classList.add('hide');
};

//function which removes the class of hide from the projects page and adds it to the other pages
const projectsNavDisplay = (event) => {
    event.preventDefault;
    document.getElementById('projectsPage').classList.remove('hide');
    document.getElementById('bioPage').classList.add('hide');
    document.getElementById('technologiesPage').classList.add('hide');
};

//function attaches click event listeners to the three nav links
const navEventListener = () => {
    document.getElementById('navToBio').addEventListener('click', bioNavDisplay);
    document.getElementById('navToTechnologies').addEventListener('click', technologiesNavDisplay);
    document.getElementById('navToProjects').addEventListener('click', projectsNavDisplay);
};

const init = () => {
    createProjectCards();
    navEventListener();
    technologiesNavDisplay(fullPages);
};
init();