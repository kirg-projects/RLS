import React from "react"
import { TextField} from '@material-ui/core';

function FlatTextField(props){
    return(
        <div>
            {props.error
                 ?<TextField
                     margin="none"
                     id="flatNumber"
                     type="number"
                     label="Flat Number"
                     name="flatNumber"
                     value={props.value}
                     error={props.error}
                     helperText="Required field"
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
                 :<TextField
                       margin="none"
                       id="flatNumber"
                       type="number"
                       label="Flat Number"
                       name="flatNumber"
                       value={props.value}
                       error={props.error}
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
             }
         </div>
    )
}

export default FlatTextField