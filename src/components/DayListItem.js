import React from "react";
import "components/DayListItem.scss";
const classNames = require('classnames');

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  })

  const formatSpots = function(spotsNb) {
   if (spotsNb >= 2 ){
   return `${spotsNb} spots remaining`
   }
   else if(spotsNb === 1){
     return '1 spot remaining'
   }
   else if (spotsNb === 0){
    return 'no spots remaining'
  } 
}
return (
  <li data-testid="day-item" className={dayClass} onClick={() => props.setDay(props.name)}>
    <h2 className="text--regular">{props.name}</h2>
    <h3 className="text--light">{formatSpots(props.spots)}</h3>
  </li>
);
}
