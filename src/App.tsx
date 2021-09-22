import { useState } from 'react';
import { FirstStep, SecondStep, ThirdStep, FourthStep } from 'components';
import { ModeSwitcher } from 'components/shared';
import { useForm } from 'react-hook-form';
import { BiBadgeCheck } from 'react-icons/bi';
import { Transition } from '@headlessui/react';

function App() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<any>({});
    const [complete, setComplete] = useState<boolean>(false);
    const { register, control, handleSubmit, unregister, reset, formState, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: any) => {
        scrollToTop();
        if (step <= 4) {
            const obj = step === 3 ? 'representanteLegal' : step === 4 ? 'beneficiario' : 'usuario';
            setFormData({ ...formData, [obj]: { ...formData[obj], ...data } });
            setStep(step + 1);
            setComplete(step === 4);
        }
    };
    
    const stepHandler = (backwards?: boolean) => {
        backwards ? setStep(step - 1) : setStep(step + 1);
        scrollToTop();
    };

    const stepRenderer = () => {
        const props = { register, control, errors, unregister };
        switch (step) {
            case 1: return <FirstStep data={formData?.usuario} {...props} />;
            case 2: return <SecondStep data={formData?.usuario} {...props} />;
            case 3: return <ThirdStep data={formData?.representanteLegal} {...props} />;
            case 4: return <FourthStep data={formData?.beneficiario} {...props} />;
            default: return <FirstStep data={formData?.usuario} {...props} />;
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const restart = () => {
        reset();
        setComplete(false);
        setFormData({});
        setStep(1);
    }
    
    const CompleteCard = () => {
        return (
            <Transition show={true} as="div" className="flex flex-col w-full sm:w-2/3 self-center"
                enter="transition-opacity duration-300" enterFrom="opacity-0" enterTo="opacity-100"
                leave="transition-opacity duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                <button onClick={() => restart()}
                className="bg-gray-300 my-2 p-2 w-1/2 self-center rounded-2xl">
                    Volver a llenar
                </button>

                <div className="bg-green-700 bg-opacity-50 rounded-3xl p-6">
                    <div className="flex justify-between">
                        <div className="w-2/3">
                            <h2 className="text-4xl text-white font-bold">Listo!</h2>
                            <h3 className="text-lg text-white font-medium leading-5">Estaremos revisando tu solicitud para brindarte informacion en las proximas 24 horas</h3>
                        </div>
                        <p className="text-6xl text-white p-4">
                            <BiBadgeCheck />
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white bg-opacity-20 p-4 mt-6 overflow-x-scroll">
                        <pre className="text-xs">
                            rawdata: {JSON.stringify(formData, null, 2)}
                        </pre>
                    </div>
                </div>
            </Transition>
        )
    };

    return (
        <section className="relative flex flex-col w-screen min-h-screen bg-gray-50 dark:bg-gray-700 items-center">
            <div className="z-10 sticky top-0 bg-yellow-500 bg-opacity-90 dark:bg-gray-800 w-full sm:w-1/2 sm:rounded-b-4xl p-4 sm:p-2">
                <h1 className="text-4xl font-semibold text-center text-white">
                    Formulario KredFeed
                </h1>
            </div>
            <div className="z-10 sticky right-0 top-20 py-6 bg-gray-200 dark:bg-gray-600 rounded-tl-2xl rounded-bl-2xl flex justify-center items-center self-end">
                <div className="transform -rotate-90">
                    <ModeSwitcher />
                </div>
            </div>
            <div className="flex flex-col w-full sm:w-2/3 px-6 pb-20">
                {!complete ? <>
                    <form id="form" onSubmit={handleSubmit(onSubmit)} className="my-6">
                        {stepRenderer()}
                    </form>
                    {(!formState.isValid && Object.keys(errors).length > 0) && <p className="ml-2 mb-4 text-xs font-semibold text-red-500">
                        Para pasar al siguiente paso es necesario llenar los campos indicados
                    </p>}
                    <div className={`flex ${step > 1 ? 'justify-between gap-5' : 'justify-end'}`}>
                        {step > 1 && <button onClick={() => stepHandler(true)}
                            className="sm:w-1/4 self-center px-4 py-2 bg-gray-300 dark:bg-gray-800 dark:bg-opacity-80 btn hover:bg-gray-400 transition">
                            <p className="font-bold text-lg text-white dark:text-gray-400">Anterior</p>
                        </button>}

                        <button form="form" type="submit"
                            className="sm:w-1/2 self-center px-4 py-2 bg-yellow-400 dark:bg-gray-900 btn btn-animated hover:bg-yellow-500 active:bg-yellow-200">
                            <p className="font-bold text-lg text-white dark:text-gray-400">{step < 4 ? `Siguiente paso ${step}/4` : 'Submit'}</p>
                        </button>
                    </div>
                </> : <CompleteCard />}
            </div>
        </section>
    );
}

export default App;
