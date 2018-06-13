import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './src/components/home.jsx';
import About from './src/components/about.jsx';
import Contact from './src/components/contact.jsx';
import Lost from './src/components/lost.jsx';
import Header from './src/components/header.jsx';
import List from './src/components/list.jsx';
import Parent from './src/components/parent.jsx';
import Formvalidation from './src/components/formvalidation.jsx';
import Fragments from './src/components/fragments.jsx';
import Contexts from './src/components/contexts.jsx';
import Refrences from './src/components/refrences.jsx';
import $ from 'jquery';
import axios from 'axios';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initilizeState = {
  count : 0
};

function reducer(state = initilizeState, action) {
  switch(action.type){
    case "INCREMENT":
      return {
        count : state.count + 1
      };
      break;
    case "DECREMENT":
      return {
        count : state.count - 1
      };
    default:
      return state; 
  }
}

const store = createStore(reducer);

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
          <Provider store={store}>
              <Contact count={6}/>
          </Provider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/lost" component={Lost} />
            <Route path="/list" render={(props) => (<List data={this.state.data}/>)} />
            <Route path="/validation" component={Formvalidation}/>
            <Route path="/fragments" component={Fragments}/>
            <Route path="/contexts" component={Contexts}/>
            <Route path="/ref" component={Refrences}/>

          </Switch>
        </div>
    </Router>

    );
  }
}

export default App;
