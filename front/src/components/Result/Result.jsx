import React /*useState*/ from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Result.css';

//action créators
import {
   playPauseVideo,
   beforeDownload,
} from '../../redux/actions/action_creators';

function Result({ titre, source, urlVideo, id }) {
   const streaming = useSelector((selector) => selector.resultat.streaming);
   const downloading = useSelector((selector) => selector.resultat.downloading);
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
                  {downloading.download && downloading.idVideoToDownload === id
                     ? 'Close'
                     : 'Download'}
               </button>
               <button
                  onClick={() => {
                     dispatch(playPauseVideo(id));
                  }}
               >
                  {streaming.playing && streaming.idVideoToPlay === id
                     ? 'Stop'
                     : 'Play'}
               </button>
            </div>
         </div>
      </div>
   );
}

export default Result;
