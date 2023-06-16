'use client';
import { startTransition, useRef, useTransition } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const AddButton = ({
	addTodo,
}: {
	addTodo: (todo: string) => Promise<void>;
  }) => {
  let [pending, startTransition] = useTransition();
	const todoRef = useRef<HTMLInputElement>(null);
	return (
		<>
			<input
				ref={todoRef}
				type='text'
				name='todo'
				placeholder='Enter your todo'
				className='my-2 p-2 text-gray-700 bg-gray-200 rounded-sm border-0 focus:outline-none'
			/>
			<button
				onClick={async () => {
					startTransition(async () => await addTodo(todoRef!.current!.value));
        }}
        disabled={pending}
				className='bg-blue-500 rounded-sm p-2'>
				Submit
			</button>
		</>
	);
};

export default AddButton;
