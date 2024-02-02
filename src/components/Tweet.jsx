import React, { useState } from 'react';
import '../CSS/Tweet.css';


const Tweet = ({content, likeCount, createdAt}) => {
    const[isEditing, setIsEditing] = useState(false);
    return (
        <div className='tweet-wrapper'>
            <div className='tweet-content'>
                {content}
            </div>

            <div className='like-createdAt-wrapper'>
                <div className='likes'>
                    {likeCount}likes
                </div>
                <div className='created-at'>
                    <b>Tweeted at</b> {createdAt}
                </div>
            </div>
           
        </div>
    );
}

export default Tweet;
