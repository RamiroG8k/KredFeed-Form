import { useDropzone } from 'react-dropzone';

const Dropzone = (props: any) => {
    const { multiple = false, onChange, ...rest } = props;

    const { getRootProps, getInputProps } = useDropzone({ multiple, ...rest })

    return (
        <section className="flex">
            <div {...getRootProps()}
                className="flex w-full border-dashed border-2 bg-yellow-500 bg-opacity-20 dark:bg-gray-600 border-yellow-400 dark:border-gray-800 input cursor-pointer">
                <input {...getInputProps({ onChange })} />
                <p className="text-sm font-medium text-yellow-600 dark:text-gray-900">Arrastre su archivo aqui, click para selecionarlo</p>
            </div>
        </section>
    )
}

export default Dropzone;
