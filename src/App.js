import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './containers/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import keys from './keys/keys';
import classes from './style.css';
import Aux from './hoc/Aux_file.js';

//Youtube API key
const API_KEY = `${keys.youtubeKey}`;

//Root component
class App extends Component {
     constructor(props){
         super(props)
         //Sets inital state - an object containing an empty Array and selected video to nothing
         this.state = {
             videos1: [],
             videos2: [],
             videos3: [],
             selectedVideo: null
         };

         //Inital search terms on page load
         this.videoSearch({search1: 'javascript', search2: 'cars', search3:'camping'});
     }

     //Executes YouTube Searches
     videoSearch(terms){
         //Searches for YouTube Videos
         YTSearch({key: API_KEY, term: terms.search1}, (videos) => {
             this.setState({
                 videos1: videos,
                 selectedVideo: videos[0]
             });
         });
         YTSearch({key: API_KEY, term: terms.search2}, (videos) => {
             this.setState({
                 videos2: videos
             });
         });
         YTSearch({key: API_KEY, term: terms.search3}, (videos) => {
             this.setState({
                 videos3: videos
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
               <div className = {classes.mainAndSideList}>
                  <VideoDetail video={this.state.selectedVideo}/>
                  <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos1} sideList={true}/>
               </div>
               <div>
                 <VideoList
                   videos={this.state.videos2} sideList={false}/>
               </div>
               <div>
                 <VideoList
                   videos={this.state.videos3} sideList={false}/>
               </div>
             </div>
         );
     }
 }

export default App;
