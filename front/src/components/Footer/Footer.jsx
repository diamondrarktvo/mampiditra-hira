import React from 'react';
import './Footer.css';

function Footer() {
   const year = new Date().getFullYear();
   console.log('dama year : ', year);
   return (
      <div className="container_footer">
         <p>
            Copyright by{' '}
            <a rel="noreferrer" href="https://portfolio.iteam-s.mg/?u=Dama" target="_blank">
               Dama
            </a>{' '}
            {year}
         </p>
      </div>
   );
}

export default Footer;
