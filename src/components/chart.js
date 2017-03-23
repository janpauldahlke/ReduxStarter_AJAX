//no state, state comes by parent
//replacted markup, makesthis a seperate a reusable compnent
//TODO
/*
  prettify charts
  1. average outcome
  2. chart axis
*/


import React from 'react';

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';


function average (data) {
  //lodash for avg
  return _.round(_.sum(data)/data.length);
}



export default ( props ) => {

  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={ props.data }>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div> { average(props.data) } { props.units }</div>
    </div>
  );
}
