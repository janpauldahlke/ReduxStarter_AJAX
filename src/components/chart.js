//no state, state comes by parent
//replacted markup, makesthis a seperate a reusable compnent

import React from 'react';

import { Sparklines, SparklinesLine } from 'react-sparklines';

export default ( props ) => {

  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={ props.data }>
        <SparklinesLine color={props.color}></SparklinesLine>
      </Sparklines>
    </div>
  );
}
