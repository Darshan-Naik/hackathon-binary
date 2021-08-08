import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../../Utils/serverUrl';
import NewsCard from '../SearchResult/NewsCard';

function Articles() {
    const [allArticles, setAllArticles] = useState([]);
    const [articleIsLoading, setArticleIsLoading] = useState(false);
    const [articleIsError, setArticleIsError] = useState(false);

    const getAllArticles = () => {
        setArticleIsLoading(true);
        return axios.get(url + '/articles')
            .then((res) => {
                console.log(res.data.data);
                setAllArticles(res.data.data);
                setArticleIsLoading(false);
            })
            .catch((err) => {
                setArticleIsLoading(false);
                setArticleIsError(true);
            })
            .finally(() => {
                setArticleIsLoading(false);
            })
    };

    useEffect(() => {
        getAllArticles();
    }, [])

    return articleIsLoading ? <div className="flex">Loading...</div>
        : articleIsError ? <div className="flex">Something went wrong</div>
            : (
                <div className="scroll">
                    {
                        allArticles.length > 0 ? (
                            allArticles.map(item => <NewsCard key={item._Id} {...item} type="Article" />)
                        ) : (
                            <div className="flex">
                                <h1>No Articles to show.</h1>
                            </div>
                        )
                    }
                </div>
            )
}

export default Articles
