import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../../Utils/serverUrl';
import NewsCard from '../SearchResult/NewsCard';

function News() {

    const [allNews, setAllNews] = useState([]);
    const [newsIsLoading, setNewsIsLoading] = useState(false);
    const [newsIsError, setNewsIsError] = useState(false);

    const getAllNews = () => {
        setNewsIsLoading(true);
        return axios.get(url + '/news')
            .then((res) => {
                setAllNews(res.data.data);
                setNewsIsLoading(false);
            })
            .catch((err) => {
                setNewsIsLoading(false);
                setNewsIsError(true);
            })
            .finally(() => {
                setNewsIsLoading(false);
            })
    };

    useEffect(() => {
        getAllNews();
    }, [])

    return newsIsLoading ? <div className="flex">Loading...</div>
        : newsIsError ? <div className="flex">Something went wrong</div>
            : (
                <div className="scroll">
                    {
                        allNews.length > 0 ? (
                            allNews.map(item => <NewsCard key={item._id} {...item} type="News" />)
                        ) : (
                            <div className="flex">
                                <h1>No News to show.</h1>
                            </div>
                        )
                    }
                </div>
            )
}

export default News
