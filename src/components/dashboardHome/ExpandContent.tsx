import React, { createContext, useState, ReactNode } from 'react';

interface ExpandContextProps {
    expandedId: string | null;
    setExpandedId: (id: string | null) => void;
}

const ExpandContext = createContext<ExpandContextProps | undefined>(undefined);

export const ExpandProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <ExpandContext.Provider value={{ expandedId, setExpandedId }}>
            {children}
        </ExpandContext.Provider>
    );
};

export const useExpandContext = () => {
    const context = React.useContext(ExpandContext);
    if (!context) {
        throw new Error('useExpandContext must be used within an ExpandProvider');
    }
    return context;
};
