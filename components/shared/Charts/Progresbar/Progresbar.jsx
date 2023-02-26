import React from "react";
import s from'./Progresbar.module.css';


function ProgressBar({ data, blue }) {
  
  return (
    <div className={s.progress_bar}>
      <div className={s.inner_circle + (blue ?  s.blue : "")}> </div>
      <div className={s.outer_circle}> </div>
      <div>

      {data>=0 ? <div class={s.data}>+{data}%</div> : <div class={s.data}>{data}%</div>}
      </div>
      <div className={s.circle}>
        <div className={`${s.bar}  ${s.left}`}>
          <div className={s.progress + ((data<0 ?  s.red : "") + (blue ? s.white : ""))}> </div>
        </div>
        <div className={`${s.bar}  ${s.right}`}>
          <div className={s.progress + ((data<0 ?  s.red : "") + (blue ? s.white : ""))}> </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;