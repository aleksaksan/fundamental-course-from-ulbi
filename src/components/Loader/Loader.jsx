import React from 'react';
import './Loader.scss'

const Loader = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <circle id="arc1" class="circle" cx="150" cy="150" r="120" opacity=".89" fill="none" stroke="#632b26" strokeWidth="12" stroke-linecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
      <circle id="arc2" class="circle" cx="150" cy="150" r="120" opacity=".49" fill="none" stroke="#632b26" strokeWidth="8" stroke-linecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
      <circle id="arc3" class="circle" cx="150" cy="150" r="100" opacity=".49" fill="none" stroke="#632b26" strokeWidth="20" stroke-linecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
      <circle id="arc4" class="circle" cx="150" cy="150" r="120" opacity=".49" fill="none" stroke="#632b26" strokeWidth="30" stroke-linecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
      <circle id="arc5" class="circle" cx="150" cy="150" r="100" opacity=".89" fill="none" stroke="#632b26" strokeWidth="8" stroke-linecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
      <circle id="arc6" class="circle" cx="150" cy="150" r="90" opacity=".49" fill="none" stroke="#632b26" strokeWidth="16" stroke-linecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
      <circle id="arc7" class="circle" cx="150" cy="150" r="90" opacity=".89" fill="none" stroke="#632b26" strokeWidth="8" stroke-linecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
      <circle id="arc8" class="circle" cx="150" cy="150" r="80" opacity=".79" fill="#4DD0E1" fillOpacity="0" stroke="#632b26" strokeWidth="8" stroke-linecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
  </svg>
  );
};

export default Loader;