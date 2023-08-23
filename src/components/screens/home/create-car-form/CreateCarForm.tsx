import styles from './CreateCarForm.module.css'
import { useForm } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'
import { useCreateCar } from './useCreateCar'
import { ICarData } from '../../../../types/car.interface'


const CreateCarForm = () => {

    const {register, reset, handleSubmit, formState: {errors}} = useForm<ICarData>({
        mode: 'onChange'
    })

    const {createCar} = useCreateCar(reset)


    return <form className={styles.form} onSubmit={handleSubmit(createCar)}>
        <input
            {...register('name', {required: 'Name is required'})}
            placeholder="Name"
        />
        <ErrorMessage error={errors?.name?.message} />

        <input 
            placeholder="Price"
            {...register('price', {required: 'Price is required'})}
        />
        <ErrorMessage error={errors?.price?.message} />

        <input
            {...register('image', {required: true})} 
            placeholder="Image"
        />

        <button className='btn'>Create</button>
    </form>
}

export default CreateCarForm