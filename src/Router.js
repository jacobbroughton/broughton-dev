import { Route, Link, Switch } from "react-router-dom"
import Home from "./pages/Home/Home"

const AppRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
    </Switch>
)

export default AppRouter