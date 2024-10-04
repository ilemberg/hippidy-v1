import React from 'react';
import Questions from './components/Questions';
import Summary from './components/Summary';
import Details from './components/Details';
import HipMap from './components/HipMap';
import Tweet from './components/tweet/Tweet';
import FbPost from './components/facebook/FbPost';
import FastPoll from './components/fastPoll/FastPoll';
import StrawPoll from './components/strawPoll/StrawPoll';
import Hip1 from './components/hipTest/Hip';
import WorldMap from './components/worldMap/WorldMap';
const Hip = () => {
  return (
  <>
    <h1>Hip Component</h1>
    {/* <Questions />
    <Summary />
    <Details />
    <HipMap /> */}
    <Tweet />
	<FbPost/>
	<FastPoll/>
	<StrawPoll/>
	<Hip1/>
	<WorldMap/>
  </>
  );
};

export default Hip;