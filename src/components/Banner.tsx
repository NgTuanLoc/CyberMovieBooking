import styled from 'styled-components';
import { IMovieBanner } from '../@types';

const Banner = ({ hinhAnh }: IMovieBanner) => {
	return <Container src={hinhAnh} alt='banner' />;
};

const Container = styled.img`
	width: 100%;
	height: 100vh;
	object-fit: cover;
`;

export default Banner;
