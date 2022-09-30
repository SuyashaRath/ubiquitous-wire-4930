// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Heading  from './Components/Heading';
import Box from './Components/Box1';
import FlexBox from "./Components/Box2"
import P1 from  './Components/P1';
import P2 from './Components/Features'
import Slider from "./Components/Slider"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch> */}
        </Router>
        <Heading/>
        <Box/> <FlexBox />
        <P1/> <P2/>
        <Slider/>



      
    </div>
  );
}

export default App;
