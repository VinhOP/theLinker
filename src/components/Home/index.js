import classNames from "classnames/bind";
import { useState } from "react";
import { useStore } from "../../Context/StoreContext";
import styles from './Home.module.scss'
import HomeItem from "./HomeItem";

const cx = classNames.bind(styles)

function Home() {

    const store = useStore()

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                {store.data.map((item, i) => {
                    return <HomeItem data={item} key={i}/>
                })}
            </div>
        </div>
    );
}

export default Home;