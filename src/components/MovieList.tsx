import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import Card from './Card';
import styled from 'styled-components';
import { IMovie } from '../@types';

export interface MovieList {
	movieList: IMovie[];
}

const MovieList = ({ movieList }: MovieList) => {
	return (
		<Container>
			<Button>
				<GrFormPrevious />
			</Button>
			<Content>
				{movieList.map((movie) => {
					const { maPhim, tenPhim, trailer, hinhAnh } = movie;
					return (
						<Card
							key={maPhim}
							image={hinhAnh}
							link1={trailer}
							title={tenPhim}
						/>
					);
				})}
			</Content>
			<Button>
				<GrFormNext />
			</Button>
		</Container>
	);
};

const Container = styled.section`
	margin-top: 5rem;
	max-width: 90vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	border: none;
	background-color: transparent;
	font-size: 7rem;
	margin-inline: 1rem;
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

export default MovieList;
