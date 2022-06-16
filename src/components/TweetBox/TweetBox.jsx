import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"
import { useEffect } from "react"
import { useState } from "react"

export default function TweetBox(props) {
 // console.log(props.setTweet)
  //console.log(123,props.userProfile.name)
 
  //const {tweets} = props
  //functions
  
  const [disable, setDisable] = useState(true)
  const length = props.tweetText.length+1;
  console.log(999,disable);
  const handleOnTweetTextChange = (e) => {
    //console.log(props.setTweets(e.target.value));
    
    console.log(99999,e.target.value);
    props.setTweetText(e.target.value);
    console.log(9999,props.tweetText);
    console.log(99,props.tweetText.length);
    console.log(9996,length);
    if (e.target.value.length == 0 || length > 140){
      setDisable(true);
      
      //console.log(13333,disable);
    }else{
      setDisable(false);
    }
    
    
  }

  const handleOnSubmit = () => {
    console.log("this is being passed");
    //console.log(6666,newTweet.text);
    const newTweet = {
      //id: props.tweets.length,
      name: props.userProfile?.name,
      handle: props.userProfile.handle,
      text: props?.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
    };

    console.log(1203,props.tweetText.length)
    console.log(4455,newTweet.handle);
    console.log(5555,newTweet.text);
    console.log(5555,newTweet.text.length);
    
    props.setTweets((oldTweets) => [...oldTweets, {...newTweet, id: oldTweets.length}]);
    console.log(589,newTweet.text);
    props.setTweetText("");
    
    console.log(11111,props.tweetText.length - 2);
  }

 

  return (
    <div className="tweet-box">
      <TweetInput value = {props.tweetText} handleOnChange = {handleOnTweetTextChange} />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount length = {length - 1} />
        <TweetSubmitButton disable={disable} handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  const {length} = props
  let clear = "";
  let lengthLeft = 140 - length
  console.log(223,length);
  //let length = props.tweet-length.length;
  //console.log(23,length);
  //console.log(2233, props.tweet-length.length);
  return <span className="tweet-length">{length == 0? clear: lengthLeft}</span>
}

export function TweetSubmitButton(props) {
  
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button 
       className="tweet-submit-button" disabled={props.disable} onClick={props.handleOnSubmit} >Tweet</button>
    </div>
  )
}
