import React, {useState, useEffect } from 'react'
import './Nav.css';

function Nav() {
const [show, handleShow] = useState(false);

  useEffect(()=> {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100){
        handleShow(true);
      } else handleShow(false);
    });
    var noFunc = function(){  };
    return () => {
      window.removeEventListener("scroll", noFunc);
    };
  },[]);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
<img
        className="nav_avatar"
        src="https://www.sovietmilitarystuff.com/image/cache/data/2021/24092021-naruto-sasuke-1140x1140.jpg"
        alt="avatar"
      />
    </div>
  );
} 


export default Nav