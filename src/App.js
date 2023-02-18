import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
      <h1>React JS Crud Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing></EmpListing>}></Route>
          <Route path='/employee/create' element={<EmpCreate></EmpCreate>}></Route>
          <Route path='/employee/detail/:empid' element={<EmpDetail></EmpDetail>}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
