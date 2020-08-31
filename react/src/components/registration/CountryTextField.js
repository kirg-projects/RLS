import React from "react"
import { TextField} from '@material-ui/core';

function CountryTextField(props){
    return(
        <div>
            {props.error
                ?<TextField
                     margin="normal"
                     id="country"
                     type="text"
                     label="Country"
                     name="country"
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
                      margin="normal"
                      id="country"
                      type="text"
                      label="Country"
                      name="country"
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

export default CountryTextField