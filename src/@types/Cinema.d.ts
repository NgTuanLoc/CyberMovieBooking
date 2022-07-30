interface CinemaBrand {
	maHeThongRap: string;
	tenHeThongRap: string;
	logo: string;
	lstCumRap: ListCinema[];
}

interface ListCinema {
	maCumRap: string;
	tenCumRap: string;
	hinhAnh: string;
	diaChi: string;
	danhSachPhim: MovieListInCinema[];
}

interface MovieListInCinema {
	hinhAnh: string;
	maPhim: number;
	tenPhim: string;
	dangChieu: boolean;
	lstLichChieuTheoPhim: CalenderMovie[];
}

interface CalenderMovie {
	maLichChieu: number;
	ngayChieuGioChieu: Date;
}

export { ListCinema, CinemaBrand, MovieListInCinema, CalenderMovie };
