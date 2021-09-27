import { Header, Footer } from '../../components';
import './css/style.css'
function Home() {
    return (
        <>
            <Header />
            <div className="barSection">
                <div className="container">
                    <h5 className="display-4 mb-4 font-weight-bold">Skills Set</h5>
                    <div className="bar html" data-skill="HTML" />
                    <div className="bar css" data-skill="CSS" />
                    <div className="bar bootstrap" data-skill="Bootstrap" />
                    <div className="bar javascript" data-skill="Javascript ES6" />
                    <div className="bar firebase" data-skill="Firebase" />
                    <div className="bar react" data-skill="React" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home