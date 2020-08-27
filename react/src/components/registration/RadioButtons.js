import React from "react"
import { FormControl,Radio, FormLabel,RadioGroup,FormControlLabel } from '@material-ui/core';

function RadioButtons(props){
    return(
        <div>
             <FormControl component="fieldset">
               <FormLabel component="legend">Account Type</FormLabel>
               <RadioGroup  name="accountType" value={props.value} onChange={props.onChange}>
                 <FormControlLabel value="newUser" control={<Radio color="primary"/>} label="New user" labelPlacement="start"/>
                 <FormControlLabel value="company" control={<Radio color="primary"/>} label="Company" labelPlacement="start"/>
                 <FormControlLabel value="patron" control={<Radio color="primary"/>} label="Patron" labelPlacement="start"/>
               </RadioGroup>
             </FormControl>
         </div>
    )
}

export default RadioButtons