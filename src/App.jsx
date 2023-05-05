import Sidebar from "./components/sidebar";
import RootRouter from "./router/RootRouter";

function App() {
    return (
        <div className="App">
            <RootRouter />
            <Sidebar/>
        </div>
    );
}

export default App;