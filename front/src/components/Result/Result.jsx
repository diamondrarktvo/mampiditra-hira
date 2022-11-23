import React /*useState*/ from 'react';
import { useDispatch } from 'react-redux';
import './Result.css';

//action créators
import { playPauseVideo } from '../../redux/actions/action_creators';

function Result({ titre, source, urlVideo, id }) {
   const dispatch = useDispatch();

   return (
      <div className="container_result">
         <div className="one_item_result">
            <h4>{titre}</h4>
            <p>Source: YouTube • Channel:{source}: 192 kbps</p>
            <div className="bouttons">
               <button>Download</button>
               <button
                  onClick={() => {
                     dispatch(playPauseVideo(id));
                  }}
               >
                  Play
               </button>
            </div>
         </div>
      </div>
   );
}

export default Result;
