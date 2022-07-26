import './App.css'
import './comonents/Header/Header'
import Header from "./comonents/Header/Header";
import Navbar from "./comonents/Navbar/Navbar";
import Dialogs from "./comonents/Dialogs/Dialogs";
import Profile from "./comonents/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./comonents/News/News";
import Music from "./comonents/Music/Music";
import Settings from "./comonents/Settings/Settings";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}
export default App;

