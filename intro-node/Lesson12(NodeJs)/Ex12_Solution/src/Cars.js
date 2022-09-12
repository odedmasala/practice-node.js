import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import CarComp from './Car';
import firebase from './firebaseApp'
import { useDispatch } from 'react-redux';


function CarsComp() {
  const dispatch = useDispatch()

  const storeData = useSelector(state => state)

  const saveAll = () => {
    let carsCollection = firebase.firestore().collection('cars');

    storeData.cars.forEach(async car => {
      switch (car.status) {
        case "NEW":
          await carsCollection.add({ model: car.model, color: car.color, year: car.year })
          let newStore = [...storeData.cars]
          const index = newStore.findIndex(stateCar => stateCar.id === car.id)

          let newCar = { model: car.model, color: car.color, year: car.year, status: "UNCHANGED" }
          newStore[index] = newCar

          dispatch({ type: "ADDED", payload: newStore })
          break;



        case "UPDATED":
          let obj = { model: car.model, color: car.color, year: car.year };
          await carsCollection.doc(car.id).set(obj)
          break;


        case "DELETED":
          await carsCollection.doc(car.id).delete()
          break;


        default:
          break;


      }
    })
  }

  return (
    <div className="App">
      <h3>Cars</h3>

      {
        storeData.cars.filter(x => x.status != "DELETED").map(item => {
          return <CarComp key={item.id} carData={item} />
        })
      }

      <br />
      <input type="button" value="Save All Changes" onClick={saveAll} />

    </div>
  );
}

export default CarsComp;
