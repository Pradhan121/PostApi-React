import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditForm = () => {
    const data = {
        customerType: "",
        customerName: "",
        customerMobile: "",
        customerEmail: "",
        customerNo: "",
        Birthday: "",
        HealthInsurance: "",
    };

    const [inputdata, setInputdata] = useState(data);

    const handleInput = (e) => {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post(
                "https://hammerhead-app-tzlph.ondigitalocean.app/customers",
                inputdata
            )
            .then((resp) => {
                console.log(resp.inputdata);
            })
            .catch((err) => console.log(err));
    }
    let { id } = useParams();

    console.log("id===>" + id);

    return (
        <>
            <div className="app">
                <h2>Edit Customer</h2>
                <form>
                    <div>
                        <label>customerType: </label>
                        <input
                            type="number"
                            onChange={handleInput}
                            id="number"
                            name="customerType"
                            min="0"
                            max="50"
                            autoComplete="off"
                        />
                        <br></br>
                        <br></br>
                        <label> customerName:</label>
                        <input
                            type="text"
                            onChange={handleInput}
                            id="username"
                            name="customerName"
                            autoComplete="off"
                        />

                        <br></br>
                        <br></br>
                        <label> customerMobile:</label>
                        <input
                            type="tel"
                            onChange={handleInput}
                            id="mobileNo"
                            name="customerMobile"
                            autoComplete="off"
                        />

                        <br></br>
                        <br></br>
                        <label htmlFor="emailId"> customerEmail</label>
                        <input
                            type="email"
                            onChange={handleInput}
                            id="emailId"
                            name="customerEmail"
                            autoComplete="off"
                        />

                        <br></br>
                        <br></br>
                        <label> customerNo:</label>
                        <input
                            type="number"
                            onChange={handleInput}
                            id="counter"
                            name="customerNo"
                            min="0"
                            max="50"
                            autoComplete="off"
                        />

                        <br></br>
                        <br></br>
                        <label> birthday:</label>
                        <input
                            type="date"
                            onChange={handleInput}
                            id="dateOfBirth"
                            name="birthday"
                            autoComplete="off"
                        />
                        <br></br>
                        <br></br>
                        <label> healthInsurance:</label>
                        <input
                            type="text"
                            onChange={handleInput}
                            id="number"
                            name="healthInsurance"
                        />
                        <br></br>
                        <br></br>
                        <button
                            onClick={handleSubmit}
                            style={{
                                backgroundColor: "black",
                                color: "white",
                                marginBottom: "10px",
                            }}
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default EditForm;
