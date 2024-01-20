import React from 'react';
import Tweet from './Tweet';
import '../CSS/TweetList.css';

const TweetList = ({tweets}) => {
    return (
        <ul className='tweet-list'>
            {
                tweets.map((tweet) => (
                    <li className='tweet-like-wrapper' key={tweet.id}>
                        <Tweet content={tweet.content} likeCount={tweet.likeCount}/>
                    </li>
                ))
            }
        </ul>
    );
}

export default TweetList;
