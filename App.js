import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './src/components/home.jsx';
import About from './src/components/about.jsx';
import Contact from './src/components/contact.jsx';
import Header from './src/components/header.jsx';
import List from './src/components/list.jsx';
import $ from 'jquery';

class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      name: 'Neha',
      data : []
    }
  }
  componentDidMount() {
    $.ajax({
      url: 'https://api.myjson.com/bins/11r8s1',
      dataType: 'json',
      success: function(parsed_json){
        this.setState({data: parsed_json});

        alert(parsed_json);
      }.bind(this)
      });
  }
  render() {
    return (
      <Router>
      <div> 
        <img src ={require('./images/download.png')}/>
      <Header name={this.state.name}/>  

      <Switch> 
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/list" render={(props) => (<List data={this.state.data}/>)} />

      </Switch>      
      </div>
    </Router>

    );
  }
}

export default App;
