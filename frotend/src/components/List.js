import axios from 'axios'
import React from 'react'
import {BiEditAlt, BiTrash} from 'react-icons/bi'
import { baseURL } from '../utils/constant'

const List = ({ id, task, setUpdateUI, updateMode }) => {
 const removeTask = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
      });
    };

    return (
    <div className="container">
    <li className="content">
        {task}
        <div className="icon_holder">
            <BiEditAlt className="icon" onClick = {() =>updateMode(id, task)}/>
            <BiTrash className="icon" onClick={removeTask}/> 
        </div>
    </li>
    </div>
  )
}

export default List