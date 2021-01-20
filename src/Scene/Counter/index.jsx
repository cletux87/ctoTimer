import React from 'react';
import Countdown from '../../components/Countdown';
import './counter.css';

const Counter = (props) =>{

    const {theDate, header, footer} = props;

    return (
        <div className="content clock">
            <p className='date'>{header}</p>
            <Countdown date={theDate} />
            <p className='date'>{footer}</p>
        </div>
    );

}

export default Counter;