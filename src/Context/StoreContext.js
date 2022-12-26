import { createContext, useContext, useState } from "react";

const StoreContext = createContext()

export const useStore = () => useContext(StoreContext)

function StoreProvider({children}) {

    const [data, setData] = useState([
        {
            title: 'Star war',
            video_id: '8Qn_spdM5Zg',
            video_description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            share_by: 'nguyenvana@gmail.com',
            like_count: 0,
            dislike_count: 0,
        },
        {
            title: 'Avatar',
            video_id: 'd9MyW72ELq0',
            video_description: '',
            share_by: 'tranvanb@gmail.com',
            like_count: 0,
            dislike_count: 0,
        },
        {
            title: 'Iron man',
            video_id: '8ugaeA-nMTc',
            video_description: 'Starring: Robert Downey Jr., Gwyneth Paltrow, Terrence Howard \nDirected By: Jon Favreau \n\nSynopsis: After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
            share_by: 'thanhgiong@gmail.com',
            like_count: 0,
            dislike_count: 0,
        },
    ])

    const value = {
        data,
        setData,
    }

    return (
        <StoreContext.Provider value={value} key={data}> 
            <div> {children} </div>
        </StoreContext.Provider>
    );
}

export default StoreProvider;