import React from 'react'
// == components =======>
import Article from './components/article/Article'
import Brand from './components/brand/Brand'
import Cta from './components/cta/Cta'
import Feature from './components/feature/Feature'
import Navbar from './components/navbar/Navbar'

// == Containers =======>
import Blog from './containers/blog/Blog'
import Features from './containers/features/Features'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'
import Possibility from './containers/possibility/Possibility'
import WhatGPT from './containers/whatGPT/WhatGPT'

// CSS styles ======= >
import './app.css'




export default function App() {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar></Navbar>
                <Header></Header>
            </div>
            <Brand></Brand>
            <WhatGPT></WhatGPT>
            <Features></Features>
            <Possibility></Possibility>
            <Cta></Cta>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    )
}
