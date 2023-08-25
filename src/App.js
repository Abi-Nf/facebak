import './App.css';
import {NewsFeed} from "./pages/NewsFeed";
import {Navbar} from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ClientProvider from "./components/clientProvider";

function App() {
  return (
    <BrowserRouter>
        <ClientProvider>
            <Navbar/>

            <Routes>
                <Route path="/" Component={NewsFeed}/>
                <Route path="/profile/:user" Component={null}/>
            </Routes>
        </ClientProvider>
    </BrowserRouter>
  );
}

export default App;