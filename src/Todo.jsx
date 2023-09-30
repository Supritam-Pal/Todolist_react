import React , {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
//import DeleteIcon from '@mui/icons-material/Delete';
//import Button from '@mui/material/Button';
//import DeleteIcon from '@material-ui/icons/Delete';


const Todo = (props) => {

    // const deleteItems = () => {
    //     console.log("deleted")
    //}
    const [line , setline] = useState(false);

    const cutIt = () => {
      if(line === false){
      setline(true);
    }else{
      setline(false)
    }
  }
   
    
  return (
    <>
    <div className = 'todo_style'>
    {/* <i className="fa fa-times" aria-hidden="true" onClick={deleteItems} /> */}
    <div>
    <Tooltip title="Delete">
    <DeleteIcon className="fa-times" 
    onClick={() =>{
       props.onSelect(props.id)
    }} 
    />
    </Tooltip>
    </div>
    
    <div className='cross'>
    <span onClick={cutIt} >
    <Tooltip title="cut">
     <CloseIcon className="fa-times"
     />
     </Tooltip>
     </span>
    </div>
    
   <li style={{textDecoration:line? "line-through" : "none"}}>{props.text}</li>
   </div>
    </>
  )
}

export default Todo;
