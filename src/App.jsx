import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import "./App.css";
import Header from "./components/shared/Header.jsx";
import Orders from "./pages/Orders.jsx";
import Tables from "./pages/Tables.jsx";
import Menu from "./pages/Menu.jsx";
import NotFound from "./pages/NotFound.jsx";
import useLoadData from "./hooks/useLoadData.js";
import FullScreenLoad from "./components/shared/FullScreenLoad.jsx";
import Dashboard from "./pages/Dashboard.jsx";

/**
 * ProtectedRoute component to restrict access to authenticated users.
 */
function ProtectedRoute({ children }) {
  const isLoading = useLoadData();
  const { isAuth } = useSelector((state) => state.user);

  if (isLoading) return <FullScreenLoad />; // Show loading while authentication is being checked

  return isAuth ? children : <Redirect to="/auth" />;
}

/**
 * PublicRoute component to prevent logged-in users from accessing `/auth`
 */
function PublicRoute({ children }) {
  const isLoading = useLoadData();
  const { isAuth } = useSelector((state) => state.user);

  if (isLoading) return <FullScreenLoad />; // Prevent redirection before auth state is loaded

  return isAuth ? <Redirect to="/" /> : children;
}

/**
 * This component handles all the routing logic and conditionally hides the Header.
 */
function AppContent() {
  const location = useLocation();

  // Define routes where the header should be hidden
  const hideHeaderRoutes = ["/auth"];

  return (
    <>
      {/* Show Header only if the current route is NOT in hideHeaderRoutes */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <Switch>
        {/* Public Route - Redirect logged-in users away from "/auth" */}
        <Route exact path="/auth">
          <PublicRoute>
            <Auth />
          </PublicRoute>
        </Route>

        {/* Protected Routes */}
        <Route exact path="/">
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

        <Route path="/dashboard">
          <ProtectedRoute>
            <Dashboard />
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
