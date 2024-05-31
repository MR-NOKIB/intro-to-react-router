/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/post/${id}`)
    };

    return (
        <div className='post'>
            <h5>ID: {id}</h5>
            <h5>{title}</h5>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Show Post Detail</button></Link>
            <button onClick={handleNavigate}>With Button Handled</button>
        </div>
    );
};

export default Post;