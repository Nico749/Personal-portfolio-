//variable declaration and storing info to display
const bodyEl=document.querySelector("#body-content")
const aboutmeBtn=document.querySelector("#aboutme")
const projectBtn=document.querySelector("#projects")
const contactBtn=document.querySelector("#contact")

const projectsObj=[{summary:"The application allows an user to insert and search for a location and displays it on a map with a list of events that will take place in that location",title:"Event Finder",deployed:`<a href="https://ekubik.github.io/event-finder/">`+"Go To Deployed Version"+`</a>`,github:`<a href ="https://github.com/ekubik/event-finder">`+"Go To Repository"+`</a>`,screenshot:`<a href ="./Demo_photos/Event_finder.png">`+"Click To Demo"+`</a>`},
{summary:"The user can insert the name of a city and the weather for that location is displayed as well as the forecast for the following days",title:"Weather Dashboard",deployed:`<a href="https://nico749.github.io/Weather_Dashboard/">`+"Go To Deployed Version"+`</a>`,github:`<a href ="https://github.com/Nico749/Weather_Dashboard">`+"Go To Repository"+`</a>`,screenshot:`<a href ="./Demo_photos/Weather_Screenshot.png">`+"Click To Demo"+`</a>`},
{summary:"The app allows the user to insert and save notes for a specific time of the day, displaying the hours with different colors based on the comparison with the current time",title:"Day Planner",deployed:`<a href="https://nico749.github.io/Day-Planner/">`+"Go To Deployed Version"+`</a>`,github:`<a href ="https://github.com/Nico749/Day-Planner">`+"Go To Repository"+`</a>`,screenshot:`<a href ="./Demo_photos/Day scheduler demo.png">`+"Click To Demo"+`</a>`}]

const contactsArr=[`<a href=" tel: +61 466505170">`+"Phone"+`</a>`,
`<a href="mailto:pasqualininic@gmail.com">`+"Send Me a Mail"+`</a>`,
`<a href="https://github.com/Nico749">`+"GitHub Profile"+`</a>`,
`<a href="https://www.linkedin.com/in/nico-pasqualini/">`+"LinkedIn Profile"+`</a>`,
`<a href="./Demo_photos/Resume Pasqualini.pdf">`+"Resume"+`</a>`]
 
const screenshotArr=["./Demo_photos/Event_finder.png","./Demo_photos/Weather_Screenshot.png","./Demo_photos/Day scheduler demo.png"]

let title=document.createElement("h1")
 title.style.textAlign="center"

//functions section
function appendAboutMe(){
   bodyEl.innerHTML=""
   title.innerHTML="About Me"
   let intro=document.createElement("p")
   intro.classList.add('introp','center')
   intro.innerHTML=`My name is Nico Pasqualini and I am a Junior Web Developer.
   I have always been fascinated by coding and programming, and I enjoy using my skills to contribute to the development of websites and applications.
   <br> My background is a bit uncommon because I graduated from University of Bologna in 2018 with a Master's Degree in Finance and 
   then I achieved a Master in Business Administration at Kaplan Business School, Melbourne. 
   <br>While in school, I completed several extra courses about Product Management, in a way to combine coding and Management skills.`
   bodyEl.appendChild(title)
   bodyEl.appendChild(intro)
}

function appendPreviousProjects(){
   bodyEl.innerHTML=""
   title.innerHTML="Projects"
   bodyEl.appendChild(title)
   for (var i =0;i<projectsObj.length;i++){
    var project = document.createElement('p');
    project.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
    var projectTitle=document.createElement('h1')
    projectTitle.style.textAlign="center"
    projectTitle.innerHTML+='<strong>'+ projectsObj[i].title+'</strong>'+'<br/>' 
    project.innerHTML+='<strong>Description:</strong> ' +projectsObj[i].summary +'<br/>' 
    project.innerHTML+='<strong>Deployed Version:</strong> ' +projectsObj[i].deployed +'<br/>' 
    project.innerHTML+='<strong>GitHub Repository:</strong> ' + projectsObj[i].github+ '<br/>' 
    project.innerHTML+='<strong>Screenshot:</strong> ' + "<button onclick='displayScreenshot(" + i + ")'> Click to See Screenshot </button>";
    bodyEl.appendChild(projectTitle)
    bodyEl.append(project)
   }
}

function displayScreenshot(num) {
   bodyEl.innerHTML=""   
   let newImage = document.createElement("IMG");
   newImage.setAttribute("src" , screenshotArr[num] )
   newImage.setAttribute("width", "100%");
   newImage.setAttribute("height", "100%");
   newImage.setAttribute("alt", "Screenshot Image");
   bodyEl.appendChild(newImage)

   let goBack=document.createElement('button')
   goBack.innerHTML="Go Back"
   bodyEl.appendChild(goBack)
   goBack.addEventListener("click",appendPreviousProjects)
  
}

function appendContacts(){
    bodyEl.innerHTML=""
    title.innerHTML="Contact Me"
    bodyEl.appendChild(title)
    for (let i =0;i<contactsArr.length;i++){
     var element = document.createElement('h1');
     element.classList.add('h1')
     element.innerHTML=contactsArr[i]
     bodyEl.appendChild(element)
    }
 }

//adding eventlisteners
aboutmeBtn.addEventListener("click",appendAboutMe)
projectBtn.addEventListener("click",appendPreviousProjects)
contactBtn.addEventListener("click",appendContacts)

appendAboutMe()