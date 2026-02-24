import React, { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplyLoadingOverlay from './ApplyLoadingOverlay';

interface ApplyLoadingContextType {
    startTransition: (to: string) => void;
}

const ApplyLoadingContext = createContext<ApplyLoadingContextType | undefined>(undefined);

export const ApplyLoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const startTransition = useCallback((to: string) => {
        setIsLoading(true);

        const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdSGT_1I65eDMOIj6wZ4VxFuuT4tpyBI7wCOiZvFfxd8FUg1g/viewform?usp=header";

        // After 2 seconds, trigger navigation or redirect
        setTimeout(() => {
            if (to === "/apply") {
                window.location.href = GOOGLE_FORM_URL;
            } else {
                navigate(to);
                // After 3 seconds, hide overlay (only for internal navigation)
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            }
        }, 2000);
    }, [navigate]);

    return (
        <ApplyLoadingContext.Provider value={{ startTransition }}>
            {children}
            {isLoading && <ApplyLoadingOverlay />}
        </ApplyLoadingContext.Provider>
    );
};

export const useApplyTransition = () => {
    const context = useContext(ApplyLoadingContext);
    if (!context) {
        throw new Error('useApplyTransition must be used within an ApplyLoadingProvider');
    }
    return context;
};
