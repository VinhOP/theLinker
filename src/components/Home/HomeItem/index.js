import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown as faThumbsDownSolid, faThumbsUp as faThumbsUpSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { useAuth } from "../../../Context/AuthContext";
import styles from './HomeItem.module.scss'

const cx = classNames.bind(styles)

function HomeItem({data}) {

    const [isLiked, setIsLiked] = useState(false)
    const [isDisLiked, setIsDisLiked] = useState(false)

    const auth = useAuth()
    
    const handleLike = () => {
        if(!auth.currentUser) {
            return
        }
        setIsDisLiked(false)
        setIsLiked(!isLiked)
    }

    const handleDislike = () => {
        if(!auth.currentUser) {
            return
        }
        setIsLiked(false)
        setIsDisLiked(!isDisLiked)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-player')}>
               <iframe 
                className={cx('video')} 
                src={`https://www.youtube.com/embed/${data.video_id}`} 
                allowFullScreen
                title={'Embedded youtube'} 
               />
            </div>
            <div className={cx('video-info')}>
                <h3 className={cx('title')}> {data.title} </h3>
                <span>shared by:</span> <strong>{data.share_by}</strong>
                <div className={cx('like-section')}>
                    <span> {data.like_count} <FontAwesomeIcon className={cx('icon')} onClick={handleLike} icon={isLiked? faThumbsUpSolid : faThumbsUp}/></span>
                    <span> {data.dislike_count} <FontAwesomeIcon className={cx('icon')} onClick={handleDislike} icon={isDisLiked? faThumbsDownSolid : faThumbsDown}/></span>
                </div>
                <p className={cx('description')}>{data.video_description} </p>
        
            </div>
        </div>
    );
}

export default HomeItem;