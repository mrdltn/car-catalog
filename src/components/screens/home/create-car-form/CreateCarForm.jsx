import { useState } from 'react'
import styles from './CreateCarForm.module.css'
import { useMutation } from '@tanstack/react-query'
import { CarService } from '../../../../services/car.service'
import { useForm } from 'react-hook-form'


const clearData = {
    price: '',
    name: '',
    image: '',
}

const CreateCarForm = ({setCars}) => {
    // const [data, setData] = useState(clearData)

    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: 'onChange'
    })

    const createCar = data => {
        console.log(data);
        // e.preventDefault()

        setCars(prev => [
            {
                id: prev.length + 1,
                ...data,
            },
            ...prev,
        ])
        reset()
    }
    console.log(errors);
    
    // const {mutate} = useMutation(['create car'], (data) => {
    //     CarService.create(data), {
    //     onSuccess: () => {
    //         clearData()
    //     }
    //     }
    // })

    // const createCar = data => {
    //     mutate({...data, id: Date.now()})
    //     setData(clearData)
    // }


    return <form className={styles.form} onSubmit={handleSubmit(createCar)}>
        <input
            {...register('name', {required: 'Name is required'})}
            placeholder="Name"
            // onChange={e => setData(prev => ({
            //     ...prev, name: e.target.value
            // }))}
            // value={data.name}
        />
        {errors?.name?.message && <p style={{
            color: 'red'
        }}>Name is required</p>}

        <input 
            {...register('price', {required: true})}
            placeholder="Price"
            // onChange={e => setData(prev => ({
            //     ...prev, price: e.target.value
            // }))}
            // value={data.price}    
        />
        <input
            {...register('image', {required: true})} 
            placeholder="Image"
            // onChange={e => setData(prev => ({
            //     ...prev, image: e.target.value
            // }))}
            // value={data.image}    
        />

        <button className='btn'>Create</button>
    </form>
}

export default CreateCarForm