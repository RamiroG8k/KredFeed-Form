import { InputWarning } from 'components/shared';

const Address = (props: any) => {
    const { register, errors } = props;
    return (
        <>
            <div className="flex flex-col col-span-2 relative">
                <label htmlFor="calle" className="ml-2 mb-1">Calle o Avenida principal</label>
                <input id="calle" {...register("calle", { required: true })} type="text" autoComplete="off"
                    className={`${errors.calle && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.calle && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor="numeroExt" className="ml-2 mb-1">Numero Exterior</label>
                <input id="numeroExt" {...register("numeroExt", { required: true })} type="text" autoComplete="off"
                    className={`${errors.numeroExt && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.numeroExt && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor="numeroInt" className="ml-2 mb-1">Numero Interior</label>
                <input id="numeroInt" {...register("numeroInt")} type="text" autoComplete="off"
                    className="input bg-yellow-500 bg-opacity-20 dark:bg-gray-600" />
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor="cp" className="ml-2 mb-1">Codigo postal</label>
                <input id="cp" {...register("cp", { required: true, maxLength: 7 })} type="text" autoComplete="off"
                    className={`${errors.cp && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.cp && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor="colonia" className="ml-2 mb-1">Colonia o Urbanizacion</label>
                <input id="colonia" {...register("colonia", { required: true })} type="text" autoComplete="off"
                    className={`${errors.colonia && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.colonia && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor="municipio" className="ml-2 mb-1">Delegacion o Municipio</label>
                <input id="municipio" {...register("municipio", { required: true })} type="text" autoComplete="off"
                    className={`${errors.municipio && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.municipio && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor="ciudad" className="ml-2 mb-1">Ciudad o Poblacion</label>
                <input id="ciudad" {...register("ciudad", { required: true })} type="text" autoComplete="off"
                    className={`${errors.ciudad && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.ciudad && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor="estado" className="ml-2 mb-1">Entidad federativa o Estado</label>
                <input id="estado" {...register("estado", { required: true })} type="text" autoComplete="off"
                    className={`${errors.estado && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.estado && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor="pais" className="ml-2 mb-1">Pais</label>
                <input id="pais" {...register("pais", { required: true })} type="text" autoComplete="off"
                    className={`${errors.pais && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.pais && <InputWarning />}
            </div>
        </>
    )
}

export default Address;
