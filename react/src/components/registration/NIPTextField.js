import React from "react"
import { TextField} from '@material-ui/core';

function NIPTextField(props){
    return(
        <div>
             {props.accountType === "company"
             ? <TextField
                 margin="normal"
                 name="nip"
                 label="NIP"
                 type="number"
                 id="nip"
                 value={props.value}
                 onChange={props.onChange}
             /> : null}
         </div>
    )
}

export default NIPTextField