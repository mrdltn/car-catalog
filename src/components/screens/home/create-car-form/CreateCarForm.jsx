import styles from './CreateCarForm.module.css'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CarService } from '../../../../services/car.service'
import { useForm } from 'react-hook-form'


const CreateCarForm = () => {

    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: 'onChange'
    })

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


    return <form className={styles.form} onSubmit={handleSubmit(createCar)}>
        <input
            {...register('name', {required: 'Name is required'})}
            placeholder="Name"
        />
        {errors?.name?.message && <p style={{
            color: 'red'
        }}>Name is required</p>}

        <input 
            placeholder="Price"
            {...register('price', {required: 'Price is required'})}
        />
        {errors?.price?.message && <p style={{
            color: 'red'
        }}>Price is required</p>}

        <input
            {...register('image', {required: true})} 
            placeholder="Image"
        />

        <button className='btn'>Create</button>
    </form>
}

export default CreateCarForm