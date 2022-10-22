import React from 'react';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar} from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsSummery = ({news}) => {
    const {_id,rating,details,image_url,title, total_view,author} = news;
    console.log(news)
    return (

        <Card className="mb-5">
            <Card.Header> 
                <div className='d-flex justify-content-between align-items-center'>
                    <div  className='d-flex align-items-center'>
                    <Image
                      roundedCircle
                     src={author.img}
                      style={{height:'60px'}}
                    ></Image>
                    <div className='ms-2'>
                      <p className='mb-0'>{author.name}</p>
                      <p>{author.published_date}</p>
                   </div>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </div>
                </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
            {
            details.length > 200 ?
            <p>{details.slice(0,250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
            :
            <p>{details}</p>
            }
          </Card.Text>
                
            </Card.Body>
            <Card.Footer className="text-muted">
              <div className='d-flex justify-content-between'>
                <div>
                    <FaStar className='text-danger'></FaStar>
                    <span className='ms-2'>{rating.number}</span>
                </div>
                <div>
                    <FaEye></FaEye>
                    <span className='ms-2'>{total_view}</span>
                </div>
              </div>
                
            </Card.Footer>
            </Card>
        //===========================================
    //     <Card className='mb-5'>
    //         <Card.Header>
    //             <div>
    //                 <Image
    //                   roundedCircle
    //                   src={author.img}
    //                   style={{height:'60px'}}
    //                 ></Image>
    //                 <div>

    //                 </div>
    //             </div>
    //         </Card.Header>
       
    //     <Card.Body>
    //     
    //       <Card.Title></Card.Title>
          
         
    //     </Card.Body>
    //   </Card>
    );
};

export default NewsSummery;