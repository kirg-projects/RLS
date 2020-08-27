import React from "react"
import { TextField} from '@material-ui/core';

function LoginTextField(props){
    return(
        <div>
              <TextField
                 margin="normal"
                 id="login"
                 type="text"
                 label="Login"
                 name="login"
                 value={props.login}
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
         </div>
    )
}

export default LoginTextField