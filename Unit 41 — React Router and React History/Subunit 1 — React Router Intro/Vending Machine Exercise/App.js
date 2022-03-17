import Header from './Header';
import VendingMachine from './VendingMachine';
import Candy from './Candy';
import Soda from './Soda';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
