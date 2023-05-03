import React from 'react'

import MainAboutUs from '../components/Main/MainAboutUs/MainAboutUs';
import MainInfo from '../components/Main/MainInfo/MainInfo';
import MainTitle from '../components/Main/MainTitle/MainTitle';
import Footer from '../components/Footer/Footer';

type Props = {}

function HomePage({}: Props) {
  return (
    <div className="slides">
      <MainTitle />
      <MainAboutUs />
      <MainInfo />
      <Footer />
    </div>
  )
}

export default HomePage