import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import EventIcon from '@material-ui/icons/Event';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
// import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        //   zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


export default function ClippedDrawer({ vehicleFields, sendDataToParent }) {

    const classes = useStyles();
    console.log("vehicleFields", vehicleFields);
    let makes = vehicleFields.map(item => item.make)
        .filter((value, index, self) => self.indexOf(value) === index)
    let models = vehicleFields.map(item => item.model)
        .filter((value, index, self) => self.indexOf(value) === index)
    console.log("makes", makes);

    const handleChange = (event) => {
        if (event["getFullYear"]) {
            sendDataToParent("year", event.getFullYear());
        } else {
            sendDataToParent(event.target.name, event.target.value);
        }
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>

                    <List>
                        {/* {['ID', 'Make', 'Model', 'Year'].map((text, index) => ( */}

                        <ListItem key="Make"  >
                            <ListItemIcon> <FindInPageIcon /></ListItemIcon>
                            <FormControl required className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Make</InputLabel>
                                <Select
                                    name="Make"
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {makes.map((myField, index) => (
                                        <MenuItem value={myField}>{myField}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </ListItem>
                        <ListItem key="Model"  >
                            <ListItemIcon> <FindInPageIcon /></ListItemIcon>
                            <FormControl required className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Model</InputLabel>
                                <Select
                                    name="Model"
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {models.map((myField, index) => (
                                        <MenuItem value={myField}>{myField}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </ListItem>
                        <ListItem key="Year"  >
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <ListItemIcon> <EventIcon /></ListItemIcon>
                                <FormControl required className={classes.formControl}>
                                    <KeyboardDatePicker
                                        name="Year"
                                        views={["year"]}
                                        disableToolbar
                                        variant="inline"
                                        format="yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Year"
                                        onChange={handleChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </FormControl>
                            </MuiPickersUtilsProvider>
                        </ListItem>
                    </List>

                    <Divider />
                </div>
            </Drawer>
        </div >
    );
}
