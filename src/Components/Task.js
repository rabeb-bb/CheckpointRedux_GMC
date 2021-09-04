import { Box, Checkbox, Fab, FormControlLabel, Typography } from '@material-ui/core'
import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../JS/actions/task';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
}));
const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const Task = ({task}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    // const [state, setState] = React.useState({
    //     checkedG: false,
    //   });

    
      const handleChange = () => {
        // setState({ ...state, [event.target.name]: event.target.checked });

        dispatch(completeTask(task.id))
    };
    const handleClick=()=>{
        dispatch(deleteTask(task.id))
    }
    return (
        <div style={{margin:"1%", border:"solid", display:"flex", justifyContent:"space-between", alignItems:"center"}}>                    
            <span style={{padding:"2%"}}>{task.description}</span> 
            {/* <span>
            <FormControlLabel
                control={<GreenCheckbox 
                    // checked={state.checkedG}
                     onChange={()=>handleChange()} 
                     name="checkedG" />}
            />
            {/* <Fab color="secondary" aria-label="edit"    > */}
            {/* <EditIcon /> */}
            {/* </Fab> */}
            {/* <Fab color="default" onClick={()=>handleClick()}    > */}
            {/* <DeleteIcon onClick={()=>handleClick()} /> */}
            {/* </Fab> */}
            {/* </span> */}
             <button onClick={()=>handleClick()}>delete</button>
            
        </div>
    )
}

export default Task
