import React from "react"
import { TextField} from '@material-ui/core';

function LoginTextField(props){
    return(
        <div>
            {props.error ?
                <TextField
                    margin="normal"
                    id="login"
                    type="text"
                    label="Login"
                    name="login"
                    value={props.login}
                    error={props.error}
                    helperText="Required field"
                    onChange={props.onChange}
                    InputProps={{
                        style:{
                            marginTop:"22%",
                            marginLeft:"5%"
                        }
                    }}
                    InputLabelProps={{
                        style:{
                            marginTop:"13%",
                            marginLeft:"5%"
                        }
                    }}
                />
                : <TextField
                      margin="normal"
                      id="login"
                      type="text"
                      label="Login"
                      name="login"
                      value={props.login}
                      error={props.error}
                      onChange={props.onChange}
                      InputProps={{
                          style:{
                              marginTop:"22%",
                              marginLeft:"5%"
                          }
                      }}
                      InputLabelProps={{
                          style:{
                              marginTop:"13%",
                              marginLeft:"5%"
                          }
                      }}
                  />
            }

         </div>
    )
}

export default LoginTextField