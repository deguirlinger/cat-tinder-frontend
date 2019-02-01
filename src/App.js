import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cats from './pages/Cats.js';
import Dogs from './pages/Dogs.js';
import NewCat from './pages/NewCat.js';
import Header from './Header.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
        }
      ],
      dogs: [
        {
          id: 1,
          name: 'Mika',
          age: 1,
          enjoys: 'Acting crazy!'
        },
        {
          id: 2,
          name: 'Leo',
          age: 9,
          enjoys: 'Being harassed by Mika.'
        },
        {
          id: 3,
          name: 'Cruiser',
          age: 0,
          enjoys: 'Cruising the house.'
        }
      ]
    }

  }
  addCat(newCat){
    console.log(newCat);
  }
  render() {
    return (
      <div>
        <header />
        <Router>
          <Switch>
            <Route exact path= "/Cats" render= {(props) => <Cats cats= {this.state.cats}/>} />
            <Route exact path= "/NewCat" render= {(props) => <NewCat onSubmit= {this.addCat.bind(this)}/>} />
            <Route exact path= "/Dogs" render= {(props) => <Dogs dogs= {this.state.dogs}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
