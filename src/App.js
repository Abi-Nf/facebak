import './App.css';
import {NewsFeed} from "./pages/NewsFeed";
import {Navbar} from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ClientProvider from "./components/provider";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
        <ClientProvider>
            <Navbar/>

            <Routes>
                <Route path="/" Component={NewsFeed}/>
                <Route path="/profile/:user" Component={Profile}/>
            </Routes>
        </ClientProvider>
    </BrowserRouter>
  );
}

export default App;