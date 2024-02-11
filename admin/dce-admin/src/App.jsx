import { useState } from "react";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";
import Academic from "./screens/Academic";
import AboutUs from "./screens/AboutUs";
import Facilities from "./screens/Facilities";
import TrainingPlacement from "./screens/TrainingPlacement";
import StudentCorner from "./screens/StudentCorner";
import Activity from "./screens/Activities";
import Alumni from "./screens/Alumi";
import NIRF from "./screens/NIRF";
import Departments from "./screens/Departments";
import Approval from "./screens/Approval";
import { BrowserRouter, Routes ,Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard/>}/>
            <Route path="home">
              <Route index element={<Home/>}/>
            </Route>
            <Route path="academic">
              <Route index element={<Academic/>}/>
            </Route>
            <Route path="aboutus">
              <Route index element={<AboutUs/>}/>
            </Route>
            <Route path="facility">
              <Route index element={<Facilities/>}/>
            </Route>
            <Route path="training">
              <Route index element={<TrainingPlacement/>}/>
            </Route>
            <Route path="studentcorner">
              <Route index element={<StudentCorner/>}/>
            </Route>
            <Route path="activity">
              <Route index element={<Activity/>}/>
            </Route>
            <Route path="alumni">
              <Route index element={<Alumni/>}/>
            </Route>
            <Route path="approval">
              <Route index element={<Approval/>}/>
            </Route>
            <Route path="nirf">
              <Route index element={<NIRF/>}/>
            </Route>
            <Route path="departments">
              <Route index element={<Departments/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
