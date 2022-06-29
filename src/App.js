import "./App.css";
import CustomNavbar from "./Component/NavBar";
import Header from "./Component/Header";
import RowOfMovies from "./Component/RowOfMovies";
import ShowDetail from "./Component/ShowDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Header />
      <Route
        path="/"
        exact
        render={(routerProps) => (
          <RowOfMovies {...routerProps} title="Star Wars" />
        )}
      />
      <Route
        path="/"
        exact
        render={(routerProps) => (
          <RowOfMovies {...routerProps} title="Star Wars" />
        )}
      />
      <Route
        path="/"
        exact
        render={(routerProps) => (
          <RowOfMovies {...routerProps} title="Star Wars" />
        )}
      />
      <Route
        path="/details/:movieID"
        render={(routerProps) => <ShowDetail {...routerProps} title="hello" />}
      />
    </Router>
  );
}

export default App;