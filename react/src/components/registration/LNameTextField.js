import React from "react"
import { TextField} from '@material-ui/core';

function LNameTextField(props){
    return(
        <div>
             <TextField
                 margin="normal"
                 id="lastName"
                 type="text"
                 label="Last Name"
                 name="lastName"
                 value={props.value}
                 onChange={props.onChange}

             />
         </div>
    )
}

export default LNameTextField