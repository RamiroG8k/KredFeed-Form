import { TiWarningOutline } from 'react-icons/ti';

const InputWarning = ({ text }: { text?: string }) => {
    return (
        <div className="text-red-400 dark:text-red-500">
            <p className="absolute text-2xl right-3 bottom-9">
                <TiWarningOutline />
            </p>
            <span className="ml-2 mt-1 text-xs">{text ?? 'Este campo es requerido'}</span>
        </div>
    );
};

export default InputWarning;
