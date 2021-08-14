import { ModeSwitcher } from 'components/shared';

function App() {
    const html = document.getElementsByTagName('html')[0];    

    const toggleDarkMode = () => {
        if (html.classList.contains('scheme-dark')) {
            html.classList.remove('scheme-dark');
        } else {
            html.classList.add('scheme-dark');
        }
    }

    return (
        <section className="flex flex-col h-screen w-screen bg-gray-700 justify-center items-center">
            <div className="text-center">
                <h1 className="text-5xl font-semibold text-gray-400">Tailwind x React</h1>
                <h2><a className="text-gray-500"
                    href="https://github.com/RamiroG8k" target="_blank" rel="noreferrer">RamiroG8k</a> template</h2>
            </div>

            <ModeSwitcher className="my-4" onSwitch={toggleDarkMode}/>
        </section>
    );
}

export default App;
