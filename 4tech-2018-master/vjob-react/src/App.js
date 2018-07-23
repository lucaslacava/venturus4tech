import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Cabecalho from './components/navigation/Header/Header';
import JobList from './components/job/JobList/JobList';
import JobForm from './components/job/JobForm/JobForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho/>
        <div className="form"><JobForm/></div>
        <div className="container pt-3">
        <JobList/>
        </div>
      </div>
    );
  }
}

export default App;
