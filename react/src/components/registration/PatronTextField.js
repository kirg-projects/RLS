import React from "react"
import { TextField} from '@material-ui/core';

function PatronTextField(props){
    return(
        <div>
             {props.accountType === "patron"
             ? <TextField
                 margin="normal"
                 name="patronId"
                 label="Patron ID"
                 type="text"
                 id="patronId"
                 value={props.value}
                 onChange={props.onChange}
             />
             : null
                                         }
         </div>
    )
}

export default PatronTextField