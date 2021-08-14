import { useState } from 'react'
import { Switch } from '@headlessui/react'

const ModeSwitcher = (props: any) => {
    const { onSwitch, className } = props;
    const [enabled, setEnabled] = useState(false);

    const handleSwitch = (state: boolean) => {
        setEnabled(state);
        onSwitch(state);
    };

    return (
        <Switch.Group>
            <div className={`${className} flex items-center`}>
                <Switch.Label className="mr-4">Enable {enabled ? 'Light' : 'Dark'} Mode</Switch.Label>
                <Switch checked={enabled} onChange={handleSwitch}
                    className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                        } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                    <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
                </Switch>
            </div>
        </Switch.Group>
    )
};

export default ModeSwitcher;