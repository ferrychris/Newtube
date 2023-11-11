import React from 'react'
import Main from './Mainbody'
import Row from './Row'
import request from './request'

const Home = () => {
  return (
    <>
    <Main/>
    <Row title="Up Coming" fetchURL={request.requestHorror}/>
    <Row title="Popularity" fetchURL={request.requestTopSearch}/>
    <Row title="Trending" fetchURL={request.requestTrending}/>
    <Row title="Top Rated" fetchURL={request.requestHorror}/>
    <Row title="NEw Coming" fetchURL={request.requestHorror}/>
    </>
  )
}

export default Home