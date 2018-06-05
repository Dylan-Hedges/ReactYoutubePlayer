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
         //Sets inital app state
         this.state = {
             videos1: [], videos2: [], videos3: [], videos4: [], videos5: [], videos6: [], videos7: [], videos8: [], videos9: [], videos10: [],
             selectedVideo: null
         };
         //Inital search terms on page load
         this.initalSearch({search1: 'javascript', search2: 'schmoyoho', search3:'college humor originals', search4: 'phillip de franco', search5: 'fred', search6: 'ray william johnson', search7: 'epic meal time', search8: 'fps russia', search9: 'gangnam style', search10: 'machinima'});
     }

     videoSearch(term){
         //Makes request to YouTube API
         YTSearch({key: API_KEY, term: term}, (videos) => {
             this.setState({
                 videos1: videos,
                 selectedVideo: videos[0]
             });
         });
    }

     //Function that executes YouTube Searches
     initalSearch(terms){
         //Makes request to YouTube API
         YTSearch({key: API_KEY, term: terms.search1}, (videos) => {
             this.setState({
                 videos1: videos,
                 selectedVideo: videos[0]
             });
         });
         YTSearch({key: API_KEY, term: terms.search2}, (videos) => {
              console.log(videos);
             this.setState({
                 videos2: videos
             });
         });
         YTSearch({key: API_KEY, term: terms.search3}, (videos) => {
             this.setState({
                 videos3: videos
             });
         });
         YTSearch({key: API_KEY, term: terms.search4}, (videos) => {
             this.setState({
                 videos4: videos
             });
         });
         YTSearch({key: API_KEY, term: terms.search5}, (videos) => {
             this.setState({
                 videos5: videos
             });
         });
         YTSearch({key: API_KEY, term: terms.search6}, (videos) => {
             this.setState({
                 videos6: videos
             });
         });
         YTSearch({key: API_KEY, term: terms.search7}, (videos) => {
             this.setState({
                 videos7: videos
             });
         });
         YTSearch({key: API_KEY, term: terms.search8}, (videos) => {
             this.setState({
                 videos8: videos
             });
         });
         YTSearch({key: API_KEY, term: terms.search9}, (videos) => {
             this.setState({
                 videos9: videos
             });
         });
         YTSearch({key: API_KEY, term: terms.search10}, (videos) => {
             this.setState({
                 videos10: videos
             });
         });
     }

     //Renders components to the page
     render(){
         //Slows down/throttles user searches (makes results return smoother) - Creates a new debounched version of the search function that can be called only once every 300 milliseconds
         const videoSearch = _.debounce((term) => {this.videoSearch(term) },300);
         //Returns content to screen
         return(
           <div className="container">
              <div className="row">
                <a className="col-md-3" href="https://www.youtube.com/" target="_blank">
                  <img src={require("./images/developed-with-youtube-sentence-case-dark(200x100).png")} alt="Youtube Logo" />
                </a>
               <div className="col-md-9">
                <SearchBar onSearchTermChange={videoSearch}/>
               </div>
              </div>
              <div className="row">
                  <div className={`col-md-8 ${classes.colNoPadding}`}>
                      <VideoDetail video={this.state.selectedVideo}/>
                  </div>
                  <div className={`col-md-4 ${classes.colNoPadding}`}>
                      <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos1} sideList={true}/>
                  </div>
              </div>
              <div className="row">
                <div className={`col-md-12 ${classes.colNoPadding} ${classes.lineStyle}`}>
                  <hr />
                </div>
              </div>
              <div className="row">
                <a href="https://www.youtube.com/user/Schmoyoho" target="_blank" className={classes.linkStyle}>
                  <h3 className={`col-md-12 ${classes.titleStyle}`}>Schmoyoho</h3>
                </a>
                <VideoList
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos2} sideList={false}/>
              </div>
              <div className="row">
                <a href="https://www.youtube.com/user/CollegeHumor" target="_blank" className={classes.linkStyle}>
                  <h3 className={`col-md-12 ${classes.titleStyle}`}>College Humor</h3>
                </a>
                  <VideoList
                   onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                   videos={this.state.videos3} sideList={false}/>
              </div>
              <div className="row">
                <a href="https://www.youtube.com/user/sxephil" target="_blank" className={classes.linkStyle}>
                  <h3 className={`col-md-12 ${classes.titleStyle}`}>Phillip DeFranco</h3>
                </a>
                  <VideoList
                   onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                   videos={this.state.videos4} sideList={false}/>
              </div>
              <div className="row">
                <a href="https://www.youtube.com/user/Fred" target="_blank" className={classes.linkStyle}>
                  <h3 className={`col-md-12 ${classes.titleStyle}`}>Fred</h3>
                </a>
                  <VideoList
                   onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                   videos={this.state.videos5} sideList={false}/>
              </div>
              <div className="row">
                <a href="https://www.youtube.com/user/RayWilliamJohnson" target="_blank" className={classes.linkStyle}>
                  <h3 className={`col-md-12 ${classes.titleStyle}`}>Ray William Johnson</h3>
                </a>
                  <VideoList
                   onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                   videos={this.state.videos6} sideList={false}/>
              </div>
              <div className="row">
                <a href="https://www.youtube.com/user/EpicMealTime" target="_blank" className={classes.linkStyle}>
                  <h3 className={`col-md-12 ${classes.titleStyle}`}>Epic Meal Time</h3>
                </a>
                  <VideoList
                   onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                   videos={this.state.videos7} sideList={false}/>
              </div>
              <div className="row">
                <a href="https://www.youtube.com/user/FPSRussia" target="_blank" className={classes.linkStyle}>
                  <h3 className={`col-md-12 ${classes.titleStyle}`}>FPSRussia</h3>
                </a>
                  <VideoList
                   onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                   videos={this.state.videos8} sideList={false}/>
              </div>
              <div className="row">
                <a href="https://www.youtube.com/channel/UCrDkAvwZum-UTjHmzDI2iIw" target="_blank" className={classes.linkStyle}>
                  <h3 className={`col-md-12 ${classes.titleStyle}`}>Gangnam Style</h3>
                </a>
                  <VideoList
                   onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                   videos={this.state.videos9} sideList={false}/>
              </div>
              <div className="row">
                <a href="https://www.youtube.com/user/Machinima" target="_blank" className={classes.linkStyle}>
                  <h3 className={`col-md-12 ${classes.titleStyle}`}>Machinima</h3>
                </a>
                <VideoList
                   onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                   videos={this.state.videos10} sideList={false}/>
              </div>
            </div>
         );
     }
 }

export default App;
