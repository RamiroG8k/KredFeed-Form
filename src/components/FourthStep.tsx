import { InputWarning, Address, Select } from 'components/shared';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

const FirstStep = (props: any) => {
    const { register, control, errors, data, unregister } = props;
    // console.log(Object.values(errors).length);
    const calendarContainer = (props: any) => {
        const { children } = props;
        return <div className="z-20">{children}</div>
    };
    
    useEffect(() => {
        unregister();
    }, [unregister])

    return (
        <>
            <div className="ml-2 my-4">
                <h2 className="text-4xl font-medium text-gray-700 dark:text-gray-500">
                    Informacion bancaria
                </h2>
                <p className="text-gray-400 mb-2">Completa correctamente los campos bancarios para terminar con el formulario</p>
                <div className="rounded-full border dark:border-gray-800 w-2/3" />
            </div>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-4">
                <div className="flex flex-col relative">
                    <label htmlFor="banco" className="ml-2 mb-1">Banco</label>
                    <input id="banco" {...register("banco", { required: true })} type="text" autoComplete="off" defaultValue={data?.banco}
                        className={`${errors.banco && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                    {errors.banco && <InputWarning />}
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="clabe" className="ml-2 mb-1">CLABE</label>
                    <input id="clabe" {...register("clabe", { required: true, minLength: 18, maxLength: 18 })} type="number" autoComplete="off" defaultValue={data?.clabe}
                        className={`${errors.clabe && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                    {errors.clabe && <InputWarning text="Debe de estar formado por 18 digitos"/>}
                </div>
                <div className="col-span-2 ml-2">
                    <h3 className="my-1 font-medium text-gray-700 text-2xl">Beneficiario</h3>
                    <div className="border" />
                </div>
                <div className="flex flex-col relative col-span-2">
                    <label htmlFor="beneficiario" className="ml-2 mb-1">Nombre</label>
                    <input id="beneficiario" {...register("beneficiario", { required: true })} type="text" autoComplete="off" defaultValue={data?.beneficiario}
                        className={`${errors.beneficiario && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                    {errors.beneficiario && <InputWarning />}
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="fechaNacimientoBeneficiario" className="ml-2 mb-1">Fecha de nacimiento</label>
                    <Controller control={control} name="fechaNacimientoBeneficiario" defaultValue={data?.fechaNacimientoBeneficiario} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <DatePicker onChange={onChange} onBlur={onBlur} selected={value}
                                dateFormat="dd, MMM yyyy" wrapperClassName="w-full" maxDate={new Date()} popperPlacement="top" popperContainer={calendarContainer}
                                className={`${errors.fechaNacimientoBeneficiario && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />)} />
                    {errors.fechaNacimientoBeneficiario && <InputWarning />}
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="curp" className="ml-2 mb-1">CURP</label>
                    <input id="curp" {...register("curp", { required: true, minLength: 18, maxLength: 18 })} min="18" max="18" type="text" autoComplete="off" defaultValue={data?.curp}
                        className={`${errors.curp && 'border-2 border-red-400 dark:border-red-600'} input uppercase bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                    {errors.curp && <InputWarning text="Se conforma por 18 caracteres" />}
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="generoBeneficiario" className="ml-2 mb-1">Genero</label>
                    <Controller control={control} name="generoBeneficiario" defaultValue={data?.generoBeneficiario} rules={{ required: true }}
                        render={({ field: { onChange } }) => (
                            <Select onChange={onChange} data={['Femenino', 'Masculino']} defaultValue={data?.generoBeneficiario}
                                buttonStyle={`${errors.generoBeneficiario ? 'border-2 border-red-400 dark:border-red-600' : ''} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`}
                                activeStyle="bg-yellow-100 dark:bg-gray-800"
                                dropdownStyle="bg-white dark:bg-gray-700 dark:text-gray-500"
                                parentStyle="z-10" />)} />
                    {errors.generoBeneficiario && <InputWarning />}
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="telefonoBeneficiario" className="ml-2 mb-1">Numero de telefono</label>
                    <input id="telefonoBeneficiario" {...register("telefonoBeneficiario", { required: true })} type="number" autoComplete="off" defaultValue={data?.telefonoBeneficiario}
                        className={`${errors.telefonoBeneficiario && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                    {errors.telefonoBeneficiario && <InputWarning />}
                </div>
                <div className="flex flex-col relative col-span-2">
                    <label htmlFor="emailBeneficiario" className="ml-2 mb-1">Correo electronico</label>
                    <input id="emailBeneficiario" {...register("emailBeneficiario", { required: true })} type="emailBeneficiario" autoComplete="off" defaultValue={data?.emailBeneficiario}
                        className={`${errors.emailBeneficiario && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                    {errors.emailBeneficiario && <InputWarning />}
                </div>
                <div className="col-span-2 ml-2">
                    <h3 className="my-1 font-medium text-gray-700 text-2xl">Domicilio</h3>
                    <div className="border" />
                </div>
                <Address data={data} register={register} control={control} errors={errors} noun="R" />
            </div>
        </>
    )
}

export default FirstStep;
