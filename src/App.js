import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  ACUnitContainer,
  HistoryContainer,
  AllACUnitsContainer,
  NewACUnitContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AllACUnitsContainer} />

        <Route exact path="/acunit/:id" component={ACUnitContainer} />

        <Route exact path="/newunit" component={NewACUnitContainer} />
        <Route exact path="/history" component={HistoryContainer} />

      </Switch>
    </div>
  );
}

export default App;
