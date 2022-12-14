import Axios from 'axios';

const urI = 'http://localhost:4000/api/v1/musics';

const RouteAxios = Axios.create({
   baseURL: urI,
});

export { RouteAxios };
