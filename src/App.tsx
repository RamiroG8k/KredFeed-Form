import { ModeSwitcher } from 'components/shared';

function App() {
    return (
        <section className="flex flex-col h-screen w-screen bg-gray-200 dark:bg-gray-700 justify-center items-center">
            <div className="text-center">
                <h1 className="text-5xl font-semibold text-gray-400">Tailwind x React</h1>
                <h2 className="dark:text-gray-900"><a className="text-gray-500 dark:text-gray-300 font-semibold"
                    href="https://github.com/RamiroG8k" target="_blank" rel="noreferrer">RamiroG8k</a> template</h2>
            </div>

            <ModeSwitcher />
        </section>
    );
}

export default App;
