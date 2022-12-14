import React from 'react';
import './Loading.css';

export default function Loading() {
   return (
      <div className="spinner">
         <div className="r1"></div>
         <div className="r2"></div>
         <div className="r3"></div>
         <div className="r4"></div>
         <div className="r5"></div>
      </div>
   );
}
