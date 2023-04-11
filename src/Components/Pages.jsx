import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate} from 'react-router-dom';
import Base from "../Details/Base";
import Board from "../Details/Board";


const PageOne = ({props}) => {
    return (
      <div>
        <Base props={props}/>
      </div>
    );
  };
  
  const PageTwo = ({props}) => {
    console.log(props)
    return (
      <div>
        <Base props={props}/>
      </div>
    );
  };
  
  const PageThree = ({props}) => {
    return (
      <div>
        <Base props={props}/>
      </div>
    );
  };

  
  const PageFour = ({props}) => {
    return (
      <div>
        <Base props={props}/>
      </div>
    );
  };
  
  const PageFive = ({props}) => {
    return (
      <div>
        <Base props={props}/>
      </div>
    );
  };
  
  const PageSix = ({props}) => {
    return (
      <div>
         <Base props={props}/>
      </div>
    );
  };

  const PageBoard = () => {
    return (
      <div>
        <Board/>
      </div>
    );
  };

export {PageOne, PageTwo, PageThree, PageFour, PageFive, PageSix, PageBoard};
  
  
  