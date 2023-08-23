
import { useQuery } from '@tanstack/react-query'
import CarItem from './car-item/CarItem'
import CreateCarForm from './create-car-form/CreateCarForm'
import { CarService } from '../../../services/car.service'
import { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from './../../../providers/AuthProvider';


function Home() {
  // const {data, isLoading} = useQuery(['cars'], () => CarService.getAllCars())

  // const {user, setUser} = useContext(AuthContext)

  // if(isLoading) return <p>Loading...</p>

  const [cars, setCars] = useState([])

  // const clearCars = useCallback(() => () => { //cash function
  //   setCars([])
  // }, [cars])

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAllCars()

      setCars(data)
    }
    fetchData()

    // return clearCars()
  }, [])

  const {user, setUser} = useContext(AuthContext)


  return (
      <div>
        <h1>Cars catalog</h1>
        {user ? (
          <>
            <h2>
              Welcome, {user.name}!
            </h2>
            <button onClick={() => setUser(null)}>Logout</button>
          </>
        ) : 
            <button onClick={() => setUser({
              name: 'Miroslav'
            })}>Login
            </button>
            }

        <CreateCarForm setCars={setCars}/>
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
