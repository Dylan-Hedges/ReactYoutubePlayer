import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './containers/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import keys from './keys/keys.js';
import classes from './style.css';
import Aux from './hoc/Aux_file.js';
import searchData from './searchData.js';
require('dotenv').config();

//Youtube API key
const API_KEY = `${keys.REACT_APP_YOUTUBEKEY}`;

//Root component
class App extends Component {
     constructor(props){
         super(props);
         // Sets inital app state
         this.state = {
             firstVideo:[],
             selectedVideo: null,
             searchData: searchData
         };
         //Binds the renderVideos method to the component
         this.renderVideos = this.renderVideos.bind(this);
     }

     //User updates first video with search term
     videoSearch(term){
         //Makes request to YouTube API
         YTSearch({key: API_KEY, term: term}, (videos) => {
             this.setState({
                 videos1: videos,
                 selectedVideo: videos[0]
             });
         });
    }

    //Used to make on page load Youtube search - Lifecycle method execute on initial component mounting
    componentDidMount(){
      //Creates a copy of the searchData state
      const copyState = this.state.searchData;
      //Maps over and executes a Youtube search for each element of copyState, returns a new version of copyState but with Youtube videos under searchResult  - automatically returns a new array with the same variable name due to using .map
      copyState.map((item, index) => {
        //Executes a Youtube search for each element - uses the search team inside searchData.search
         YTSearch({key: API_KEY, term: item.search}, (data) => {
          //Saves the returned array of videos from Youtube in the empty searchResult array
          item.searchResult = data;
        });
      });
      //Updates the searchData state with the new state that includes Youtube videos
      this.setState({
        searchData: copyState
      });
      //Executes a Youtube search for the first video
      YTSearch({key: API_KEY, term: "javascript"}, (firstVideo) => {
          this.setState({
              firstVideo: firstVideo,
              selectedVideo: firstVideo[0]
          });
      });
    }

    //Renders all videos on page load
    renderVideos(){
       return this.state.searchData.map(vid => {
        return(
          <div key={vid.search} className="row">
            <a href={vid.url} target="_blank" className={classes.linkStyle}>
              <h3 className={`col-md-12 ${classes.titleStyle}`}>{vid.title}</h3>
            </a>
            <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={vid.searchResult} sideList={false}/>
        </div>);
      })
    }

     //Renders components to the page
     render(){
         //Slows down/throttles user searches (makes results return smoother) - Creates a new debounched version of the search function that can be called only once every 300 milliseconds
         const videoSearch = _.debounce((term) => {this.videoSearch(term) },300);
         //Returns content to screen
         return(
           <div className="container">
              <div className="row">
                <div className={`col-md-3`}>
                  <a href="https://www.youtube.com/" target="_blank">
                    <img src={require("./images/developed-with-youtube-sentence-case-dark(200x100).png")} alt="Youtube Logo" />
                  </a>
                </div>
                <div className={`col-md-9 ${classes.colNoPadding}`}>
                    <SearchBar onSearchTermChange={videoSearch}/>
                 </div>
              </div>
              <div className="row">
                  <div className="col-md-8">
                      <VideoDetail video={this.state.selectedVideo}/>
                  </div>
                  <div className={`col-md-4 ${classes.colNoPadding}`}>
                    <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.firstVideo} sideList={true}/>
                  </div>
              </div>
              <div className="row">
                <div className={`col-md-12 ${classes.colNoPadding} ${classes.lineStyle}`}>
                  <hr />
                </div>
              </div>
              <div>
                {this.renderVideos()}
              </div>
            </div>
         );
     }
 }

export default App;
