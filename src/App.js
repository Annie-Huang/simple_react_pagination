import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    // run componenet is mounted or updated.
    // add [] so it only run only. So it's sort of mimic componentDidMount life cycle.
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    // console.log(posts);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page:
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // totalPosts is a number, not the list of all posts.
    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">My Blog</h1>
            {/*<Posts posts={posts} loading={loading} />*/}
            <Posts posts={currentPosts} loading={loading} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );
}

export default App;
