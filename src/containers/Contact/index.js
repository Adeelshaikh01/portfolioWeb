import { Header, Footer } from '../../components';
import './css/style.css';
import { Form, Button } from 'react-bootstrap'

function Contact() {
    return (
        <>
            <Header />
            <div className="banner-image">
                <div className="container pb-5">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="col-6 resDiv">
                        <h1 className="display-6">Contact Details</h1>
                        <ul>
                            <li><strong>Phone:</strong> <a href="tel:03112197221" className="nav-link">0311-2197221</a> </li>
                            <li><strong>Email:</strong> <a className="nav-link" href="mailto:adeelshaikh654@gmail.com">adeelshaikh654@gmail.com</a> </li>
                            <li><strong>Address:</strong> <span className="nav-link">House No.081 Achar Gali, Hyderabad Colony Jamshed Town Karachi.</span></li>
                        </ul>
                        </div>
                    
                    <div className="col-6 resDiv">
                        <h1 className="display-6">Feedback</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Comments</Form.Label>
                                <Form.Control as="textarea" aria-label="With textarea" />
                            </Form.Group>
                            <Button className="btn-danger"  type="submit">
                                Submit
                            </Button>
                        </Form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact