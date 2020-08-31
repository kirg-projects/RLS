import React from "react"
import { TextField} from '@material-ui/core';

function PhoneTextField(props){
    return(
        <div>
            {props.error ?
                <TextField
                    margin="normal"
                    id="phone"
                    type="number"
                    label="Phone"
                    name="phone"
                    value={props.value}
                    error={props.error}
                    helperText="Phone number must be between 6 and 15 digits"
                    onChange={props.onChange}
                />
                : <TextField
                    margin="normal"
                    id="phone"
                    type="number"
                    label="Phone"
                    name="phone"
                    value={props.value}
                    error={props.error}
                    onChange={props.onChange}
                />
            }
         </div>
    )
}

export default PhoneTextField