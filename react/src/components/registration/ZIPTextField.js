import React from "react"
import { TextField} from '@material-ui/core';

function ZIPTextField(props){
    return(
        <div>
            {props.error
                 ?<TextField
                     margin="normal"
                     id="zip"
                     type="number"
                     label="ZIP Code"
                     name="zip"
                     value={props.value}
                     error={props.error}
                     helperText="Required field"
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
                 :<TextField
                       margin="normal"
                       id="zip"
                       type="number"
                       label="ZIP Code"
                       name="zip"
                       value={props.value}
                       error={props.error}
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
             }
         </div>
    )
}

export default ZIPTextField