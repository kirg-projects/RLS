import React from "react"
import { TextField} from '@material-ui/core';

function FNameTextField(props){
    return(
        <div>
            {props.error
            ?<TextField
                 margin="normal"
                 id="firstName"
                 type="text"
                 label="First Name"
                 name="firstName"
                 value={props.value}
                 error={props.error}
                 helperText="Required field"
                 onChange={props.onChange}
            />
            :<TextField
                  margin="normal"
                  id="firstName"
                  type="text"
                  label="First Name"
                  name="firstName"
                  value={props.value}
                  error={props.error}
                  onChange={props.onChange}
            />}
         </div>
    )
}

export default FNameTextField