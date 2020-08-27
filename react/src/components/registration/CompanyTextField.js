import React from "react"
import { TextField} from '@material-ui/core';

function CompanyTextField(props){
    return(
        <div>
             {props.accountType === "company"
             ? <TextField
                 margin="normal"
                 name="companyName"
                 label="Name of company"
                 type="text"
                 id="companyName"
                 value={props.value}
                 onChange={props.onChange}
             /> : null}
         </div>
    )
}

export default CompanyTextField