import './App.css'
import './comonents/Header'
import Header from "./comonents/Header";
import Navbar from "./comonents/Navbar";
import Content from "./comonents/Content";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Content/>
        </div>
    );
}
export default App;

