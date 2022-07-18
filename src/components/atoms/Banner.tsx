import styled from 'styled-components';
import { IMovieBanner } from '../../@types';

const Banner = ({ hinhAnh }: IMovieBanner) => {
	return (
		<Container>
			<img src={hinhAnh} alt={hinhAnh} />
		</Container>
	);
};

const Container = styled.img`
	width: 100%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export default Banner;
