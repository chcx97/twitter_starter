import * as React from "react"
import Feed from "./components/Feed/Feed"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from "./components/UserProfile/UserProfile"
import Advertisements from "./components/Advertisements/Advertisements"
import { codepathUserProfile, firstTweet, navLinks } from "./constants"
import { useState } from "react"


export default function App() {
  console.log(firstTweet)

  //states
  const [userProfile, setUserProfile]=useState(codepathUserProfile);
  const [tweets, setTweets]=useState([firstTweet]);
  const [tweetText, setTweetText] = useState("");

  //state handler
  function handleSetTweet(tweet){
    setTweets(tweet);
  }
  return (
    <div className="app">
      <Navbar navLinks={navLinks}/>
      <main>
        <UserProfile userProfile={userProfile} />
        <Feed tweetText={tweetText} setTweetText={setTweetText} tweets={tweets} setTweets ={setTweets} userProfile = {userProfile} />
        <Advertisements />
      </main>
    </div>
  )
}
