import React from "react";
import "./App.css";
import MaterialUiTable from "./component1/MaterialUiTable";
import Form from "./component1/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditForm from "./component1/EditForm";

function App() {
    return (
        // <div className="App">
        //     <MaterialUiTable></MaterialUiTable>
        //           <Form></Form>
        // </div>

        <Router>
            <Routes>
                <Route path="/" element={<MaterialUiTable />} />
                <Route path="/add" element={<Form />} />
                <Route path="/edit/:id" element={<EditForm />} />
            </Routes>
        </Router>
    );
}

export default App;
