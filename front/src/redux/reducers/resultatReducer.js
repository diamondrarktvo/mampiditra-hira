import { produce } from 'immer';
import { playPauseVideo, beforeDownload } from '../actions/action_creators';

const initialState = {
   streaming: {
      playing: false,
      idVideoToPlay: null,
   },
   downloading: {
      download: false,
      idVideoToDownload: null,
   },
};

export const resultatReducer = (state = initialState, action) => {
   switch (action.type) {
      case playPauseVideo().type:
         return produce(state, (draft) => {
            draft.streaming.playing = !draft.streaming.playing;
            draft.streaming.idVideoToPlay = action.payload;
         });
      case beforeDownload().type:
         return produce(state, (draft) => {
            draft.downloading.download = !draft.downloading.download;
            draft.downloading.idVideoToDownload = action.payload;
         });
      default:
         return state;
   }
};
