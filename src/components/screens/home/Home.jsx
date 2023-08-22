import { useEffect, useState } from 'react'
import CarItem from './car-item/CarItem'
import {cars as carsData} from './cars.data.js'
import CreateCarForm from './create-car-form/CreateCarForm'
import axios from 'axios'
import { CarService } from '../../../services/car.service'
import { useNavigate } from 'react-router-dom'


function Home() {
  const [cars, setCars] = useState([])
  // useEffect(() => {
  //   const fetchData = async() => {
  //     const response = await fetch('http://localhost:4200/cars');
  //     const data = await response.json();
  //     setCars(data)
  //   }
  //   fetchData()
  // }, [])
//////////////выше запрос на сервер посредством fetch, а ниже axios
  // useEffect(() => {
  //   const fetchData = async() => {
  //     const response = await axios.get('http://localhost:4200/cars');
  //     setCars(response.data)
  //   }
  //   fetchData()
  // }, [])
  ////////////////
    useEffect(() => {
    const fetchData = async() => {
      const data = await CarService.getAllCars()
      setCars(data)
    }
    fetchData()
  }, [])

  // const nav = useNavigate() /// когда нужно повешать переход на кнопку используется useNavigate и на button вешается
  

  return (
      <div>
        <h1>Cars catalog</h1>
        {/* <button onClick={() => nav('/car/3')}>Go</button> */}
        <CreateCarForm setCars={setCars} />
        <div>
            {cars.length ?
                cars.map(car => (
                <CarItem key={car.id} car={car}/>
            ))
            : <p>There are no cars</p>
        } 
        </div>
      </div>
  )
}  
 
export default Home
