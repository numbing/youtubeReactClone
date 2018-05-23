import React, {Component} from 'react';
import Search from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'


const API_KEY = 'AIzaSyDu3ULXjhGO0V-cEk5nmwrZWw1VrHp2IlA';

class App extends Component {
    constructor() {
        super();
        this.state = {
            videos: [],
            selectedVideo : null

        };
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos :videos,
                selectedVideo : videos[0]
            });
        });
    }

    render() {
        return (
            <div className="App">

                <Search/>
                <VideoDetail video ={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
