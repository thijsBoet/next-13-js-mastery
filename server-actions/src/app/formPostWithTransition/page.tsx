import { revalidatePath } from 'next/cache';
import AddButton from './AddButton';

const todos: string[] = [
	'Learn React Router Dom',
	'Learn React Redux',
	'Learn React Hooks',
	'Learn React Testing Library',
	'Learn React Typescript',
	'Learn React Query',
	'Learn Next.js',
];

export default function formPostWithTransition() {
	const addTodo = async (todo: string): Promise<void> => {
    'use server';
    
    await new Promise(resolve => setTimeout(resolve, 1000));

		todos.push(todo);
		revalidatePath('/formPostWithTransition');
	};

	return (
		<main className='px-24'>
			<div className='text-4xl font-bold mb-4'>Todos</div>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
			<div>
				<AddButton addTodo={addTodo}/>
			</div>
		</main>
	);
}
