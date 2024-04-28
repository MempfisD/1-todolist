import React from 'react'
import './App.css'
import { Todolist } from './Todolist'

// * C Create - создание
// * R Read - чтение
// * U Update - редактирование
// * D Delete - удаление

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

const App = () => {
	const todoListTitle = 'What to learn'
	const tasks: Array<TaskType> = [
		{ id: 1, title: 'HTML&CSS', isDone: true },
		{ id: 2, title: 'JS/TS', isDone: true },
		{ id: 3, title: 'React', isDone: false },
	]

	return (
		<div className='App'>
			<Todolist
				title={todoListTitle}
				tasks={tasks}
			/>
		</div>
	)
}

export default App
