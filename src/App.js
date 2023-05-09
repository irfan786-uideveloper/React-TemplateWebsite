import React from 'react';

import NavBar from './Navbar';
import Header from './Header';
import Appsection from './Appsection';
import Cards from './Cardsection';
import Footer from './Footer';



const App=()=>{

    return(
        <div>
        <NavBar/>
        <Header/>
        <Appsection/>
        <Cards/>
        <Footer/>
    

        </div>
    )
}

export default App;