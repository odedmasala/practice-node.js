import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddCarComp() {

  const dispatch = useDispatch()

  const [car, setCar] = useState({model : '', color :'', year :0, status : "NEW"})

  return (
    <div className="App">
    <h3>Add Car</h3>

    Model : <input type="text" onChange={e => setCar({...car, model : e.target.value})} /><br/>
    Color : <input type="text" onChange={e => setCar({...car, color : e.target.value})} /><br/>
    Year : <input type="text" onChange={e => setCar({...car, year : parseInt(e.target.value)})} /><br/>

    <input type="button" value="Add" onClick={() => dispatch({type : "ADD", payload : car}) } />

    </div>
  );
}

export default AddCarComp;
