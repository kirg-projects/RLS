import React from "react"
import { TextField} from '@material-ui/core';

function BirthTextField(props){
    return(
        <div>

            <TextField
                id="birthDay"
                fullWidth
                label="Birth Date"
                type="date"
                name="birthDate"
                value={props.value}
                onChange={props.onChange}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style:{
                     width:"200px"
                  }
                }}
            />
         </div>
    )
}

export default BirthTextField