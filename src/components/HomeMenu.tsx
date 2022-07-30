import { useState } from 'react';
import styled from 'styled-components';
import { CinemaBrand } from '../@types';
import { useAppSelector } from '../app/hooks';
import moment from 'moment';

const HomeMenu = () => {
	const { cinemaSchedule, isLoading } = useAppSelector((store) => store.cinema);
	const [movieAddress, setMovieAddress] = useState(0);
	const [movieSchedule, setMovieSchedule] = useState(0);

	if (isLoading) {
		return <h1>Loading ...</h1>;
	}

	console.log(movieSchedule);
	console.log(cinemaSchedule);
	console.log(isLoading);

	return (
		<Container>
			<div className='item cinema'>
				{cinemaSchedule.map((item, id) => {
					const { logo, maHeThongRap, tenHeThongRap } = item;
					return (
						<div
							onClick={() => setMovieAddress(id)}
							key={maHeThongRap}
							className='logo'>
							<img src={logo} alt={tenHeThongRap} />
						</div>
					);
				})}
			</div>
			<div className='item cinema-address'>
				{cinemaSchedule[movieAddress].lstCumRap.map((item, id) => {
					const { maCumRap, tenCumRap, hinhAnh, diaChi } = item;
					return (
						<div
							onClick={() => setMovieSchedule(id)}
							className='cinema-address__item'
							key={maCumRap}>
							<img src={hinhAnh} alt={diaChi} />
							<div>
								<h4>{tenCumRap}</h4>
								<p>{diaChi}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className='item schedule'>
				{cinemaSchedule[movieAddress].lstCumRap[movieSchedule].danhSachPhim.map(
					(item) => {
						const { hinhAnh, maPhim, tenPhim, lstLichChieuTheoPhim } = item;

						return (
							<div key={maPhim} className=''>
								<div className='movie-info'>
									<img src={hinhAnh} alt={tenPhim} />
									<h5>{tenPhim}</h5>
								</div>
								<div className='schedule'>
									{lstLichChieuTheoPhim.map((item) => {
										const { maLichChieu, ngayChieuGioChieu } = item;

										const time = moment(ngayChieuGioChieu).format('LT');

										return <div key={maLichChieu}>{time}</div>;
									})}
								</div>
							</div>
						);
					}
				)}
			</div>
		</Container>
	);
};

const Container = styled.section`
	overflow-y: scroll;
	height: 70rem;
	background-color: blue;
	width: 90vw;
	margin: 5rem auto;
	display: grid;
	gap: 2rem;
	grid-template-columns: 10rem 40rem 1fr;

	.cinema {
		cursor: pointer;
		.img {
			width: 100%;
		}
	}

	.cinema-address {
		.cinema-address__item {
			cursor: pointer;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
`;

export default HomeMenu;
