 
import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch, useSelector} from 'react-redux'
import { setNestedObjectValues } from "formik";
import { editTask, getTaskID } from '../redux/actions/assignmentAction'

// import { updateUser, getUser } from "../redux/actions/userActions";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 50,
        transform: "translateZ(0px)",
        flexGrow: 1,

        // '& > *': {
        //   margin: theme.spacing(1),
        // },
    },
    speedDial: {
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

function FormDialog({ updateUser }) {
    console.log(updateUser)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState(updateUser.name);
    const [division, setDivision] = React.useState(updateUser.division);
    const [assignment, setAssignment] = React.useState(updateUser.assignment);
    const [deadline, setDeadline] = React.useState(updateUser.deadline);
    const [phone, setPhone] = React.useState(updateUser.phone);
    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    // const handleEdit = async () => {



    //     editTask(userProfile);

    //     console.log(userProfile);
        

    //     getTaskID(userProfile.id);

    //     setOpen(false);
    // };

    const dispatch = useDispatch()

    const handleEdit = async() => {
        // const Uid = localStorage.getItem('id')

        // localStorage.getItem('id', JSON.stringify(Uid))

        // console.log(Uid,"uid");
        const user={
            id: updateUser._id,
            name,
            division,
            assignment,
            deadline,
            phone
        }

 
    await  dispatch(editTask(user))
            setOpen(false);
             alert ('Edit task success')
            //   window.location.reload();
      };

      

    return (
        <div className={classes.root}>
            <EditIcon 
                color="secondary"
                aria-label="edit"
                onClick={handleClickOpen}
                className={classes.speedDial}
            />
                
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Edit Assignment
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Name"
                        label="Employee's Name"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="Division"
                        label="Division"
                        type="text"
                        fullWidth
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="Assignment"
                        label="Assignment"
                        type="text"
                        fullWidth
                        value={assignment}
                        onChange={(e) => setAssignment(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="Deadline"
                        label="Deadline"
                        type="number"
                        fullWidth
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="Phone"
                        label="Phone Number"
                        type="number"
                        fullWidth
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleEdit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

// export default connect(null, { updateUser })(FormDialog);
export default connect(null)(FormDialog);