import { Link, useParams } from "react-router-dom"
import { CarService } from "../../../../services/car.service"
import { useState, useEffect } from "react"
import CarItem from '../car-item/CarItem';
import { withAuth } from '../../../../HOC/withAuth';
import { ICar } from "../../../../types/car.interface";


const CarDetail = () => {
    const {id} = useParams()
    const [car, setCar] = useState<ICar>({} as ICar)

    useEffect(() => {
        if(!id) return

        const fetchData = async() => {
          const data = await CarService.getCarById(id)
          setCar(data)
        }
        fetchData()
      }, [id])

      if(!car?.name) return <p>Loading...</p>


    return <div>
        <Link to="/">Back</Link>
        <CarItem car={car}/>
    </div>
}

export default withAuth(CarDetail)