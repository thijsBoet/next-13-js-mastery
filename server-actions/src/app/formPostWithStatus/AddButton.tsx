"use client"

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const AddButton = () => {
  const {pending} = useFormStatus();
  return (
		<button disabled={pending} className='bg-blue-500 rounded-sm p-2'>
			Submit
		</button>
  );
}

export default AddButton