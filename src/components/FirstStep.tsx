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
                <label htmlFor="razonSocial" className="ml-2 mb-1">Razon social</label>
                <input id="razonSocial" {...register("razonSocial", { required: true })} type="text" autoComplete="off"
                    className={`${errors.razonSocial && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.razonSocial && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="nombreComercial" className="ml-2 mb-1">Nombre comercial</label>
                <input id="nombreComercial" {...register("nombreComercial", { required: true })} type="text" autoComplete="off"
                    className={`${errors.nombreComercial && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.nombreComercial && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="nacionalidad" className="ml-2 mb-1">Nacionalidad</label>
                <input id="nacionalidad" {...register("nacionalidad", { required: true })} type="text" autoComplete="off"
                    className={`${errors.nacionalidad && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.nacionalidad && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="fechaConstitucion" className="ml-2 mb-1">Fecha de Constitucion</label>

                <Controller control={control} name="fechaConstitucion" defaultValue={null} rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <DatePicker onChange={onChange} onBlur={onBlur} selected={value}
                            dateFormat="dd, MMM yyyy" wrapperClassName="w-full" maxDate={new Date()}
                            className={`${errors.fechaConstitucion && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />)} />
                {errors.fechaConstitucion && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="fechaInicioOperaciones" className="ml-2 mb-1">Fecha de Inicio de Operaciones</label>
                <Controller control={control} name="fechaInicioOperaciones" defaultValue={null} rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <DatePicker onChange={onChange} onBlur={onBlur} selected={value}
                            dateFormat="dd, MMM yyyy" wrapperClassName="w-full" maxDate={new Date()}
                            className={`${errors.fechaInicioOperaciones && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />)} />
                {errors.fechaInicioOperaciones && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="rfc" className="ml-2 mb-1">RFC</label>
                <input id="rfc" {...register("rfc", { required: true, maxLength: 13 })} type="text" autoComplete="off"
                    className={`${errors.rfc && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.rfc && <InputWarning text="No debe ser mayor a 13 Caracteres" />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="regimenFiscal" className="ml-2 mb-1">Regimen Fiscal</label>
                <input id="regimenFiscal" {...register("regimenFiscal", { required: true })} type="text" autoComplete="off"
                    className={`${errors.regimenFiscal && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.regimenFiscal && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="industria" className="ml-2 mb-1">Industria</label>
                <input id="industria" {...register("industria", { required: true })} type="text" autoComplete="off"
                    className={`${errors.industria && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.industria && <InputWarning />}
            </div>
        </div>
    )
}

export default FirstStep;
