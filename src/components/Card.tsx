import styled from 'styled-components';
import { BsPlayCircle } from 'react-icons/bs';

import { useAppDispatch } from '../app/hooks';
import { showTrailer } from '../features/Movies/movieSlice';

export interface ICard {
	image: string;
	link1: string;
	link2?: number;
	title: string;
	chairId?: string;
}

const Card = ({ image, link1, link2, title, chairId = 'C18' }: ICard) => {
	const dispatch = useAppDispatch();

	return (
		<Container>
			<div className='wrapper'>
				<img src={image} alt={title} />
				<div
					className='show-trailer'
					onClick={() => dispatch(showTrailer(link1))}>
					<BsPlayCircle />
				</div>
				<div className='info'>
					<h3 className='chair-id'>{chairId}</h3>
					<h3>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</h3>
					<div className='booking'>Booking Now !</div>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.article`
	max-height: 50rem;
	padding: 2rem 1rem;
	position: relative;
	margin: 1.5rem 1rem;
	box-shadow: var(--light-shadow);
	border-radius: var(--radius);
	background-color: white;

	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
	}

	img {
		width: 100%;
		height: 40rem;
		border-radius: var(--radius);
		margin-bottom: 1.5rem;
		object-fit: cover;
		object-position: top;
	}

	.show-trailer {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 40rem;
		background-image: linear-gradient(to top, #1f2937, rgba(31, 41, 55, 0));
		transition: var(--transition);
		opacity: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		svg {
			opacity: 0.7;
			font-size: 5rem;
		}
	}

	.info {
		width: 100%;
		display: flex;
		justify-content: left;
		align-items: center;
		flex-direction: row;
		position: relative;
		.chair-id {
			background-color: red;
			color: white;
			border-radius: var(--radius);
			padding: 0.3rem;
			margin-right: 2rem;
		}
	}

	.booking {
		font-size: 2rem;
		display: flex;
		justify-content: center;
		font-weight: bold;
		letter-spacing: var(--spacing);
		align-items: center;
		position: absolute;
		color: white;
		background-color: #fb4226;
		top: 0;
		left: 0;
		width: 100%;
		cursor: pointer;
		border-radius: var(--radius);
		height: 100%;
		transition: var(--transition);
		opacity: 0;
	}

	:hover .booking,
	:hover .show-trailer {
		opacity: 1;
	}

	:hover h3 {
		opacity: 0;
	}
`;

export default Card;
