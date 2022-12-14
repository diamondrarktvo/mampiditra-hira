const axios = require('axios');

const MAX_RESULTS = 13;
const urlYoutubeApi = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_KEY}&part=snippet&maxResults=${MAX_RESULTS}&type=video`

exports.searchMusic = async (req, res) => {
    const text_search = req.body.search;
    let validUrlSearching = urlYoutubeApi + `&q=${text_search}`;
    let results = await axios.get(validUrlSearching).then((response) => {
        return response.data.items;
    })
    res.status(200).json(results);
}