import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project'
const Portfolio = (props) => {

    const projects = [
        {
            name: 'Pizza Tracker',
            img: "/Pizza.PNG",
            code:"https://github.com/JTLaMarre/Pizza_tracker",
            deploy: "https://pizza--tracker.herokuapp.com/",
            description:"a pizza tracking application built with bulma framework and sequelize allows, customer users to see a pizza's status and a employee  portal allows employees to update pizza status.",
            id: 1
        },
        {
            name: 'TrailHeads',
            img: "/trailheads.PNG",
            code:"https://github.com/lu-gflores/TrailHeads",
            deploy: "https://lu-gflores.github.io/TrailHeads/",
            description:"a trail finding app that pulls from a hiking api and gives trail locations based on a searched city within a certain amount of miles.",
            id:2
        },
        {
            name: 'weatherDash',
            img: "/weatherdash.PNG",
            code:"https://github.com/JTLaMarre/Weather_dashboard",
            deploy: "https://jtlamarre.github.io/Weather_dashboard/",
            description:"A weather dashboard built with bootstrap and pulling data from open weather api.",
            id:3
        },
        {
            name: 'Work Day Schedule',
            img: "/Work day scheduler.PNG",
            code:"https://github.com/JTLaMarre/Day_Planner",
            deploy: "https://jtlamarre.github.io/Day_Planner/",
            description:"a workday schdeuler built in javascript allows users to schedule things and updates throughout the day with the current hour.",
            id:4
        },
        {
            name: 'Burger Game',
            img: "/Screenshot.PNG",
            code:"https://github.com/JTLaMarre/Burger_Game",
            deploy: "https://sheltered-chamber-49316.herokuapp.com/",
            description:"A basic game that allows users to name a burger then devour it moving it from one database table to another.",
            id:5
        },
        {
            name: 'Employee Directory',
            img: "/EmployScreen1.PNG",
            code:"https://github.com/JTLaMarre/EmployeeDirectory",
            deploy: "https://jtlamarre.github.io/EmployeeDirectory/",
            description:"An employee directory with randomly generate employees which can be sorta by first name and can be searched through.",
            id:6
        },
        {
            name:"Let's Guess",
            img:"/LetsGuess.PNG",
            code:"https://github.com/lynseahoss/Lets-Guess",
            deploy:"http://letsguess.herokuapp.com/",
            description:"A react based game app, that has the user guess a random character form a list of characters. users can navigate through to a menu page or evena character page that allows users to read about the characters in the game. the main game starts a timer and the user gets 2 and a half minutes to guess as many characters as possible."
    
        }
    ]






    return (
        <div>
            <Header />
            <div className="columns is-centered is-multiline">
           {projects.map((project)=>{
               return(
            <Project key={project.id} img={project.img} name={project.name} deploy={project.deploy} code={project.code} description={project.description} />
                )
           })}
            </div>
            <Footer/>
         </div>
    );
}

export default Portfolio;