import styled from 'styled-components';

export interface ICard {
	image: string;
	link1: string;
	link2?: string;
	title: string;
	chairId?: string;
}

const Card = ({ image, link1, link2, title, chairId = 'C18' }: ICard) => {
	return (
		<Container>
			<img src={image} alt={title} />
			<h1>
				<span>{chairId}</span> {title}
			</h1>
		</Container>
	);
};

const Container = styled.article`
	background-color: white;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-height: 20rem;

	img {
		width: 100%;
		border-radius: var(--radius);
		margin-bottom: 1.5rem;
		object-fit: cover;
	}
`;

export default Card;
