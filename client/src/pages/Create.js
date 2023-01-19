import React from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import Button from '@mui/material/Button';
function Create() {
    return (
        <div>
            <Formik
                initialValues={{
                    productName: '',
                    src: '',
                    price: '',
                    count: 0
                }}

                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    axios.post('http://localhost:3000/products', {
                        productName: values.productName,
                        src: values.src,
                        price: values.price,
                        count: values.count
                    })
                    resetForm({ values: '' })
                }}
            >
                {({ errors, touched }) => (
                    <Form className='form'>
                        <Field className='input' placeholder='Name' name="productName" />
                        <Field className='input' placeholder='Price' name="price" />
                        <Field className='input' placeholder='SRC' name="src" />
                        <Field className='input' placeholder='Count' name="count" type='number' />
                        <Button type='submit' variant="contained" color="success">
                            Success
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Create
