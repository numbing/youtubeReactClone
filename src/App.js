import React, {Component} from 'react';
import Search from './components/search_bar'


const key = 'AIzaSyDu3ULXjhGO0V-cEk5nmwrZWw1VrHp2IlA';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>hello</h1>
                <Search/>
            </div>
        );
    }
}

export default App;
