import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../Form/Input";
import {
    desc_validation,
    price_validation,
    quantity_validation,
    title_validation
} from "../Form/utils/inputValidations";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useState } from "react";
import axios from 'axios';

export default function AddProductSect() {
    const methods = useForm()
    const [success, setSuccess] = useState(false)

    const onSubmit = methods.handleSubmit((info, e) => {
        e.preventDefault();
        console.log(info)
        // setSuccess(true)
        const data = new FormData(e.target);
        axios.post('http://shop/api/products.php', data)
            .then(function (response) {
                console.log(response.data);
                if (response.data.status === 1) {
                    // setSuccess(true)
                    console.log(response.data.message);
                    // navigate('/login');
                } else {
                    const errors = [response.data.message];
                    console.log(errors); // setValidPhp(errors);
                }
            })
            .catch(function (error) {
                console.error('Error:', error);
            });
    })

    return (
        <>
            <section id="addProduct">
                <div className="container">
                    <div className="row f-jCenter m-center w60">
                        <FormProvider {...methods} >
                            <form
                                className="w100"
                                onSubmit={onSubmit}
                                noValidate
                                autoComplete="off"
                                encType="multipart/form-data"
                            >
                                <h4>Add Product Form</h4>
                                <div className="form-container">
                                    <Input {...title_validation} />
                                    <Input {...quantity_validation} />
                                    <Input {...price_validation} />
                                    <Input {...desc_validation} />
                                    {/* <Input {...image_validation}/> */}
                                    {/* {validPhp.length > 0 && (
                                        <div className="error-messages">
                                            <ul>
                                                {validPhp.map((error, index) => (
                                                    <li key={index}>{error}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )} */}
                                    <input type="hidden" name="action" value='addProduct' />
                                    <div className="submit-wrapper input-wrapper">
                                        {success && (
                                            <p>
                                                <BsFillCheckSquareFill /> Form has been submitted successfully
                                            </p>
                                        )}
                                        <input className="btn" type="submit" value='Go' />
                                    </div>
                                </div>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </section>
        </>
    )
}