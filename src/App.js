import React, { useState } from 'react';
import Todo from './Todo';
//import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import AddIcon from '@mui/icons-material/Add';
const App = () => {
  const [inputList , setinputList] = useState("");
  const [Items , setItems] = useState([]);

  const itemEvent = (event) =>{
    setinputList(event.target.value);
  }

  const listOfItems = () =>{
    setItems((oldItems) => {
      return [...oldItems , inputList ]
    })
    setinputList("");
  }
  const deleteItems = (id) => {
    console.log("deleted")
    setItems((oldItems) =>{
      return oldItems.filter((arr , index) =>{
         return index !== id ;
      })
    })
}
  return (
    <>
    <div className = 'main_div'>
      <div className = 'center_div'>
      <br/>
     <h1>ToDo List</h1>
     <br/>
    <input type='text' placeholder='Add a item' value={inputList} onChange={itemEvent}/>
    <button onClick={listOfItems}> <AddIcon/> </button>

    <ol>
     {/* <li> {inputList} </li>  */}
       {Items.map((itemval,index) =>{
        return <Todo 
        key={index} 
        id={index}
        text = {itemval}
        onSelect={deleteItems}
        />
       })}
    </ol>
      </div>
    </div>
    </>
  )
}

export default App;
