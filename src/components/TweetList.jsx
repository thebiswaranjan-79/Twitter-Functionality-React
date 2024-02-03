import React from 'react';
import { memo } from 'react';
import Tweet from './Tweet';
import '../CSS/TweetList.css';

const MemoisedTweet = memo(Tweet);
const TweetList = ({tweets, onEditTweet}) => {
    return (
        <ul className='tweet-list'>
            {
                tweets.map((tweet) => (
                    <li className='tweet-like-wrapper' key={tweet.id}>
                       <MemoisedTweet 
                            tweetId = {tweet.id}
                            content={tweet.content} 
                            likeCount={tweet.likeCount} 
                            createdAt={tweet.createdAt.toString()}
                            onEdit = {onEditTweet}
                            />
                    </li>
                ))
            }
        </ul>
    );
}

export default TweetList;
