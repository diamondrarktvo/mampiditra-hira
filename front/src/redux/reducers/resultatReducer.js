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
            if (draft.streaming.idVideoToPlay === null) {
               draft.streaming.playing = !draft.streaming.playing;
               draft.streaming.idVideoToPlay = action.payload;
            } else if (action.payload === draft.streaming.idVideoToPlay) {
               draft.streaming.playing = !draft.streaming.playing;
               draft.streaming.idVideoToPlay = null;
            } else {
               draft.streaming.idVideoToPlay = action.payload;
            }
         });
      case beforeDownload().type:
         return produce(state, (draft) => {
            if (draft.downloading.idVideoToDownload === null) {
               draft.downloading.download = !draft.downloading.download;
               draft.downloading.idVideoToDownload = action.payload;
            } else if (action.payload === draft.downloading.idVideoToDownload) {
               draft.downloading.download = !draft.downloading.download;
               draft.downloading.idVideoToDownload = null;
            } else {
               draft.downloading.idVideoToDownload = action.payload;
            }
         });
      default:
         return state;
   }
};
