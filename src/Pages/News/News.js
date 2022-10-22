import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link, useLoaderData } from 'react-router-dom';
const News = () => {
    const news = useLoaderData();
    const {details,image_url,title,category_id} = news;
    return (
        <Card >
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
       <Link to={`/category/${category_id}`}>
          <Button variant="primary">All news here</Button>
       </Link>
      </Card.Body>
    </Card>
    );
};

export default News;