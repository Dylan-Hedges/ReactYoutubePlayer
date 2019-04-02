//Takes vairable from Heroku (if we dont commit this file, our app wouldnt be able to get the keys from Heroku)
module.exports = {
	REACT_APP_YOUTUBEKEY: process.env.REACT_APP_YOUTUBEKEY
};
