import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';

import { hideTrailer } from '../features/Movies/movieSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const VideoModal = () => {
	const {
		trailerPopup: { isOpen, url },
	} = useAppSelector((store) => store.movie);
	const dispatch = useAppDispatch();

	return (
		<ModalVideo
			channel='youtube'
			isOpen={isOpen}
			videoId={url.split('v=')[1]}
			onClose={() => dispatch(hideTrailer())}
		/>
	);
};

export default VideoModal;
