import PokemonList from './PokemonList';

export default function PokemonSearch() {
	const search = async (search: string) => {
		'use server';

		const pokemonRes = await fetch(
			'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
		);

		const pokemonData = await pokemonRes.json();

		return pokemonData.results
			.filter((pokemon: { name: string }) =>
				pokemon.name.toLowerCase().includes(search.toLowerCase()),
			)
			.map((pokemon: { name: string }) => pokemon.name)
			.slice(0, 50);
	};

	return (
		<main className='px-24'>
			<PokemonList search={search} />
		</main>
	)
}
