import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './src/components/home.jsx';
import About from './src/components/about.jsx';
import Contact from './src/components/contact.jsx';
import Header from './src/components/header.jsx';
import List from './src/components/list.jsx';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Neha',
      data : []
    }
  }
  componentDidMount() {
   /** 
    //get data using jquery ajax
   $.ajax({
      url: 'https://api.myjson.com/bins/11r8s1',
      dataType: 'json',
      success: function(parsed_json){
        console.log( parsed_json);
        this.setState({data: parsed_json});
      }.bind(this)
      });*/

      
    //get data from server using axios
    var self = this;
    axios.get('https://api.myjson.com/bins/11r8s1')
    .then(function(response) {
      self.setState({data: response.data})
    })
  }
  render() {
    return (
      <Router>
        <div>
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
