import { Fab, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/actions/task';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        // width: '25ch',
      },
    },
  }));

const AddTask = () => {
    const [description, setDesc] = useState('')
    const dispatch = useDispatch();
    const handleChange=(e)=>{
       setDesc(e.target.value);
    }
    const handleClick=(e)=>{
        dispatch(addTask({id:Math.random(), description, isDone:false}));
        e.preventDefault();
        setDesc('');
    }
    const classes = useStyles();
    return (
        <div>
            {/* <input onChange={(e)=> handleChange(e)}/> */}
            {/* <button onClick={()=>handleClick()}>
                Add
            </button> */}
            
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-full-width"
                    label="Add Task"
                    style={{ margin: 8 }}
                    placeholder="write the task"
                    // helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e)=> handleChange(e)}
                    value={description}
                />

                <Fab color="primary"  aria-label="add" onClick={(e)=>handleClick(e)}>
                    <AddIcon />
                </Fab>
            </form>
                        
        </div>
    )
}

export default AddTask
