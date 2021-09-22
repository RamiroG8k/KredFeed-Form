import { Address, Dropzone, InputWarning } from 'components/shared';
import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

const SecondStep = (props: any) => {
    const [file, setFile] = useState<any>();
    const { register, control, errors, data, unregister } = props;
    // console.log(Object.values(errors).length);
    useEffect(() => {
        unregister();
    }, [unregister]);

    const fileHandler = (multiple: boolean, input: any) => {
        setFile(input.files[0].name);
        return multiple ? input.files : input.files[0];
    };

    const DropzoneField = (props: any) => {
        const { name, multiple = false, ...rest } = props;

        return (
            <Controller name={name} control={control} defaultValue={data?.comprobanteDomicilio} rules={{ required: true }}
                render={({ field: { onChange } }) => (
                    <Dropzone multiple={multiple} {...rest}
                        onChange={(e: any) => onChange(fileHandler(multiple, e.target))} />
                )} />
        )
    }

    return (
        <>
            <div className="ml-2 my-4">
                <h2 className="text-4xl font-medium text-gray-700 dark:text-gray-500">
                    Registro de Domicilio particular
                </h2>
                <p className="text-gray-400 mb-2">Completa correctamente los campos de domicilio para continuar con el tercer paso</p>
                <div className="rounded-full border dark:border-gray-800 w-2/3" />
            </div>

            <div className="grid lg:grid-cols-2 gap-2 lg:gap-4">
                <Address data={data} register={register} control={control} errors={errors} />
                <div className="flex flex-col relative col-span-2 sm:col-span-1">
                    <label htmlFor="comprobanteDomicilio" className="ml-2 mb-1">Comprobante domicilio</label>
                    <DropzoneField name="comprobanteDomicilio" />
                    {(file || data?.comprobanteDomicilio) && <p className="ml-6 mt-2 text-sm list-item">{file || data?.comprobanteDomicilio.name}</p>}
                    {errors.comprobanteDomicilio && <InputWarning />}
                </div>
                <div className="flex flex-col relative col-span-2 sm:col-span-1">
                    <label htmlFor="telefono" className="ml-2 mb-1">Numero telefonico</label>
                    <input id="telefono" {...register("telefono", { required: true, minLength: 10, maxLength: 14 })} min={10} type="number" autoComplete="off" defaultValue={data?.telefono}
                        className={`${errors.telefono && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                    {errors.telefono && <InputWarning text="Debe contener por lo menos 10 digitos" />}
                </div>
                <div className="flex flex-col col-span-2 relative">
                    <label htmlFor="email" className="ml-2 mb-1">Correo electronico</label>
                    <input id="email" {...register("email", { required: true })} type="email" autoComplete="off" defaultValue={data?.email}
                        className={`${errors.email && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                    {errors.email && <InputWarning />}
                </div>
            </div>
        </>
    )
}

export default SecondStep;
