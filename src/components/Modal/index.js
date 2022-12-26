import classNames from "classnames/bind";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useModal } from "../../Context/ModalContext";
import { useStore } from "../../Context/StoreContext";
import styles from './Modal.module.scss';

const cx = classNames.bind(styles)
function Modal() {

    const [videoUrl, setVideoUrl] = useState()
    const [videoTitle, setVideoTitle] = useState()
    const [videoDescription, setVideoDescription] = useState()
    console.log(videoUrl);
    
    const modal = useModal()
    const store = useStore()
    const auth = useAuth()


    const handleCloseModal = () => {
        modal.setShowModal(false)
    }

    const handleShareVideo = () => {
        const videoId = videoUrl.split('=').pop()
        store.setData([
            ...store.data,
            {
                title: videoTitle,
                video_id: videoId,
                video_description: videoDescription,
                share_by: auth.currentUser.email,
                like_count: 0,
                dislike_count: 0,
            }
        ])
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('share-container')}>
                <div className={cx('content')}>
                    <h4 className={cx('title')}> Share Video </h4>
                    <div className={cx('input-section')}>
                        <div className={cx('input-container')}>
                            <div className={cx('input-title')}> Video URL: </div>
                            <input className={cx('input')} type='text' onChange={(e) => setVideoUrl(e.target.value)}/>
                        </div>
                        <div className={cx('input-container')}>
                            <div className={cx('input-title')}> Title: </div>
                            <input className={cx('input')} type='text' onChange={(e) => setVideoTitle(e.target.value)}/>
                        </div>
                        <div className={cx('input-container')}>
                            <div className={cx('input-title')} > Description: </div>
                            <textarea className={cx('input', 'description')} rows={4} type='text' onChange={(e) => setVideoDescription(e.target.value)}/>
                        </div>
                    </div>
                    <button className={cx('share-btn')} onClick={handleShareVideo}> Share! </button>
                </div>
                <button className={cx('close-btn')} onClick={handleCloseModal}> &times; </button>
            </div>
        </div>
    );
}

export default Modal;