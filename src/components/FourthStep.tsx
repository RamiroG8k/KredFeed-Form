import { InputWarning } from 'components/shared';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

const FirstStep = (props: any) => {
    const { register, control, errors } = props;
    // console.log(Object.values(errors).length);

    return (
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-4">
            <div className="flex flex-col relative">
                <label htmlFor="clabe" className="ml-2 mb-1">CLABE</label>
                <input id="clabe" {...register("clabe", { required: true })} type="text" autoComplete="off"
                    className={`${errors.clabe && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.clabe && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="banco" className="ml-2 mb-1">Banco</label>
                <input id="banco" {...register("banco", { required: true })} type="text" autoComplete="off"
                    className={`${errors.banco && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.banco && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="beneficiario" className="ml-2 mb-1">Nombre</label>
                <input id="beneficiario" {...register("beneficiario", { required: true })} type="text" autoComplete="off"
                    className={`${errors.beneficiario && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.beneficiario && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="fechaNacimiento" className="ml-2 mb-1">Fecha de nacimiento</label>
                <Controller control={control} name="fechaNacimiento" defaultValue={null} rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <DatePicker onChange={onChange} onBlur={onBlur} selected={value}
                            dateFormat="dd, MMM yyyy" wrapperClassName="w-full" maxDate={new Date()}
                            className={`${errors.fechaNacimiento && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />)} />
                {errors.fechaNacimiento && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="curp" className="ml-2 mb-1">CURP</label>
                <input id="curp" {...register("curp", { required: true, maxLength: 13 })} type="text" autoComplete="off"
                    className={`${errors.curp && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.curp && <InputWarning text="No debe ser mayor a 13 Caracteres" />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="genero" className="ml-2 mb-1">Genero</label>
                <input id="genero" {...register("genero", { required: true })} type="text" autoComplete="off"
                    className={`${errors.genero && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.genero && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="domicilio" className="ml-2 mb-1">Domicilio particular</label>
                <input id="domicilio" {...register("domicilio", { required: true })} type="text" autoComplete="off"
                    className={`${errors.domicilio && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.domicilio && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="numero" className="ml-2 mb-1">Numero de telefono</label>
                <input id="numero" {...register("numero", { required: true })} type="text" autoComplete="off"
                    className={`${errors.numero && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.numero && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="email" className="ml-2 mb-1">Correo electronico</label>
                <input id="email" {...register("email", { required: true })} type="text" autoComplete="off"
                    className={`${errors.email && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.email && <InputWarning />}
            </div>
        </div>
    )
}

export default FirstStep;
