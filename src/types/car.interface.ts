export interface ICar {
    id: number,
    name: string,
    price: string,
    image: string
}

export interface ICarData extends Omit<ICar, 'id'> {}