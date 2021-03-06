import { InputWarning, Select } from 'components/shared';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

const selectData = [
    {
        type: 'Fisica',
        data: [
            'Régimen de asalariados',
            'Régimen de actividades profesionales',
            'Régimen de arrendamiento de inmuebles',
            'Régimen de actividad empresarial',
            'Régimen de incorporación fiscal'
        ]
    }, {
        type: 'Moral',
        data: [
            'Régimen general',
            'Régimen de personas morales con fines no lucrativos',
        ]
    }
];

const FirstStep = (props: any) => {
    const { register, control, errors, data, unregister } = props;

    const calendarContainer = (props: any) => {
        const { children } = props;
        return <div className="z-20">{children}</div>
    };

    useEffect(() => {
        unregister();
    }, [unregister]);

    return (
        <>
            <div className="ml-2 my-4">
                <h2 className="text-4xl font-medium text-gray-700 dark:text-gray-500">
                    Informacion General
                </h2>
                <p className="text-gray-400 mb-2">Completa correctamente los campos para continuar con el siguiente paso</p>
                <div className="rounded-full border dark:border-gray-800 w-2/3" />
            </div>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-4">
                <div className="flex flex-col relative">
                    <label htmlFor="razonSocial" className="ml-2 mb-1">Razon social</label>
                    <input id="razonSocial" {...register("razonSocial", { required: true })} type="text" autoComplete="off" defaultValue={data?.razonSocial}
                        className={`${errors.razonSocial && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                    {errors.razonSocial && <InputWarning />}
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="nombreComercial" className="ml-2 mb-1">Nombre comercial</label>
                    <input id="nombreComercial" {...register("nombreComercial", { required: true })} type="text" autoComplete="off" defaultValue={data?.nombreComercial}
                        className={`${errors.nombreComercial && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                    {errors.nombreComercial && <InputWarning />}
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="rfc" className="ml-2 mb-1">RFC</label>
                    {/* TODO Evaluar correctamente */}
                    <input id="rfc" {...register("rfc", { required: true, maxLength: 13, minLength: 12 })} type="text" autoComplete="off" defaultValue={data?.rfc}
                        className={`${errors.rfc && 'border-2 border-red-400 dark:border-red-600'} input uppercase bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                    {errors.rfc && <InputWarning text="No debe ser mayor a 13 Caracteres" />}
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="regimenFiscal" className="ml-2 mb-1">Regimen Fiscal</label>
                    <Controller control={control} name="regimenFiscal" defaultValue={data?.regimenFiscal} rules={{ required: true }}
                        render={({ field: { onChange } }) => (
                            <Select grouped onChange={onChange} data={selectData} defaultValue={data?.regimenFiscal}
                                buttonStyle={`${errors.regimenFiscal ? 'border-2 border-red-400 dark:border-red-600' : ''} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`}
                                activeStyle="bg-yellow-100 dark:bg-gray-800"
                                dropdownStyle="bg-white dark:bg-gray-700 dark:text-gray-500"
                                parentStyle="z-10" />)} />
                    {errors.regimenFiscal && <InputWarning />}
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="nacionalidad" className="ml-2 mb-1">Nacionalidad</label>
                    <input id="nacionalidad" {...register("nacionalidad", { required: true })} type="text" autoComplete="off" defaultValue={data?.nacionalidad}
                        className={`${errors.nacionalidad && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                    {errors.nacionalidad && <InputWarning />}
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="industria" className="ml-2 mb-1">Industria</label>
                    <input id="industria" {...register("industria", { required: true })} type="text" autoComplete="off" defaultValue={data?.industria}
                        className={`${errors.industria && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                    {errors.industria && <InputWarning />}
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="fechaConstitucion" className="ml-2 mb-1">Fecha de Constitucion</label>
                    <Controller control={control} name="fechaConstitucion" defaultValue={data?.fechaConstitucion} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <DatePicker id="fechaConstitucion" onChange={onChange} onBlur={onBlur} selected={value}
                                dateFormat="dd, MMM yyyy" wrapperClassName="w-full" maxDate={new Date()} popperPlacement="top" popperContainer={calendarContainer}
                                className={`${errors.fechaConstitucion && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />)} />
                    {errors.fechaConstitucion && <InputWarning />}
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="fechaInicioOperaciones" className="ml-2 mb-1">Fecha de Inicio de Operaciones</label>
                    <Controller control={control} name="fechaInicioOperaciones" defaultValue={data?.fechaInicioOperaciones} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <DatePicker id="fechaInicioOperaciones" onChange={onChange} onBlur={onBlur} selected={value}
                                dateFormat="dd, MMM yyyy" wrapperClassName="w-full" maxDate={new Date()} popperPlacement="top" popperContainer={calendarContainer}
                                className={`${errors.fechaInicioOperaciones && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />)} />
                    {errors.fechaInicioOperaciones && <InputWarning />}
                </div>
            </div>
        </>
    )
}

export default FirstStep;
