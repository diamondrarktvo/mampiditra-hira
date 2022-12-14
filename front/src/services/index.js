import { RouteAxios } from './urlAxios';

function searchVideoByWord(search) {
   return RouteAxios.post(
      '/search',
      {
         search,
      },
      {
         headers: {
            'Content-Type': 'application/json',
         },
      }
   );
}

function convertToMp3(idVideoYoutube) {
   return RouteAxios.post('/convert', {
      idVideoYoutube,
   });
}

export const MusicService = {
   searchVideoByWord,
   convertToMp3,
};
