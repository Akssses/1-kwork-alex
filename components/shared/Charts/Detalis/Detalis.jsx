import React from 'react';
import s from './Detalis.module.css';

function Detalis() {
    return (
        <div className={s.appl_details}>
            <div className={s.title}>
                <h1>Total Applications</h1>
            </div>
            <div className={s.details}>
                <div className={s.applications}>
                    <div className={s.circle}></div>
                    <div className={s.text}>
                        <h2>Applications</h2>
                    </div>
                    <div className={s.bar}>
                        <div className={s.fill}></div>
                    </div>
                </div>
                <div className={s.short_listed}>
                    <div className={s.circle}></div>
                    <div className={s.text}>
                        <h2>Short Listed</h2>
                    </div>
                    <div className={s.bar}>
                        <div className={s.fill}></div>
                    </div>
                </div>
                <div className={s.rejected}>
                    <div className={s.circle}></div>
                    <div className={s.text}>
                        <h2>Rejected</h2>
                    </div>
                    <div className={s.bar}>
                        <div className={s.fill}></div>
                    </div>
                </div>
                <div className={s.on_hold}>
                    <div className={s.circle}></div>
                    <div className={s.text}>
                        <h2>On hold</h2>
                    </div>
                    <div className={s.bar}>
                        <div className={s.fill}></div>
                    </div>
                </div>
                <div className={s.accepted}>
                    <div className={s.circle}></div>
                    <div className={s.text}>
                        <h2>Accepted</h2>
                    </div>
                    <div className={s.bar}>
                        <div className={s.fill}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalis
