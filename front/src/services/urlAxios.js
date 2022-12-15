import Axios from 'axios';

//const urI = 'http://localhost:4000/api/v1/musics'; "env dev"
const urI = 'https://mp3gasy-downloader.onrender.com/api/v1/musics'; //"prod"

const RouteAxios = Axios.create({
   baseURL: urI,
});

export { RouteAxios };
