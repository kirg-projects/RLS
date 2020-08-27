import React from "react"
import { TextField} from '@material-ui/core';

function StreetTextField(props){
    return(
        <div>
             <TextField
                 margin="normal"
                 id="street"
                 type="text"
                 label="Street"
                 name="street"
                 value={props.value}
                 onChange={props.onChange}
                 InputProps={{
                     style:{
                         marginLeft:"6%"
                     }
                 }}
                 InputLabelProps={{
                     style:{
                         marginLeft:"6%"
                     }
                 }}
             />
         </div>
    )
}

export default StreetTextField