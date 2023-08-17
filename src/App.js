import './App.css';
import {NewsFeed} from "./pages/NewsFeed";
import {Navbar} from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ClientProvider from "./components/provider";

function App() {
  return (
    <BrowserRouter>
        <ClientProvider>
            <Navbar />
            <div className='h-12 pt-1'/>
            <Routes>
                <Route path="/" Component={NewsFeed}/>
            </Routes>
        </ClientProvider>
    </BrowserRouter>
  );
}

export default App;