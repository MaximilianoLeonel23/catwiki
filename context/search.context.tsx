'use client';
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext<SearchContext | null>(null);

interface SearchContext {
	openSearcher: boolean;
	setOpenSearcher: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useSearchContext = () => {
	const context = useContext(SearchContext);
	if (!context) throw new Error('El contexto debe iniciarse con el provider');
	return context;
};

interface Props {
	children: React.ReactNode;
}

export const SearchProvider = ({ children }: Props) => {
	const [openSearcher, setOpenSearcher] = useState<boolean>(false);

	return (
		<SearchContext.Provider value={{ openSearcher, setOpenSearcher }}>
			{children}
		</SearchContext.Provider>
	);
};
