import styled from 'styled-components';

export interface IButton {
	text: string;
}

const Button = ({ text }: IButton) => {
	return <Container>{text}</Container>;
};

const Container = styled.button`
	cursor: pointer;
	font-size: 2rem;
	color: rgba(255, 255, 255, 0.75);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 2rem;
	border: none;
	background-color: transparent;
	transition: var(--transition);

	:hover {
		color: white;
	}
`;

export default Button;
