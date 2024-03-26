const GOOGLE_API_KEY = "AIzaSyDd8JHzOwhl8zIwbzV3TKfp1aLFiNT-q6k"
const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export default YOUTUBE_VIDEOS_API;