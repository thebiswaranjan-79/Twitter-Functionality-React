import React, { useState, useCallback, memo } from 'react';
import TweetList from './TweetList';
import AddTweet from './AddTweet';

const initialDummyTweets = [
    {id: 0, content : "We have a new Twitter Called as threads", likeCount : 3, createdAt : new Date()},
    {id: 1, content : "What should we Post ?" , likeCount : 5, createdAt : new Date()},
    {id: 2, content : "What is Up with Tech Communities" , likeCount : 6, createdAt : new Date()},
  ];

const MemoisedAndTweet = memo(AddTweet);

const Twitter = () => {
    const [tweets, setTweets] =  useState(initialDummyTweets);

    const handleAddTweet = useCallback((text)=>{
        let nextId = (tweets.length > 0) ? tweets[tweets.length - 1].id +1 : 0;
        setTweets([...tweets, {
            content : text, 
            likeCount : Math.floor(Math.random()*10), // This is a Random Like Count
            id : nextId,
            createdAt : new Date()
        }]);
    }, [tweets]); //use CallBack Takes 2 aguments as parameter -> 1 is callback () abd 2 is dependency[]
   
    const handleEditTweet = useCallback((tweet) => {
        setTweets(
            tweets.map((currentTweet) => {
                if(currentTweet.id === tweet.id){
                    // If current tweet id is same as the new Tweet then return the update tweet 
                    return tweet
                }else { 
                    // This is the Old Tweet 
                    return currentTweet;
                }
            }
        ))
    }, [tweets]);

    const sortTweets = useCallback(() => {
        tweets.sort((t1,t2) => t2.createdAt.getTime() - t1.createdAt.getTime()); // Increasing Order 
        setTweets([...tweets]) 
    }, [tweets]);
    return (
        <>
            <MemoisedAndTweet onAddTweet = {handleAddTweet}/>
            <button onClick={sortTweets}>Sort Tweet By CreatedAt</button>
            <TweetList tweets={tweets} onEditTweet = {handleEditTweet}/>
        </>
    );
}

export default Twitter;
