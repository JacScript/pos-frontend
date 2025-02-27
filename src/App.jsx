import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Auth from "./pages/Auth.jsx"
import Order from "./pages/Order.jsx"
import './App.css'
import Header from './components/shared/Header.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/order" component={Order} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
