import { Header,Footer,Card } from '../../components';
import './css/style.css';
import "animate.css";
import todo from '../../assets/images/todo-app.jpg'
import weather from '../../assets/images/weather-app.jpg'
import userAuth from '../../assets/images/user-auth.jpg'
import foodWeb from '../../assets/images/food-web.jpg'
function Project() {
    return (
        <>
        <div>
            <Header/>
            <div className="cardSection">
            <div className="container mt-5 d-flex flex-wrap justify-content-center">
            <a className="linkStyle" href='https://userauth-16e30.web.app/' target="_blank" rel="noreferrer">
            <Card className="animate__animated animate__zoomIn" title="Todo App" src={todo}>
            Todo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do
            </Card>
            </a>
            <a className="linkStyle" href='https://cranky-darwin-d5a143.netlify.app/' target="_blank" rel="noreferrer">
            <Card className="animate__animated animate__zoomIn " title="Weather App" src={weather}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            </Card>
            </a>
           <a  className="linkStyle" href='https://foodapp-d4d9e.web.app/' target="_blank" rel="noreferrer">
           <Card className="animate__animated animate__zoomIn" title="Food Web App" src={foodWeb}>
            The Food Ordering App helps the business owners showcase their menu under different categories.
            </Card>
           </a>
            <a className="linkStyle" href='https://firstproject-db5c1.web.app/index.html' target="_blank" rel="noreferrer">
            <Card className="animate__animated animate__zoomIn" title="User Authentication" src={userAuth}>
            Authentication is the act of proving an assertion, such as the identity of a user.
            </Card>
            </a>
            </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Project