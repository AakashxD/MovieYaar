import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import SeatSelection from './components/SeatSelection';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/movie-details" component={MovieDetails} />
        <Route path="/seat-selection" component={SeatSelection} />
        <Route path="/" exact>
          <h1>Welcome to the Movie App</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;