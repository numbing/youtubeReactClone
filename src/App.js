import React, {Component} from 'react';
import Search from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'


const API_KEY = 'AIzaSyDu3ULXjhGO0V-cEk5nmwrZWw1VrHp2IlA';

class App extends Component {
    constructor() {
        super();
        this.state = {
            videos: []
        }
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos});
        });
    }

    render() {
        return (
            <div className="App">
                <h1>hello</h1>
                <Search/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
