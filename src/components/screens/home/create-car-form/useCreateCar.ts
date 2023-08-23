import { useQueryClient } from "@tanstack/react-query"
import { CarService } from "../../../../services/car.service"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, UseFormReset } from "react-hook-form"
import { ICarData } from "../../../../types/car.interface"


export const useCreateCar = (reset: UseFormReset<ICarData>) => {
    const QueryClient = useQueryClient()

    const {mutate} = useMutation(['create car'], (data: ICarData) =>
        CarService.create(data), {
        onSuccess: () => {
            QueryClient.invalidateQueries(['cars'])
            reset()
        }
    })

    const createCar: SubmitHandler<ICarData> = data => {
        mutate(data)
    }


    return {createCar}
}