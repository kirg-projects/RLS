import React from "react"
import { Link} from '@material-ui/core';

function SignInLink(){
    return(
        <div>
             <Link href="#" style={{  fontSize:"12px"  }}>
                 I already have an account. Sign in.
             </Link>
         </div>
    )
}

export default SignInLink