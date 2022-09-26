import { React, useState } from "react";

const Home = () => {
	const [todoList, setTodoList] = useState([]);
	const [form, setForm] = useState({
		todo: "",
		status: false,
	});

	const resetInput = () => {
		setForm({
			todo: "",
			status: false,
		});
	};

	const handleChange = (e) => {
		setForm({
			...form,
			todo: e.target.value,
			status: false,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (form.index || form.index === 0) {
			const newTodo = todoList.map((e, i) => {
				if (i === form.index) {
					return form;
				} else {
					return e;
				}
			});
			setTodoList(newTodo);
		} else {
			setTodoList([...todoList, form]);
		}
		resetInput();
	};

	const handleCheck = (index) => {
		const newTodo = todoList.map((e, i) => {
			if (i === index) {
				return {
					todo: e.todo,
					status: true,
				};
			} else {
				return e;
			}
		});
		setTodoList(newTodo);
	};

	const handleDelete = (index) => {
		const newTodo = todoList.filter((e, i) => {
			if (i !== index) {
				return e;
			}
		});
		setTodoList(newTodo);
	};

	const handleEdit = (index) => {
		const detailTodo = {
			index,
			...todoList[index],
		};
		setForm(detailTodo);
	};
	return (
		<div className="w-full">
			<div className="jumbotron">
				<h1 className="font-bold text-4xl mb-7 text-white">Todo List App</h1>
				{/* {JSON.stringify(form)} */}
				<form className="form" method="post" onSubmit={handleSubmit}>
					<input type="text" name="todo" value={form.todo} onChange={handleChange} placeholder="Todo.." />
					<button className="ml-4 font-semibold text-white btn-submit" type="submit">
						Submit
					</button>
				</form>
			</div>
			<div className="content">
				{todoList.map((e, i) => {
					return (
						<div key={i} className="card">
							<div className="action">
								<input type="checkbox" checked={e.status ? true : false} onChange={() => handleCheck(i)} />
							</div>
							<div className="text">{e.todo}</div>
							<div className="button-action">
								<button className="btn-edit font-semibold" onClick={() => handleEdit(i)}>
									Edit
								</button>
								<button className="btn-delete font-semibold" onClick={() => handleDelete(i)}>
									Delete
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
