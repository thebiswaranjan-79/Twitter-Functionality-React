import React, { useState } from 'react';
import TweetList from './TweetList';
import AddTweet from './AddTweet';

const initialDummyTweets = [
    {id: 0, content : "We have a new Twitter Called as threads", likeCount : 3},
    {id: 1, content : "What should we Post ?" , likeCount : 5},
    {id: 2, content : "What is Up with Tech Communities" , likeCount : 6},
  ];
  
const Twitter = () => {
    const [tweets, setTweets] =  useState(initialDummyTweets);
    const handleAddTweet = (text)=>{
        let nextId = (tweets.length > 0) ? tweets[tweets.length - 1].id +1 : 0;
        setTweets([...tweets, {
            content : text, 
            likeCount : Math.floor(Math.random()*10), // This is a Random Like Count
            id : nextId,
        }]);
    }
    return (
        <>
            <AddTweet onAddTweet = {handleAddTweet}/>
            <TweetList tweets={tweets}/>
        </>
    );
}

export default Twitter;
