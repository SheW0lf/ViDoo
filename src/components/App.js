import React, {Component} from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
import Loader from './Loader';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            loading: true
        }
    }

    componentDidMount(){
        this.onSearch('cats'); //default search query on app load
    }

    //search function using the query text from SearchBar and sets state to the videos returned from the search query
    onSearch = async query => {
        const res = await youtube.get('/search', {
            params: {
                q: query
            }
        });

        this.setState({
            videos: res.data.items,
            selectedVideo: res.data.items[0], //sets the first video returned from the search query to the iframe
            loading: false
        })
    }

    //function to set selected video to the iframe
    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        })
    }

    render(){
        const videoItems = () => {
            return(
                <React.Fragment>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                </React.Fragment>
            );
        }
        return(
            <div>
                <div className="header">
                    <h1 className="header__logo">ViDoo</h1>
                    <SearchBar onSearch={this.onSearch}/>
                </div>
                <div className="content">
                    {
                        this.state.loading ? <Loader /> : videoItems()
                    }
                </div>
            </div>
        );
    }
};

export default App;