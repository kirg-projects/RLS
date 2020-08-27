import React from "react"
import { TextField} from '@material-ui/core';

function ReEmailTextField(props){
    return(
        <div>
             <TextField
                 margin="normal"
                 id="reEmail"
                 label="Repeat Email Address"
                 type="email"
                 name="reEmail"
                 value={props.value}
                 onChange={props.onChange}
             />
         </div>
    )
}

export default ReEmailTextField