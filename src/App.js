import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from "./components/SearchForm"
import EmployeeCard from "./components/EmployeeCard"
import NavBar from './components/NavBar';
import SearchResults from './components/SearchResults';


function App() {
  return (
    <div className="App">
     <NavBar />
     <SearchForm />
     <EmployeeCard />
    <SearchResults />
    </div>
  );
}

export default App;
