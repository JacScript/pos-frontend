// export default App
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import './App.css';
import Header from './components/shared/Header.jsx';
import Orders from './pages/Orders.jsx';
import Tables from './pages/Tables.jsx';
import Menu from './pages/Menu.jsx';
import NotFound from './pages/NotFound.jsx';


/**
 * This component handles all the routing logic and conditionally hides the Header.
 * It must be used inside <BrowserRouter> because it uses React Router hooks.
 */
function AppContent() {
  const location = useLocation(); // ✅ useLocation() can be used inside <BrowserRouter>
  
  // Define routes where the header should be hidden
  const hideHeaderRoutes = ['/auth'];

  return (
    <>
      {/* Show Header only if the current route is NOT in hideHeaderRoutes */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      
      <Switch>
        {/* Define application routes */}
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/orders" component={Orders} />
        <Route path="/tables" component={Tables} />
        <Route path="/menu" component={Menu} />
        
        {/* Catch-all route for 404 pages */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

/**
 * Main App component that wraps everything inside <BrowserRouter>.
 * This ensures routing works properly across the application.
 */
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
