import React from "react"
import { TextField} from '@material-ui/core';

function RePasswordTextField(props){
    return(
        <div>
             <TextField
                 margin="normal"
                 name="rePassword"
                 label="Repeat Password"
                 type="password"
                 id="rePassword"
                 value={props.value}
                 onChange={props.onChange}
             />
         </div>
    )
}

export default RePasswordTextField