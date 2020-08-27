import React from "react"
import { FormControlLabel, Checkbox } from '@material-ui/core';

function RememberCheckbox(props){
    return(
        <div>
             <FormControlLabel
                 control={<Checkbox name="remember " value={props.value} onChange={props.onChange} color="primary" />}
                 label={<span  style={{ color: "#3f51b5" , fontSize:"14px"  }}>Remember me</span>}
             />
         </div>
    )
}

export default RememberCheckbox