import React from "react"
import { TextField} from '@material-ui/core';

function FNameTextField(props){
    return(
        <div>
             <TextField
                 margin="normal"
                 id="firstName"
                 type="text"
                 label="First Name"
                 name="firstName"
                 value={props.value}
                 onChange={props.onChange}
             />
         </div>
    )
}

export default FNameTextField