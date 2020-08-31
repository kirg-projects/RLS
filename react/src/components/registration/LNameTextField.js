import React from "react"
import { TextField} from '@material-ui/core';

function LNameTextField(props){
    return(
        <div>
            {props.error
                 ?<TextField
                     margin="normal"
                     id="lastName"
                     type="text"
                     label="Last Name"
                     name="lastName"
                     value={props.value}
                     error={props.error}
                     helperText="Required field"
                     onChange={props.onChange}
                 />
                 :<TextField
                       margin="normal"
                       id="lastName"
                       type="text"
                       label="Last Name"
                       name="lastName"
                       value={props.value}
                       error={props.error}
                       onChange={props.onChange}
                   />
               }
         </div>
    )
}

export default LNameTextField