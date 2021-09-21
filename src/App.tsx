import { useState } from 'react';
import { FirstStep, SecondStep, ThirdStep, FourthStep } from 'components';
import { ModeSwitcher } from 'components/shared';
import { useForm } from 'react-hook-form';

function App() {
    const [step, setStep] = useState(1);
    const { register, control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data.fechaConstitucion.toISOString().split('T')[0]);
    };

    const stepHandler = (backwards?: boolean) => {
        backwards ? setStep(step - 1) : setStep(step + 1);
    };

    const stepRenderer = () => {
        switch (step) {
            case 1:
                return <FirstStep register={register} errors={errors} control={control} />;

            case 2:
                return <SecondStep register={register} errors={errors} control={control} />;

            case 3:
                return <ThirdStep register={register} errors={errors} control={control} />;

            case 4:
                return <FourthStep register={register} errors={errors} control={control} />;

            default:
                return <FirstStep register={register} errors={errors} control={control} />;
        }
    };

    return (
        <section className="flex flex-col h-screen w-screen bg-gray-50 dark:bg-gray-700 justify-center items-center">
            <div className="z-10 absolute right-0 top-20 py-6 bg-gray-200 dark:bg-gray-600 rounded-tl-2xl rounded-bl-2xl flex justify-center items-center">
                <div className="transform -rotate-90">
                    <ModeSwitcher />
                </div>
            </div>
            <div className="flex flex-col w-full sm:w-2/3 p-6">
                <h1 className="text-4xl font-semibold text-center">
                    Formulario KredFeed
                </h1>
                <form id="form" onSubmit={handleSubmit(onSubmit)} className="my-6">
                    {stepRenderer()}
                    {/* <FirstStep register={register} errors={errors} control={control} /> */}
                    {/* <SecondStep register={register} errors={errors} control={control}/>
                    <ThirdStep register={register} errors={errors} control={control}/>
                    <FourthStep register={register} errors={errors} control={control}/> */}
                </form>
                <div className={`flex ${step > 1 ? 'justify-between gap-5' : 'justify-end'}`}>
                    {step > 1 && <button onClick={() => stepHandler(true)}
                        className="sm:w-1/4 self-center px-4 py-2 bg-gray-200 dark:bg-gray-800 dark:bg-opacity-80 btn btn-animated hover:bg-gray-300">
                        <p className="font-bold text-lg text-white dark:text-gray-400">Anterior</p>
                    </button>}

                    <button form="form" type="submit" onClick={() => stepHandler()}
                        className="sm:w-1/2 self-center px-4 py-2 bg-yellow-400 dark:bg-gray-900 btn btn-animated hover:bg-yellow-500 active:bg-yellow-200">
                        <p className="font-bold text-lg text-white dark:text-gray-400">{step < 4 ? `Siguiente paso ${step}/4` : 'Submit'}</p>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default App;
