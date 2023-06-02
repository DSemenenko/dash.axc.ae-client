import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate} from 'react-router-dom';
import Base from "../Details/Base";
import Board from "../Details/Board";
import Lists from "../Details/Lists";
import DealDay from "../Details/DealDay";
import Review from "../Details/Review";
import Target from "../Details/Target";

import Firework from "../MVP/Firework";
import Top3TotalSalesValueOffPlan from "../MVP/Nominations/Top3TotalSalesValueOffPlan"
import Top3TotalSalesValueSecondary from "../MVP/Nominations/Top3TotalSalesValueSecondary"
import RisingStarsOffPlanTeamSecondary from "../MVP/Nominations/RisingStarsOffPlanTeamSecondary"
import MostValuableManagerOffPlanSecondary from "../MVP/Nominations/MostValuableManagerOffPlanSecondary"
import OutstandingContributionSupport from "../MVP/Nominations/OutstandingContributionSupport"
import OutstandingContributionSupport2 from "../MVP/Nominations/OutstandingContributionSupport2"
import HighestTotalRentalValueSecondary from "../MVP/Nominations/HighestTotalRentalValueSecondary"
import MostRentalTransactionsSecondary from "../MVP/Nominations/MostRentalTransactionsSecondary"
import ListingMVPSecondary from "../MVP/Nominations/ListingMVPSecondary"
import Promotions from "../MVP/Nominations/Promotions"
import '../MVP/Nominations/mvp.css'


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

  const PageLists = () => {
    return(
      <div>
        <Lists/>
      </div>
    )
  };

  const PageDealDay = () => {
    return(
      <div>
        <DealDay/>
      </div>
    )
  }
  
  const PageReview = () => {
    return(
      <div>
        <Review/>
      </div>
    )
  }
  const PageTarget = () => {
    return(
      <div>
        <Target/>
      </div>
    )
  }

  
  
  
  
  
  
  const Top3TotalSalesValueOffPlanPage = () => {
    return(
      <>
        <Firework/>
        <Top3TotalSalesValueOffPlan/>
      </>
    )
  }
  const Top3TotalSalesValueSecondaryPage = () => {
    return(
      <>
        <Firework/>
        <Top3TotalSalesValueSecondary/>
      </>
    )
  }
  const RisingStarsOffPlanTeamSecondaryPage = () => {
    return(
      <>
        <Firework/>
        <RisingStarsOffPlanTeamSecondary/>
      </>
    )
  }
  const MostValuableManagerOffPlanSecondaryPage = () => {
    return(
      <>
        <Firework/>
        <MostValuableManagerOffPlanSecondary/>
      </>
    )
  }
  const OutstandingContributionSupportPage = () => {
    return(
      <>
        <Firework/>
        <OutstandingContributionSupport/>
      </>
    )
  }
  const OutstandingContributionSupport2Page = () => {
    return(
      <>
        <Firework/>
        <OutstandingContributionSupport2/>
      </>
    )
  }
  
  const HighestTotalRentalValueSecondaryPage = () => {
    return(
      <>
        <Firework/>
        <HighestTotalRentalValueSecondary/>
      </>
    )
  }
  const MostRentalTransactionsSecondaryPage = () => {
    return(
      <>
        <Firework/>
        <MostRentalTransactionsSecondary/>
      </>
    )
  }
  const ListingMVPSecondaryPage = () => {
    return(
      <>
        <Firework/>
        <ListingMVPSecondary/>
      </>
    )
  }
  const PromotionsPage = () => {
    return(
      <>
        <Firework/>
        <Promotions/>
      </>
    )
  }
  

  export {
    PageOne, 
    PageTwo, 
    PageThree, 
    PageFour, 
    PageFive, 
    PageSix, 
    PageBoard, 
    PageReview,
    PageTarget,
    PageLists, 
    PageDealDay, 
    Top3TotalSalesValueOffPlanPage, 
    Top3TotalSalesValueSecondaryPage,
    RisingStarsOffPlanTeamSecondaryPage,
    MostValuableManagerOffPlanSecondaryPage,
    OutstandingContributionSupportPage,
    HighestTotalRentalValueSecondaryPage,
    MostRentalTransactionsSecondaryPage,
    ListingMVPSecondaryPage,
    PromotionsPage,
    OutstandingContributionSupport2Page
  };
  
  
  