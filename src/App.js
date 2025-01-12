import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Layout/Header';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Footer from './Layout/Footer';
import Axios from './Axios';
import MapDemo from './MapDemo';
import ViewEmp from './Employee/ViewEmp';
import AddEmp from './Employee/AddEmp';
import UpdateEmp from './Employee/UpdateEmp';
import Login from './Login';
import AdminDashBoard from './Employee/AdminDashBoard';
import EmployeeDasboard from './Employee/EmployeeDashboard';


function App() {
  return (
    <div className="App">


      <BrowserRouter>
        {/* <Header/> */}
        {/* <Home /> */}
        <Routes>
          {/* <Route path="/home" element={<Home></Home>}> Home </Route> */}
          <Route path="/about" element={<About></About>}>About</Route>
          <Route path="/addemp" element={<AddEmp></AddEmp>}>AddEmp</Route>
          <Route path="/viewemp" element={<ViewEmp></ViewEmp>}>ViewEmp</Route>
          <Route path="/updateemp/:id" element={<UpdateEmp></UpdateEmp>}>UpdateEmp</Route>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/admin/dashboard" element={<AdminDashBoard></AdminDashBoard>}>ViewEmp</Route>
            <Route path="/employee/dashboard" element={<EmployeeDasboard></EmployeeDasboard>}>ViewEmp</Route>

        </Routes>

        <Footer />

      </BrowserRouter>
      {/* <AddEmp/>
    <ViewEmp/> */}
      {/* <Axios/> */}
      {/* <MapDemo /> */}
    </div>
  );
}

export default App;
