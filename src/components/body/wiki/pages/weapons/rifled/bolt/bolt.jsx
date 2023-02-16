import React from 'react';
import PropTypes from 'prop-types';

const WeaponsRifledBolt = props => {
    return (
        <div>
            {fun(10000,"c")} 
            
        </div>
    );
};

export default WeaponsRifledBolt;
let fun =(c,i)=>{
    return new Array(c).fill(i).join(" ")
   
 }


