import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Dropzone, InputWarning } from 'components/shared';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

const FirstStep = (props: any) => {
    const [file, setFile] = useState<any>();
    const { register, control, errors } = props;
    // console.log(Object.values(errors).length);

    const fileHandler = (multiple: boolean, input: any) => {
        setFile(input.files[0].name);
        return multiple ? input.files : input.files[0];
    };

    const DropzoneField = (props: any) => {
        const { name, multiple = false, ...rest } = props;

        return (
            <Controller name={name} control={control} defaultValue={null} rules={{ required: true }}
                render={({ field: { onChange } }) => (
                    <Dropzone multiple={multiple} {...rest}
                        onChange={(e: any) => onChange(fileHandler(multiple, e.target))} />
                )} />
        )
    }
    return (
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-4">
            <div className="flex flex-col relative">
                <label htmlFor="nombreRepresentante" className="ml-2 mb-1">Nombre</label>
                <input id="nombreRepresentante" {...register("nombreRepresentante", { required: true })} type="text" autoComplete="off"
                    className={`${errors.nombreRepresentante && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.nombreRepresentante && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="genero" className="ml-2 mb-1">Genero</label>
                <input id="genero" {...register("genero", { required: true })} type="text" autoComplete="off"
                    className={`${errors.genero && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.genero && <InputWarning />}
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
                <label htmlFor="estadoNacimiento" className="ml-2 mb-1">Entidad federativa de nacimiento</label>
                <input id="estadoNacimiento" {...register("estadoNacimiento", { required: true })} type="text" autoComplete="off"
                    className={`${errors.estadoNacimiento && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.estadoNacimiento && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="paisNacimiento" className="ml-2 mb-1">Pais de nacimiendo</label>
                <input id="paisNacimiento" {...register("paisNacimiento", { required: true })} type="text" autoComplete="off"
                    className={`${errors.paisNacimiento && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.paisNacimiento && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="nacionalidad" className="ml-2 mb-1">Nacionalidad</label>
                <input id="nacionalidad" {...register("nacionalidad", { required: true })} type="text" autoComplete="off"
                    className={`${errors.nacionalidad && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.nacionalidad && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="curp" className="ml-2 mb-1">CURP</label>
                <input id="curp" {...register("curp", { required: true, maxLength: 13 })} type="text" autoComplete="off"
                    className={`${errors.curp && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.curp && <InputWarning text="No debe ser mayor a 13 Caracteres" />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="rfc" className="ml-2 mb-1">RFC</label>
                <input id="rfc" {...register("rfc", { required: true, maxLength: 13 })} type="text" autoComplete="off"
                    className={`${errors.rfc && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.rfc && <InputWarning text="No debe ser mayor a 13 Caracteres" />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="domicilio" className="ml-2 mb-1">Domicilio particular</label>
                <input id="domicilio" {...register("domicilio", { required: true })} type="text" autoComplete="off"
                    className={`${errors.domicilio && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.domicilio && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="estadoCivil" className="ml-2 mb-1">Estado civil</label>
                <input id="estadoCivil" {...register("estadoCivil", { required: true })} type="text" autoComplete="off"
                    className={`${errors.estadoCivil && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.estadoCivil && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="email" className="ml-2 mb-1">Correo electronico</label>
                <input id="email" {...register("email", { required: true })} type="text" autoComplete="off"
                    className={`${errors.email && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.email && <InputWarning />}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="numero" className="ml-2 mb-1">Telefono</label>
                <input id="numero" {...register("numero", { required: true })} type="text" autoComplete="off"
                    className={`${errors.numero && 'border-2 border-red-400 dark:border-red-600'} input bg-yellow-500 bg-opacity-20 dark:bg-gray-600`} />
                {errors.numero && <InputWarning />}
            </div>
            <div className="flex flex-col relative col-span-2 sm:col-span-1">
                <label htmlFor="documentoIdentificacion" className="ml-2 mb-1">Documento de identificacion</label>
                <DropzoneField name="documentoIdentificacion" />
                {file && <p className="ml-6 mt-2 text-sm list-item">{file}</p>}
                {errors.documentoIdentificacion && <InputWarning />}
            </div>
        </div>
    )
}

export default FirstStep;
