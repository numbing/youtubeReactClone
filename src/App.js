import React, {Component} from 'react';
import Search from './components/search_bar'
import './App.css'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash'


const API_KEY = 'AIzaSyDu3ULXjhGO0V-cEk5nmwrZWw1VrHp2IlA';

class App extends Component {
    constructor() {
        super();
        this.state = {
            videos: [],
            selectedVideo: null

        };
        this.videoSearch('surfboards');

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);


        return (
            <div className="App">

                <Search onSearch={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
