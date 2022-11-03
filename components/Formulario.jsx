import { useState } from "react";

const Formulario = ({ handleClick, handleClickDelete }) => {
	const [input, setInput] = useState('');

	const handleChange = (i) => {
		setInput(i.target.value);
	};
	const handSubmit = (e) => {
		e.preventDefault();
		handleClick(input);
		setInput('');
	};

	return (
		<>
			<form className='my-5' onSubmit={handSubmit}>
				<div className='mb-3'>
					<input
						type='text'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						placeholder='Tarea nueva...'
						onChange={handleChange}
						value={input}
					/>
				</div>
				<div className='row'>
					<div className='col-9'>
						<button
							type='submit'
							className='btn btn-primary  form-control'
						>
							Añadir tarea
						</button>
					</div>
					<div className='col-3'>
						<button
							className='btn btn-danger form-control'
							onClick={handleClickDelete}
						>
							Borrar completados
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default Formulario;
