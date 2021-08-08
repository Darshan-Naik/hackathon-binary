import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../../Utils/serverUrl';
import NewsCard from '../SearchResult/NewsCard';

function Blogs() {

    const [allBlogs, setAllBlogs] = useState([]);
    const [blogsIsLoading, setBlogsIsLoading] = useState(false);
    const [blogsIsError, setBlogsIsError] = useState(false);

    const getAllBlogs = () => {
        setBlogsIsLoading(true);
        return axios.get(url + '/blogs')
            .then((res) => {
                setAllBlogs(res.data.data);
                setBlogsIsLoading(false);
            })
            .catch((err) => {
                setBlogsIsLoading(false);
                setBlogsIsError(true);
            })
            .finally(() => {
                setBlogsIsLoading(false);
            })
    };

    useEffect(() => {
        getAllBlogs();
    }, [])

    return blogsIsLoading ? <div className="flex">Loading...</div>
        : blogsIsError ? <div className="flex">Something went wrong</div>
            : (
                <div className="scroll">
                    {
                        allBlogs.length > 0 ? (
                            allBlogs.map(item => <NewsCard key={item._id} {...item} type="Blogs" />)
                        ) : (
                            <div className="flex">
                                <h1>No Blogs to show.</h1>
                            </div>
                        )
                    }
                </div>
            )
}

export default Blogs
