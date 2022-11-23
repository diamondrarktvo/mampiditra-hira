import { PLAYPAUSE_VIDEO } from './action_names';

export const playPauseVideo = (id) => ({
   type: PLAYPAUSE_VIDEO,
   payload: id,
});
