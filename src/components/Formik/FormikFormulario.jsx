import React from 'react'
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useFormik } from "formik";
import * as Yup from "yup";
import { addDoc, collection, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import "./FormikFormulario.css"

const FormikFormulario = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
    const total = getTotalPrice()

    const data = {
        name: "",
        phone: "",
        email: ""
    }

    const enviarForm = (data) => {

        const order = {
            buyer: data,
            items: cart,
            total: total,
            date: serverTimestamp()
        }

        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order)
            .then(res => setOrderId(res.id))

        cart.map(product => (
            updateDoc(doc(db, "products", product.id), { stock: product.stock - product.quantity })
        ))

        clearCart()
    }

    const { handleSubmit, values, handleChange, errors } = useFormik({
        initialValues: data,
        onSubmit: enviarForm,
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Por favor ingresa tu nombre"),
            phone: Yup.string().required("Por favor ingrese su teléfono"),
            email: Yup.string().required("Por favor ingresa tu email")
        }),
        validateOnChange: false
    })

    return (
        <div className='formik'>
            <div className='line'></div>
            <Typography color="#8bc34a" variant="h2" align="center" fontFamily={'Roboto'}>
                Formulario de registro
            </Typography>

            <form className="form-container" onSubmit={handleSubmit}>
                <Grid
                    container
                    alignItems={"center"}
                    justifyContent="space-evenly"
                    spacing={2}
                    sx={{ width: "100%" }}
                >
                    <Grid item xs={12} md={7}>
                        <TextField
                            type="text"
                            label="Ingrese su nombre"
                            name="name"
                            variant="outlined"
                            fullWidth
                            value={values.name}
                            onChange={handleChange}
                            helperText={errors.name}
                            error={errors.name ? true : false}
                        />
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <TextField
                            type="text"
                            label="Ingrese su teléfono"
                            variant="outlined"
                            fullWidth
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            error={errors.phone ? true : false}
                            helperText={errors.phone}
                        />
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <TextField
                            type="text"
                            label="Ingrese su email..."
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            error={errors.email ? true : false}
                            helperText={errors.email}
                        />
                    </Grid>


                </Grid>
                <div className='buttonSend'>
                <Button type="submit" variant="contained">
                    Comprar
                </Button>
                </div>
            </form>
        </div>
    )
}

export default FormikFormulario