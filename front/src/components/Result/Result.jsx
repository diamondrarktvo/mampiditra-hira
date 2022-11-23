import React /*useState*/ from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Result.css';

//action créators
import {
   playPauseVideo,
   beforeDownload,
} from '../../redux/actions/action_creators';

function Result({ titre, source, urlVideo, id }) {
   const isPlaying = useSelector(
      (selector) => selector.resultat.streaming.playing
   );
   const isDownload = useSelector(
      (selector) => selector.resultat.downloading.download
   );
   const dispatch = useDispatch();

   return (
      <div className="container_result">
         <div className="one_item_result">
            <h4>{titre}</h4>
            <p>Source: YouTube • Channel:{source}: 192 kbps</p>
            <div className="bouttons">
               <button
                  onClick={() => {
                     dispatch(beforeDownload(id));
                  }}
               >
                  {isDownload ? 'Close' : 'Download'}
               </button>
               <button
                  onClick={() => {
                     dispatch(playPauseVideo(id));
                  }}
               >
                  {isPlaying ? 'Stop' : 'Play'}
               </button>
            </div>
         </div>
      </div>
   );
}

export default Result;
