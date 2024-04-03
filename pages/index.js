import LandingActivities from '@/Components/LandingPage/LandingActivities'
import LandingFeaturedGames from '@/Components/LandingPage/LandingFeaturedGames'
import LandingFeatures from '@/Components/LandingPage/LandingFeatures'
import LandingFooter from '@/Components/LandingPage/LandingFooter'
import LandingFunFact from '@/Components/LandingPage/LandingFunFact'
import LandingHero from '@/Components/LandingPage/LandingHero'
import LandingNavbar from '@/Components/LandingPage/LandingNavbar'
import LandingRecentWinners from '@/Components/LandingPage/LandingRecentWinners'
import Head from 'next/head'
import React, { useEffect } from 'react'

const index = () => {
  useEffect(() => {
    // remove main id from main tag
    document.querySelector('main').removeAttribute('id')
    // remove main class from main tag
    document.querySelector('main').removeAttribute('class')
    // remove main class from main tag
    document.querySelector('body').removeAttribute('class')
  }, [])
  return (
    <div id='home'>
      <Head>
        <title>Lotaverse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/assets/css/style2.css" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>

      </Head>
      <LandingNavbar/>
      <LandingHero/>
      <LandingFeatures/>
      <LandingFeaturedGames/>
      <LandingActivities/>
      <LandingFunFact/>
      <LandingRecentWinners/>
      <br />
    <LandingFooter/>
    </div>
  )
}

export default index