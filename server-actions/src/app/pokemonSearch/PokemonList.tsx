'use client';
import { useState, useEffect } from 'react';

const PokemonList = ({
	search,
}: {
	search: (search: string) => Promise<string[]>;
}) => {
	const [pokemonNames, setPokemonNames] = useState<string[]>([]);
	const [searchString, setSearchString] = useState<string>('');

	useEffect(() => {
		search('').then((names) => setPokemonNames(names));
	}, [search]);

	const searchHandler = async () => {
		setPokemonNames(await search(searchString));
	};

	return (
		<div>
			<div className='flex gap-2'>
				<input
					type='text'
					value={searchString}
					onChange={(e) => setSearchString(e.target.value)}
					className='border border-gray-300 rounded text-black px-3'
				/>
				<button
					className='bg-blue-600 disabled:bg-gray-500 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white'
					onClick={searchHandler}>
					Search
				</button>
			</div>
			<div className='text-4xl py-5'>
				Names: {pokemonNames.join(', ')}
			</div>
		</div>
	);
};

export default PokemonList;
