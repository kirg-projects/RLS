import React from "react"
import { TextField} from '@material-ui/core';

function EmailTextField(props){
    return(
        <div>
             <TextField
                 margin="normal"
                 fullWidth
                 id="email"
                 label="Email Address"
                 type="email"
                 name="email"
                 autoComplete="email"
                 value={props.value}
                 onChange={props.onChange}
             />
         </div>
    )
}

export default EmailTextField