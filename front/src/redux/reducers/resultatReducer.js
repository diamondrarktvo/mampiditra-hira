import { produce } from 'immer';
import { playPauseVideo } from '../actions/action_creators';

const initialState = {
   streaming: {
      playing: false,
      idVideoToPlay: null,
   },
};

export const resultatReducer = (state = initialState, action) => {
   switch (action.type) {
      case playPauseVideo().type:
         return produce(state, (draft) => {
            draft.streaming.playing = !draft.streaming.playing;
            draft.streaming.idVideoToPlay = action.payload;
         });
      default:
         return state;
   }
};
