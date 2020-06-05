 
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
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [username, setName] = React.useState("");
    const [avatar, setAvatar] = React.useState("");
    const [city, setCity] = React.useState("");
    const [age, setAge] = React.useState("");
    const [about, setAbout] = React.useState("");
    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = async () => {

        const Uid = localStorage.getItem('userid')

        localStorage.getItem('userid', JSON.stringify(Uid))

        // console.log(Uid,"uid");
        

        const userProfile = {
            id: Uid,
            username,
            city,
            avatar,
            age,
            about,
        };

        updateUser(userProfile);

        console.log(userProfile);
        

        // getUser(userProfile.id);

        setOpen(false);
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
                        value={username}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="City"
                        label="Division"
                        type="text"
                        fullWidth
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="Age"
                        label="Assignment"
                        type="text"
                        fullWidth
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="About"
                        label="Deadline"
                        type="number"
                        fullWidth
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="Avatar"
                        label="Phone Number"
                        type="number"
                        fullWidth
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

// export default connect(null, { updateUser })(FormDialog);
export default connect(null)(FormDialog);