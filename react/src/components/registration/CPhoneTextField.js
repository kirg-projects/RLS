import React from "react"
import { TextField} from '@material-ui/core';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
function CPhoneTextField(props){
    return(
        <div>
             <If condition={props.accountType === "company"  && props.companyNumberError}>
                 <Then>
                     <TextField
                         margin="normal"
                         id="companyNumber"
                         type="number"
                         label="Company Phone Number"
                         name="companyNumber"
                         value={props.value}
                         onChange={props.onChange}
                         error={props.companyNumberError}
                         helperText="Phone number must contain 9 digits"
                     />
                 </Then>
                 <ElseIf condition={props.accountType === "company"&& !props.companyNumberError}>
                     <TextField
                         margin="normal"
                         id="companyNumber"
                         type="number"
                         label="Company Phone Number"
                         name="companyNumber"
                         value={props.value}
                         onChange={props.onChange}
                         error={props.companyNumberError}
                     />
                 </ElseIf>
             </If>
         </div>
    )
}

export default CPhoneTextField