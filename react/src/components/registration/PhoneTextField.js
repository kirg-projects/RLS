import React from "react"
import { TextField} from '@material-ui/core';

function PhoneTextField(props){
    return(
        <div>
            {props.phoneError ?
                <TextField
                    margin="normal"
                    id="phone"
                    type="number"
                    label="Phone"
                    name="phone"
                    value={props.value}
                    error={props.error}
                    helperText="Phone number must contain 9 digits"
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