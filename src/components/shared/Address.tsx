import { InputWarning } from 'components/shared';

const Address = (props: any) => {
    const { register, errors, data, noun = '' } = props;
    return (
        <>
            <div className="flex flex-col col-span-2 relative">
                <label htmlFor={`calle${noun}`} className="ml-2 mb-1">Calle o Avenida principal</label>
                <input id={`calle${noun}`}  {...register(`calle${noun}`, { required: true })} type="text" autoComplete="off" defaultValue={data?.[`calle${noun}`]}
                    className={`${errors[`calle${noun}`] && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors[`calle${noun}`] && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor={`numeroExt${noun}`} className="ml-2 mb-1">Numero Exterior</label>
                <input id={`numeroExt${noun}`} {...register(`numeroExt${noun}`, { required: true })} type="text" autoComplete="off" defaultValue={data?.[`numeroExt${noun}`]}
                    className={`${errors[`numeroExt${noun}`] && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors[`numeroExt${noun}`] && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor={`numeroInt${noun}`} className="ml-2 mb-1">Numero Interior</label>
                <input id={`numeroInt${noun}`} {...register(`numeroInt${noun}`)} type="text" autoComplete="off" defaultValue={data?.[`numeroInt${noun}`]}
                    className="input bg-yellow-500 bg-opacity-20 dark:bg-gray-600" />
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor={`cp${noun}`} className="ml-2 mb-1">Codigo postal</label>
                <input id={`cp${noun}`} {...register(`cp${noun}`, { required: true, maxLength: 7 })} type="text" autoComplete="off" defaultValue={data?.[`cp${noun}`]}
                    className={`${errors[`cp${noun}`] && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors[`cp${noun}`] && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor={`colonia${noun}`} className="ml-2 mb-1">Colonia o Urbanizacion</label>
                <input id={`colonia${noun}`} {...register(`colonia${noun}`, { required: true })} type="text" autoComplete="off" defaultValue={data?.[`colonia${noun}`]}
                    className={`${errors[`colonia${noun}`] && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors[`colonia${noun}`] && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor={`municipio${noun}`} className="ml-2 mb-1">Delegacion o Municipio</label>
                <input id={`municipio${noun}`} {...register(`municipio${noun}`, { required: true })} type="text" autoComplete="off" defaultValue={data?.[`municipio${noun}`]}
                    className={`${errors[`municipio${noun}`] && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors[`municipio${noun}`] && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor={`ciudad${noun}`} className="ml-2 mb-1">Ciudad o Poblacion</label>
                <input id={`ciudad${noun}`} {...register(`ciudad${noun}`, { required: true })} type="text" autoComplete="off" defaultValue={data?.[`ciudad${noun}`]}
                    className={`${errors[`ciudad${noun}`] && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors[`ciudad${noun}`] && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor={`estado${noun}`} className="ml-2 mb-1">Entidad federativa o Estado</label>
                <input id={`estado${noun}`} {...register(`estado${noun}`, { required: true })} type="text" autoComplete="off" defaultValue={data?.[`estado${noun}`]}
                    className={`${errors[`estado${noun}`] && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors[`estado${noun}`] && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor={`pais${noun}`} className="ml-2 mb-1">Pais</label>
                <input id={`pais${noun}`} {...register(`pais${noun}`, { required: true })} type="text" autoComplete="off" defaultValue={data?.[`pais${noun}`]}
                    className={`${errors[`pais${noun}`] && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors[`pais${noun}`] && <InputWarning />}
            </div>
        </>
    )
}

export default Address;
