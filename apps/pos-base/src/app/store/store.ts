import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const initialState = {
    typesFiltered: [
        'DC',
        'EC',
        'FT',
        'PF',
        'FR',
        'FS',
        'GA',
        'GD',
        'NC',
        'OT',
        'GT',
        'GR',
        'RG',
    ],
    apiKey: null,
};

// define the store
const useStore = create(
    persist(
        (set) => ({
            // Docs Filters
            typesFiltered: [
                'DC',
                'EC',
                'FT',
                'PF',
                'FR',
                'FS',
                'GA',
                'GD',
                'NC',
                'OT',
                'GT',
                'GR',
                'RG',
            ],
            setTypesFiltered: (newTypesFiltered: string[]) => {
                set(() => ({
                    typesFiltered: [...newTypesFiltered],
                }));
            },
            // API KEY
            apiKey: null,
            setApiKey: (newApiKey: string) => {
                console.log('Setting new API KEY: ', newApiKey);
                set(() => ({
                    apiKey: newApiKey,
                }));
            },
            deleteApiKey: () => {
                set(() => ({
                    apiKey: null,
                }));
            },
            // Reset Store
            resetStore: () => {
                set(initialState);
            },
            // Printers
            foundPrinters: [],
            setFoundPrinters: (newFoundPrinters: any) => {
                console.log('Setting new Printers: ', newFoundPrinters);
                set(() => ({
                    foundPrinters: newFoundPrinters,
                }));
            },
            loadedConfiguredPrinter: true,
            setLoadedConfiguredPrinter: (
                newLoadedConfiguredPrinter: boolean
            ) => {
                set(() => ({
                    loadedConfiguredPrinter: newLoadedConfiguredPrinter,
                }));
            },
            loadedPrinters: true,
            setLoadedPrinters: (newLoadedPrinters: boolean) => {
                console.log('Setting new Loaded Printers: ', newLoadedPrinters);
                set(() => ({
                    loadedPrinters: newLoadedPrinters,
                }));
            },
            print: false,
            setStatusPrint: (newPrint: boolean) => {
                set(() => ({
                    print: newPrint,
                }));
            },
            configuredPrinter: {
                0: {
                    name: '',
                    host: '',
                    port: '',
                    status: false,
                },
            },
            setConfiguredPrinter: (newConfiguredPrinter: any) => {
                set(() => ({
                    configuredPrinter: newConfiguredPrinter,
                }));
            },
            // Other items in store...
        }),
        {
            name: 'pos-storage',
            storage: createJSONStorage(() => localStorage),
            // partialize: (state: any) => ({
            //     apiKey: state.apiKey,
            //     configuredPrinter: state.configuredPrinter,
            // }),
        }
    )
);

export default useStore;
