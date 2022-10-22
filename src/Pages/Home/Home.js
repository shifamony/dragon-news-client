import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummery from '../Shared/NewSummery/NewsSummery';

const Home = () => {
    const allNews = useLoaderData();
   
    return (
        <div>
            <h1>This is home news: {allNews.length}</h1>
            {
                allNews.map(news => <NewsSummery 
                    key={news._id}
                    news ={news}
                    ></NewsSummery>)
            }
        </div>
    );
};

export default Home;