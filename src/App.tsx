import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";

import './App.css';

class App extends Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
  }

  handleChange = (e: any) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter((monster:any) => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox
            placeholder="search monsters"
            handleChange={this.handleChange}
          />
          <CardList monsters={filterdMonsters} />
        </div>
    );
  }
}

export default App;
