import { PLAYPAUSE_VIDEO, VIDEO_TO_DOWNLOAD } from './action_names';

export const playPauseVideo = (id) => ({
   type: PLAYPAUSE_VIDEO,
   payload: id,
});

export const beforeDownload = (id) => ({
   type: VIDEO_TO_DOWNLOAD,
   payload: id,
});
