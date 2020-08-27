import React from "react"
import { TextField} from '@material-ui/core';

function CountryTextField(props){
    return(
        <div>
             <TextField
                 margin="normal"
                 id="country"
                 type="text"
                 label="Country"
                 name="country"
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

export default CountryTextField