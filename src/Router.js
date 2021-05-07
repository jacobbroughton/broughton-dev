import { Route, Link, Switch } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Portfolio from "./pages/Portfolio/Portfolio"
import Contact from "./pages/Contact/Contact"

const AppRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
)

export default AppRouter