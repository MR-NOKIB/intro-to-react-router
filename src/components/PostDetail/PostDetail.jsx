/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const { id, title, useId, body } = post;

    const navigate =useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    console.log(post);
    return (
        <div>
            <h3>Detail About Your Post of: {id}</h3>
            <h5> {title}</h5>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;