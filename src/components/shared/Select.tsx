import { useState } from 'react';
import { CgArrowsExchangeAltV, CgCheck } from 'react-icons/cg';
import { Listbox, Transition } from '@headlessui/react';

const Select = (props: any) => {
    const { grouped = false, data, onChange, defaultValue, buttonStyle, dropdownStyle, activeStyle, parentStyle } = props;
    const [selected, setSelected] = useState(defaultValue ?? null);

    const handleChange = (value: any) => {
        onChange(value);
        setSelected(value);
    };

    return (
        <Listbox value={selected} onChange={handleChange}>
            <div className={`${parentStyle} relative`}>
                <Listbox.Button className={`${buttonStyle} relative w-full py-2 pl-3 pr-10 text-left rounded-xl cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm`}>
                    <span className="block truncate text-md">{`${selected ?? 'Seleccionar tipo'}`}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <CgArrowsExchangeAltV />
                    </span>
                </Listbox.Button>
                <Transition as="div" leave="transition ease-in duration-100"
                    leaveFrom="opacity-100" leaveTo="opacity-0" >
                    <Listbox.Options className={`${dropdownStyle} absolute w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}>
                        {grouped ? data.map((e: any) => (
                            <div key={e.type}>
                                <p className="pl-2 bg-yellow-500 bg-opacity-50 dark:bg-gray-800">{e.type}</p>
                                {e.data.map((e: any, i: number) => (
                                    <Listbox.Option key={i} className={({ active }) =>
                                        `${active ? `${activeStyle}` : 'text-gray-900'} cursor-pointer select-none relative py-2 pl-10 pr-4`}
                                        value={e}>
                                        {({ selected, active }) => (
                                            <>
                                                <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
                                                    {e}
                                                </span>
                                                {selected ? (
                                                    <span className={`${active ? 'text-amber-600' : 'text-amber-600'} absolute inset-y-0 left-0 flex items-center pl-3`}>
                                                        <CgCheck />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </div>
                        )) : data.map((e: any, i: number) => (
                            <Listbox.Option key={i} className={({ active }) =>
                                `${active ? `${activeStyle}` : 'text-gray-900'} cursor-pointer select-none relative py-2 pl-10 pr-4`}
                                value={e}>
                                {({ selected, active }) => (
                                    <>
                                        <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
                                            {e}
                                        </span>
                                        {selected ? (
                                            <span className={`${active ? 'text-amber-600' : 'text-amber-600'} absolute inset-y-0 left-0 flex items-center pl-3`}>
                                                <CgCheck />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
};

export default Select;