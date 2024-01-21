import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './pages/About.jsx';
import Main from './pages/Main.jsx';
import Home from './pages/Products.jsx';



function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000} // Auto close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        // style={customToastStyle} // Apply custom style
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
