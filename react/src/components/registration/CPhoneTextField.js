import React from "react"
import { TextField} from '@material-ui/core';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
function CPhoneTextField(props){
    return(
        <div>
             <If condition={props.accountType === "company"  && props.error}>
                 <Then>
                     <TextField
                         margin="normal"
                         id="companyNumber"
                         type="number"
                         label="Company Phone Number"
                         name="companyNumber"
                         value={props.value}
                         onChange={props.onChange}
                         error={props.error}
                         helperText="Phone number must be between 6 and 15 digits"
                     />
                 </Then>
                 <ElseIf condition={props.accountType === "company"&& !props.error}>
                     <TextField
                         margin="normal"
                         id="companyNumber"
                         type="number"
                         label="Company Phone Number"
                         name="companyNumber"
                         value={props.value}
                         onChange={props.onChange}
                         error={props.error}
                     />
                 </ElseIf>
             </If>
         </div>
    )
}

export default CPhoneTextField