import logo from './logo.svg';
import BarChart from "./components/BarChart"
import LineChart from "./components/LineChart"
import './App.css';
import { Scale } from 'chart.js';

const App = () => {
  return (
    <div>
      <BarChart/>
      <LineChart/>
    </div>
  )
}


export default App;
