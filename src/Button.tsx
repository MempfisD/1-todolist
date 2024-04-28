type ButtonPropsType = {
	title: string
}

export const Button = ({ title }: ButtonPropsType) => {
	return (
		<button>
			<span>{title}</span>
		</button>
	)
}
