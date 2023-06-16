import { revalidatePath } from 'next/cache';

const todos: string[] = [
	'Learn React Router Dom',
	'Learn React Redux',
	'Learn React Hooks',
	'Learn React Testing Library',
	'Learn React Typescript',
	'Learn React Query',
	'Learn Next.js',
];

export default function formPost() {
	const addTodo = async (data: FormData): Promise<void> => {
		'use server';
		const todo = data.get('todo') as string;
		todos.push(todo);
		revalidatePath('/formPost');
	};

	return (
		<main className='px-24'>
			<div className='text-4xl font-bold mb-4'>Todos</div>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
			<form action={addTodo}>
				<input
					type='text'
					name='todo'
					placeholder='Enter your todo'
					className='my-2 p-2 text-gray-700 bg-gray-200 rounded-sm border-0 focus:outline-none'
				/>
				<button className='bg-blue-500 rounded-sm p-2'>Submit</button>
			</form>
		</main>
	);
}
