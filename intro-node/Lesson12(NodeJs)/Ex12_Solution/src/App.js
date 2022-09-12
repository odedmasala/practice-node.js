import logo from './logo.svg';
import './App.css';
import CarsComp from './Cars';
import AddCarComp from './AddCar';
import { useEffect } from 'react';

import firebase from './firebaseApp'
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  async function getData() {
    let data = await firebase.firestore().collection('cars').get();

    let cars = [];
    data.forEach(doc => {
      let car = { status: "UNCHANGED", id: doc.id, model: doc.data().model, color: doc.data().color, year: doc.data().year };
      cars.push(car);
    })

    dispatch({ type: "LOAD", payload: cars })
  }
  useEffect(() => {

    getData()

  }, [])

  return (
    <div className="App">
      <h3>Cars Web Site</h3>

      <div style={{ width: "50%", float: "left" }}>
        <CarsComp />
      </div>

      <div style={{ width: "50%", float: "right" }}>
        <AddCarComp />
      </div>

    </div>
  );
}

export default App;
