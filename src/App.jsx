import {BrowserRouter, Routes, Route }from "react-router-dom";
//import "./App.css";
import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import WatchList from "./pages/WatchList.jsx";
import { WatchListProvider } from "./context/WatchListContext.jsx";

function App() {
return (
  <WatchListProvider>
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/watchlist"element={<WatchList />} />
   </Routes>
   </BrowserRouter>
 </WatchListProvider>
  )
}

export default App;
