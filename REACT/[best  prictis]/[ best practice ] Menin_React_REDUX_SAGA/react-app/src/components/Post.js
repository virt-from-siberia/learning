import React from "react";

function Posts({ post }) {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{post.title}</h5>
            </div>
        </div>
    );
}

export default Posts;
