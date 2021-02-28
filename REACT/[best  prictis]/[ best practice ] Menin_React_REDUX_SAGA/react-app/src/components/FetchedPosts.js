import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/actions";
import { Loader } from "./Loader";

function FetchedPosts() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => {
        return state.posts.fetchedPosts;
    });
    const loading = useSelector((state) => {
        return state.app.loading;
    });

    if (loading) {
        return <Loader />;
    }

    if (!posts.length) {
        return (
            <button
                className='btn btn-primary'
                onClick={() => dispatch(fetchPost(posts))}
            >
                Загрузить
            </button>
        );
    }
    return posts.map((post) => <Post post={post} key={post.id} />);
}

export default FetchedPosts;
