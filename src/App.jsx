import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Auth from "./pages/Auth.jsx"
import './App.css'
import Header from './components/shared/Header.jsx'
import Orders from './pages/Orders.jsx'
import Tables from './pages/Tables.jsx'
import Menu from './pages/Menu.jsx'
import NotFound from './pages/NotFound.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/orders" component={Orders} />
          <Route path="/tables" component={Tables} />
          <Route path="/menu" component={Menu} />
          <Route  component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
