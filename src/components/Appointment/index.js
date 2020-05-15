import React from "react";
import Show from "components/Appointment/Show";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";

import "components/Appointment/styles.scss";

export default function Appointment(props) {
  return (
    <article className="appointment">
    <Header
      time={props.time}
    />
   {props.interview ?(  
   <Show   student={props.interview.student}
   name={props.interview.interviewer.name}/>) : (<Empty />)}
  </article>
)};
