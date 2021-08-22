import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

function AppForm(){
    const classes = useStyles();
    
    return(
        <div>
            <h1>ONLINE APPLICATION FORM</h1>

            <section>
                <h4 className="pt-3">The following fields are required</h4>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </section>

            <section>
                <form className={classes.root} noValidate autoComplete="off">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <TextField
                                error
                                id="filled-error-helper-text"
                                label="First Name"
                                defaultValue="ex. Juan"
                                helperText="Incorrect entry."
                                variant="filled"
                            />
                            <TextField
                                error
                                id="filled-error-helper-text"
                                label="Middle Name"
                                defaultValue="ex. Granada"
                                helperText="Incorrect entry."
                                variant="filled"
                            />
                            <TextField
                                error
                                id="filled-error-helper-text"
                                label="Last Name"
                                defaultValue="ex. Dela Cruz"
                                helperText="Incorrect entry."
                                variant="filled"
                            />
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}
export default AppForm