import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import videoList from './components/video_list';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDXYQfqsSiFOpGgmd2Pj54QGkfdKAnVfAs';




class App extends Component {
    constructor(props){
        super(props);

        this.state={ 
            videos : [], 
            selectedVideo : null
        };

        YTSearch({key : API_KEY , term :'surfboards'},(data) => {
            this.setState({videos : data ,
                selectedVideo : data[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    videos={this.state.videos} 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}    
                    />
                {/* videos is the argument that is captured in props in video_list  */}
                
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));