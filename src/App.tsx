import { ModeSwitcher } from 'components/shared';
import { useForm } from 'react-hook-form';

function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: Array<any>) => {
        console.log(data);
    };

    return (
        <section className="flex flex-col h-screen w-screen bg-gray-50 dark:bg-gray-700 justify-center items-center">

            <section className="flex flex-col w-full sm:w-1/2 p-4">
                <h1 className="text-4xl font-semibold text-center">
                    Formulario
                </h1>

                <form id="form" onSubmit={handleSubmit(onSubmit)} className="my-6">
                    <div className="space-y-3 mb-4">
                        <div>
                            <input {...register("email", { required: true })} className="input bg-yellow-500 bg-opacity-20 dark:bg-gray-600"
                                type="text" placeholder="Username" autoComplete="off" />
                            {errors.email && <span className="ml-2 text-xs text-red-400">Este campo es requerido</span>}
                        </div>
                        <div>
                            <input {...register("password", { required: true })} className="input bg-yellow-500 bg-opacity-20 dark:bg-gray-600"
                                type="password" placeholder="Password" autoComplete="off" />
                            {errors.password && <span className="ml-2 text-xs text-red-400">Este campo es requerido</span>}
                        </div>
                    </div>
                </form>

                <button form="form" type="submit" 
                className="px-4 py-2 bg-yellow-400 dark:bg-gray-900 btn btn-animated hover:bg-yellow-500 active:bg-yellow-200">
                    <p className="font-bold text-lg text-white dark:text-gray-400">Submit</p>
                </button>

            </section>
            <ModeSwitcher />
        </section>
    );
}

export default App;
