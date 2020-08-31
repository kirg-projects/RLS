import React from "react"
import { TextField} from '@material-ui/core';

function CityTextField(props){
    return(
        <div>
        {props.error
             ?<TextField
                 margin="normal"
                 id="city"
                 type="text"
                 label="City"
                 name="city"
                 value={props.value}
                 error={props.error}
                 helperText="Required field"
                 onChange={props.onChange}
                 InputProps={{
                     style:{
                         width:"95px"
                     }
                 }}
             />
             :<TextField
                   margin="normal"
                   id="city"
                   type="text"
                   label="City"
                   name="city"
                   value={props.value}
                   error={props.error}
                   onChange={props.onChange}
                   InputProps={{
                       style:{
                           width:"95px"
                       }
                   }}
               />
        }
         </div>
    )
}

export default CityTextField