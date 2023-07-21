import CreateBook from "./components/CreateBook";
import ShowBookDetails from "./components/ShowBookDetails";
import ShowBookList from "./components/ShowBookList";
import UpdateBook from "./components/UpdateBook";
import { BrowserRouter, Routes,Route } from "react-router-dom";
function App(){
    return(
        <BrowserRouter>

        <div className="bg-[rgb(44,62,80)] min-h-screen">
<Routes>
    <Route exact path='/' element={<ShowBookList/>}/>
    <Route path='/create-book' element={<CreateBook/>}/>
    <Route path='/edit-book/:id' element={<UpdateBook/>}/>
    <Route path='/show-book/:id' element={<ShowBookDetails/>}/>

</Routes>
        </div>
        </BrowserRouter>

    );
}
export default App;