import axios from "axios";
import { ICar, ICarData } from '../types/car.interface';


export const CarService = {
    async getAllCars() {
        const response = await axios.get<ICar[]>('http://localhost:4200/cars');
        return response.data
    },
    async getCarById(id: string) {
        const response = await axios.get<ICar[]>(`http://localhost:4200/cars?id=${id}`);
        return response.data[0]
    },

    async create(data: ICarData) {
        return axios.post('http://localhost:4200/cars', data)
    }
}