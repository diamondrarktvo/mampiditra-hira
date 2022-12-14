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

export const MusicService = {
   searchVideoByWord,
};
