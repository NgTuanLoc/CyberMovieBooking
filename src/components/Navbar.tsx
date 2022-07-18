import { RiMovieLine } from 'react-icons/ri';
import styled from 'styled-components';

import Button from './Button';

const Navbar = () => {
	return (
		<Container>
			<ButtonContainer>
				<Icon>
					<RiMovieLine />
				</Icon>
				<Button text='Home' />
				<Button text='News' />
				<Button text='Content' />
				<Button text='Admin' />
			</ButtonContainer>
			<ButtonContainer>
				<Button text='Hello User' />
			</ButtonContainer>
		</Container>
	);
};

const Container = styled.nav`
	display: block;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #343a40;
	padding: 1rem 2rem;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	button {
		margin-inline: 2rem;
	}
`;

const Icon = styled.div`
	cursor: pointer;
	font-size: 5rem;
	color: red;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Navbar;
