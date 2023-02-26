import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ProgressBar from '../Progresbar/Progresbar';

function Card({ title, count, growth, data, blue }) {

    return (
        <div className={"card "}>
            <div className="left">
                <h3>{title}</h3>
                <h1>{count}</h1>
                <div className="stat">
                    <ArrowRightAltIcon className={"arrow" + (growth<0 ? " red" : "")} />
                    {growth>=0 ? (<h4>+{growth}%</h4>) : (<h4 className="red">{growth}%</h4>)}
                </div>
            </div>
            <div className="right">
                <MoreHorizIcon/>
                <ProgressBar data={data}/>
            </div>

        </div>
    )
}

export default Card