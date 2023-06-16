import Link from 'next/link';

export default function Navbar() {
	return (
		<main className='p-24'>
			<div className='text-6xl font-bold mb-4'>
				Server Side Actions Next.js 13.4
			</div>
			<nav>
				<ul className='flex'>
					<li>
						<Link className='mr-1 hover:underline' href='/'>
							Home |
						</Link>
					</li>
					<li>
						<Link className='mr-1 hover:underline' href='/formPost'>
							{' '}
							Form Post |
						</Link>
					</li>
					<li>
						<Link
							className='mr-1 hover:underline'
							href='/formPostWithStatus'>
							Form Post With Status |
						</Link>
					</li>
					<li>
						<Link
							className='mr-1 hover:underline'
							href='/formPostWithTransition'>
							Form Post With Status |
						</Link>
					</li>
					<li>
						<Link
							className='mr-1 hover:underline'
							href='/pokemonSearch'>
							Pokemon Search
						</Link>
					</li>
				</ul>
			</nav>
		</main>
	);
}
