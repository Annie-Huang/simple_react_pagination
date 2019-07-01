import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

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

    return (
        <div className="container">
            <h1>My App</h1>
        </div>
    );
}

export default App;
