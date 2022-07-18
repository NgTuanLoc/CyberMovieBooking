export interface IMovieBanner {
	maBanner: number;
	maPhim: number;
	hinhAnh: string;
}

export interface IMovie {
	maPhim: number;
	tenPhim: string;
	biDanh: number;
	trailer: string;
	hinhAnh: string;
	moTa: string;
	maNhom: string;
	ngayKhoiChieu: string;
	danhGia: number;
	hot: boolean;
	dangChieu: boolean;
	sapChieu: boolean;
}
