interface Ticket {
	maLichChieu: number;
	danhSachVe: [
		{
			maGhe: number;
			giaVe: number;
		}
	];
	taiKhoanNguoiDung: string;
}

interface IChairList {
	maGhe: number;
	tenGhe: string;
	maRap: number;
	loaiGhe: string;
	stt: string;
	giaVe: number;
	daDat: boolean;
	taiKhoanNguoiDat: string;
}

interface MovieRoom {
	thongTinPhim: {
		maLichChieu: number;
		tenCumRap: string;
		tenRap: string;
		diaChi: string;
		tenPhim: string;
		hinhAnh: string;
		ngayChieu: string;
		gioChieu: string;
	};
	danhSachGhe: IChairList[];
}

export { Ticket, MovieRoom };
