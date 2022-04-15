import portfolio from '../images/projectsicon/portfolio.gif'
import minesweeper from '../images/projectsicon/minesweeper.gif'
import todo from '../images/projectsicon/todo.gif'


const portfolioData = [
    {
        image: portfolio,
        link: 'https://github.com/thansgit/portfolio',
        desc: 'portfolio',
        summary: 'An app displaying portfolio',
        tech: 'React, Bootstrap, CSS'
    },
    {
        image: minesweeper,
        link: 'https://github.com/thansgit/minesweeper_gui',
        desc: 'minesweeper gui',
        summary: 'Graphical user interface for minesweeper game',
        tech: 'C++17, QT'
    },
    {
        image: todo,
        link: 'https://github.com/thansgit/to-do',
        desc: 'to-do',
        summary: 'To-Do list with backend database',
        tech: 'React, Express, Mongoose, MongoDB'
    },
]

export default portfolioData