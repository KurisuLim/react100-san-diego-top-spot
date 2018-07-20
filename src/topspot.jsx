import React from 'react';

export default props => (
    <div className='well col-sm-offset-2 col-sm-8'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a className='btn btn-primary' role='button' href={'https://maps.google.com/?q=' + props.location[0] 
    + ',' + props.location[1]}>Google Maps</a>
    </div>
    
);