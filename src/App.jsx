import { BrowserRouter, Route, Switch, useLocation, useHistory } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import './App.css';
import Header from './components/shared/Header.jsx';
import Orders from './pages/Orders.jsx';
import Tables from './pages/Tables.jsx';
import Menu from './pages/Menu.jsx';
import NotFound from './pages/NotFound.jsx';
import { useSelector } from 'react-redux';

/**
 * ProtectedRoute component to restrict access to authenticated users
 */
function ProtectedRoute({ children }) {
  const { isAuth } = useSelector(state => state.user);
  const history = useHistory();

  if (!isAuth) {
    history.push("/auth"); // Redirect to login page if not authenticated
    return null; // Prevent rendering protected content
  }

  return children;
}

/**
 * This component handles all the routing logic and conditionally hides the Header.
 */
function AppContent() {
  const location = useLocation();
  
  // Define routes where the header should be hidden
  const hideHeaderRoutes = ['/auth'];

  return (
    <>
      {/* Show Header only if the current route is NOT in hideHeaderRoutes */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/auth" component={Auth} />
        
        {/* Protected Routes */}

        <Route path="/">
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        </Route>

        <Route path="/orders">
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        </Route>

        <Route path="/tables">
          <ProtectedRoute>
            <Tables />
          </ProtectedRoute>
        </Route>

        <Route path="/menu">
          <ProtectedRoute>
            <Menu />
          </ProtectedRoute>
        </Route>

        {/* Catch-all route for 404 pages */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

/**
 * Main App component that wraps everything inside <BrowserRouter>.
 */
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
