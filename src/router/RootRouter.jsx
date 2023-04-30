import { Route, Routes } from "react-router-dom";
import { constants } from "../assets/constants";

function RootRouter() {
    return (
        <Routes>
            <Route path={constants.paths.home} element={<>home</>} />
            <Route path={constants.paths.other} element={<>other</>} />
        </Routes>
    );
}

export default RootRouter;
