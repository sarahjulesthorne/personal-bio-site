//console.log(`Hey there`);
const projects = [
    {
title: 'HTML project',
screenshot: './2019-03-06.png',
description: 'This project is an exercise in basic HTML. I created it to practice HTmL tags, and I did so by writing an HTmL document with various tags such as sections and headers.',
technologiesUsed: 'HTML, CSS, vanilla JavaScript, version control with Github, Ubuntu terminal.',
available: true,
url: 'www.github.com/sarahjulesthorne',
githubURL: 'www.github.com/sarahjulesthorne',
    },
    {
        title: 'CSS Project',
        screenshot: './2019-03-06.png',
        description: 'This project is an exercise in styling using CSS. I created it to practice flexbox and color manipulation. I used various styles such as display, background-color, and flex-flow to reach my outcome.',
        technologiesUsed: 'HTML, CSS, vanilla JavaScript, version control with Github, Ubuntu terminal.',
        available: false,
        url: 'www.github.com/sarahjulesthorne',
        githubURL: 'www.github.com/sarahjulesthorne',
            },
            {
                title: 'JavaScript Project',
                screenshot: './2019-03-06.png',
                description: 'This project is an exercise in JavaScript functions. I created it to practice looping, variables, and functions, etc. I reached my goal by practicing creating arrays, looping over them with for loops, and printing to the dom.',
                technologiesUsed: 'HTML, CSS, vanilla JavaScript, version control with Github, Ubuntu terminal.',
                available: true,
                url: 'www.github.com/sarahjulesthorne',
                githubURL: 'www.github.com/sarahjulesthorne',
                    },
                    {
                        title: 'Github Project',
                        screenshot: './2019-03-06.png',
                        description: 'This project is an exercise in version control with Github. I created it to master repository basics in Github. I did so by creating, initializing, adding, commiting, and pushing repositories and files to Github. I also practiced branch creation and merging/pull requesting in the branches.',
                        technologiesUsed: 'HTML, CSS, vanilla JavaScript, version control with Github, Ubuntu terminal',
                        available: false,
                        url: 'www.github.com/sarahjulesthorne',
                        githubURL: 'www.github.com/sarahjulesthorne',
                            },
]

const printToDom = (divId, textToPrint) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = textToPrint;
};
// console.log(projects[1].title);
// console.log(projects[3].url);
// printToDom('projectsPage',  '<p>Hi?</p>');
let domString = '';
const createProjectCards = () => {
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
const init = () => {
createProjectCards();
};
init();