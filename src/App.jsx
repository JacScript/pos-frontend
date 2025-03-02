import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Auth from "./pages/Auth.jsx"
import './App.css'
import Header from './components/shared/Header.jsx'
import Orders from './pages/Orders.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/orders" component={Orders} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
