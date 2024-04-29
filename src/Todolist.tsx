import { TaskType } from './App'
import { Button } from './Button'

type TodolistPropstype = {
	title: string
	tasks: Array<TaskType>
}

// * и самый распространенный способ, деструктуризация props
export const Todolist = ({ tasks, title }: TodolistPropstype) => {
	// * можно присвоить props переменной, олдскульный вариант
	// const tasks = props.tasks
	// const title = props.title

	// * современный способ, более современный
	// const { tasks, title } = props

	const tasksList: JSX.Element =
		tasks.length === 0 ? (
			<span>Your tasklist is emty</span>
		) : (
			<ul>
				{tasks.map(task => {
					return (
						<li key={task.id}>
							<input
								type='checkbox'
								checked={task.isDone}
							/>{' '}
							<span>{task.title}</span>
						</li>
					)
				})}
			</ul>
		)

	return (
		<div className='todoList'>
			<h3>{title}</h3>
			<div>
				<input />
				<Button title='+' />
			</div>
			{tasksList}
			<div>
				<Button title='All' />
				<Button title='Active' />
				<Button title='Completed' />
			</div>
		</div>
	)
}
