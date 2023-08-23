import { useQueryClient } from "@tanstack/react-query"
import { CarService } from "../../../../services/car.service"
import { useMutation } from "@tanstack/react-query"


export const useCreateCar = (reset) => {
    const QueryClient = useQueryClient()

    const {mutate} = useMutation(['create car'], (data) =>
        CarService.create(data), {
        onSuccess: () => {
            QueryClient.invalidateQueries('cars')
            reset()
        }
    })

    const createCar = data => {
        mutate({...data, id: Date.now()})
    }


    return {createCar}
}