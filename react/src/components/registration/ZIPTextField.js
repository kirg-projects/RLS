import React from "react"
import { TextField} from '@material-ui/core';

function ZIPTextField(props){
    return(
        <div>
             <TextField
                 margin="normal"
                 id="zip"
                 type="number"
                 label="ZIP Code"
                 name="zip"
                 value={props.value}
                 onChange={props.onChange}
                 InputProps={{
                     style:{
                         width:"75px",
                         marginLeft:"15%",
                     }
                 }}
                 InputLabelProps={{
                    style:{
                       marginLeft:"15%",
                       fontSize:"14px"
                    }
                 }}
             />
         </div>
    )
}

export default ZIPTextField