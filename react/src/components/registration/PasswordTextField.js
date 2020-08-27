import React from "react"
import { TextField} from '@material-ui/core';

function PasswordTextField(props){
    return(
        <div>
             <TextField
                 margin="normal"
                 name="password"
                 label="Password"
                 type="password"
                 id="password"
                 value={props.value}
                 onChange={props.onChange}
             />
         </div>
    )
}

export default PasswordTextField