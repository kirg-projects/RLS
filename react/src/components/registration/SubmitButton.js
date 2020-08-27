import React from "react"
import { Button} from '@material-ui/core';

function SubmitButton(props){
    return(
        <div>
             <Button variant="contained" color="primary" onClick={props.onClick}>
                 Sign up
             </Button>
         </div>
    )
}

export default SubmitButton