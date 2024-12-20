import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const initialValues = {
        title: "",
        postText: "",
        username: ""
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a title to create a post"),
        postText:Yup.string().required(),
        username:Yup.string().min(3).max(15).required()
    });

    let navigate = useNavigate(); 

    const onSubmit = (data) => {
        axios.post("http://localhost:5000/posts", data).then((response) => {
            navigate("/");
        });
    };

    return <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <ErrorMessage name="title" component="span" className="text-red-700"/>
                        <Field id="title" name="title" placeholder="(Ex: Title ...)" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your post</label>
                        <ErrorMessage name="postText" component="span" className="text-red-700"/>
                        <Field as="textarea" id="message" name="postText" placeholder="Write your thoughts here..." rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Field>

                    </div>
                    <div className="mb-5">
                        <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <ErrorMessage name="username" component="span" className="text-red-700"/>
                        <Field id="username" name="username" placeholder="(Ex: JaneDoe1234 ...)" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    {/* <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                        <Field id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div> */}
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </Form>
            </Formik>
    </div>
}

export default CreatePost;