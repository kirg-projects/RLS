import React from "react"
import { TextField} from '@material-ui/core';

function CityTextField(props){
    return(
        <div>
             <TextField
                 margin="normal"
                 id="city"
                 type="text"
                 label="City"
                 name="city"
                 value={props.value}
                 onChange={props.onChange}
                 InputProps={{
                     style:{
                         width:"95px"
                     }
                 }}
             />
         </div>
    )
}

export default CityTextField