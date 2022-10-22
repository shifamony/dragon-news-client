import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummery from '../Shared/NewSummery/NewsSummery';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h4>This is category: {categoryNews.length}</h4>
            {
                categoryNews.map(news => <NewsSummery
                 key={news._id}
                 news={news}
                
                ></NewsSummery>)
            }
        </div>
    );
};

export default Category;