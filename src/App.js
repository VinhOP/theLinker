 import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Home from './components/Home';
import { useModal } from './Context/ModalContext';
import Modal from './components/Modal';

function App() {

  const modal = useModal()

  return (
    <div className="App">
      {modal.showModal && <Modal />}
      <DefaultLayout> 
        <Home />  
      </DefaultLayout>
    </div>
  );
}

export default App;
