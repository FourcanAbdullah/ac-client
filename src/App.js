import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  ACUnitContainer,
  StudentContainer,
  AllACUnitsContainer,
  AllStudentsContainer,
  NewStudentContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AllACUnitsContainer} />
        {/* <Route exact path="/campuses" component={AllACUnitsContainer} /> */}
        <Route exact path="/campus/:id" component={ACUnitContainer} />
        {/* <Route exact path="/students" component={AllStudentsContainer} /> */}
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/student" component={StudentContainer} />

      </Switch>
    </div>
  );
}

export default App;
