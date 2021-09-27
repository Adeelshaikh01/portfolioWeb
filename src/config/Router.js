import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { Home, Skills, Contact, Experience, Project } from '../containers'
import { useEffect } from 'react';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function AppRouter() {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/experience" component={Experience} />
                <Route exact path="/project" component={Project} />
            </Switch>
        </Router>
    )
}

export default AppRouter;