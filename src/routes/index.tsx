import { Route, Routes } from "react-router-dom"
import { Main } from "../pages/main"


export const RoutesMain = () => {

    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            
        </Routes>
    )
}