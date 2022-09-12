import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { useEffect, useState } from 'react';

function CarComp(props) {

  const [updateMode, setUpdateMode] = useState(false)
  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const [car, setCar] = useState({status : '', id : '', model : '', color : '', year : 0})

  useEffect(() =>
  {
    setCar(props.carData)
  }, [])

  return (
    <div className="App" style={{width : "300px", borderStyle : "solid", borderColor : 'red', borderWidth : "3px"}}>
    <h3>Car Data</h3>

  {
    !updateMode ? <div>
          Model : {car.model} <br/>
          Color : {car.color} <br/>
          Year : {car.year} <br/> <br/>
      </div>  :
      <div>
       Model : <input type="text" value={car.model} onChange={e => setCar({...car, model : e.target.value}) } /><br/>
       Color : <input type="text" value={car.color} onChange={e => setCar({...car, color : e.target.value}) } /><br/>
       Year : <input type="text" value={car.year} onChange={e => setCar({...car, year : e.target.value}) } /><br/>
       <input type="button" value="Save" onClick={() => dispatch({type : "UPDATE", payload : car })} /><br/><br/>
       </div>
  }


    <input type="button" value="Update" onClick={() => setUpdateMode(!updateMode)} />
    <input type="button" value="Delete" onClick={() => dispatch({type : "DELETE" , payload :car.id }) } />

    
    
    </div>
  );
}

export default CarComp;
