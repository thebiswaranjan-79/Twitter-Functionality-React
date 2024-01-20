import React from 'react';
import '../CSS/Tweet.css';


const Tweet = ({content, likeCount}) => {
    return (
        <div className='tweet-wrapper'>
            <div className='tweet-content'>
                {content}
            </div>

            <div className='likes'>
                {likeCount}likes
            </div>
        </div>
    );
}

export default Tweet;
