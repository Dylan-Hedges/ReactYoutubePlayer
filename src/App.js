import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './containers/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import keys from './keys/keys';
import classes from './style/style.css';

//Youtube API key
const API_KEY = `${keys.youtubeKey}`;

//Root component
class App extends Component {
     constructor(props){
         super(props)
         //Sets inital state - an object containing an empty Array and selected video to nothing
         this.state = {
             videos: [],
             selectedVideo: null
         };
         //Inital search term on page load
         this.videoSearch('javascript');
     }
     //Video search method
     videoSearch(term){
         //Searches Youtube for a list of videos - takes in  the API key and search term and saves a list of videos to (videos)
         YTSearch({key: API_KEY, term: term}, (videos) => {
             //Updates component state with search results and rerenders the page - "selectedVideo: videos[0]" makes the first video in the search the main video
             this.setState({
                 videos: videos,
                 selectedVideo: videos[0]
             });
         });
     }
     //Renders components to the page
     render(){
         //Slows down/throttles user searches (makes results return smoother) - Creates a new debounched version of the search function that can be called only once every 300 milliseconds
         const videoSearch = _.debounce((term) => {this.videoSearch(term) },300);
         return(
             <div className="container">
               <SearchBar onSearchTermChange={videoSearch}/>
               <VideoDetail video={this.state.selectedVideo}/>
               <VideoList
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos} />
             </div>
         );
     }
 }

export default App;
