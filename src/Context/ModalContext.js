import { createContext, useContext, useState } from "react";

const ModalContext = createContext()

export const useModal = () => useContext(ModalContext)

function ModalProvider({children}) {
    const [showModal, setShowModal] = useState(false)
    
    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const value = {
        showModal,
        setShowModal,
        toggleModal,
    }

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;