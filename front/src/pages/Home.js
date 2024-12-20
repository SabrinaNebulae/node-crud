import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get("http://localhost:5000/posts").then((response) => {
        setListOfPosts(response.data);
        });
    }, []);
    return (
        <div className="container mx-auto">
            {listOfPosts.map((value, key) => {
                return <div 
                    key={key}
                    onClick={() => navigate(`/post/${value.id}`)}
                    className="mx-auto max-w-sm mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.postText}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {value.username}
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>;
            })}
        </div>
    )
};

export default Home;