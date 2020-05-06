import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = (key, initialValue) => {
	const [value, setValue] = useLocalStorage(key, initialValue);

	useEffect(() => {
		const body = document.querySelector('body');
		if (value) {
			body.classList.add('dark-mode');
		}
		else {
			body.classList.remove('dark-mode');
		}

	}, [value]);

	return [value, setValue];
}
