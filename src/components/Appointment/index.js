import React from "react";
import React, { Fragment } from "react";
import Show from "components/Appointment/Show";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";

import "components/Appointment/styles.scss";

export default function Appointment(props) {
  props.interview() ? Show : Empty
  return (
    <Fragment>
    <Header
    time={props.time}
    />
    <Show
    />
    <Empty/>
    <Appointment id="last" time="1pm" />

   </Fragment>
  );
}