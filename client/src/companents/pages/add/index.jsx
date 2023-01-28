import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./index.scss"
import { Helmet } from 'react-helmet';
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(5000, 'Too Long!')
    .required('Required'),
  price: Yup.number()
});
const Add = () => {
  return (
    <div className='add'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
       <h1>ADD</h1>
     <Formik
       initialValues={{
         name: '',
         description: '',
         image: '',
         price: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         axios.post("http://localhost:8000/features",(values));
       }}
     >
       {({ errors, touched }) => (
         <Form>
          <label htmlFor="image">Image:</label>
           <Field name="image" />
           {errors.image && touched.image ? (
             <div>{errors.image}</div>
           ) : null}
           <label htmlFor="name">Name:</label>
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <label htmlFor="description">Description:</label>
           <Field name="description" />
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
           <label htmlFor="price">Price:</label>
            <Field name="price" />
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default Add