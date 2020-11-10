import React from 'react'

import Footer from "./Components/Footer/Footer";
import MainComponent from "./Components/MainComponent/MainComponent";


import './App.scss'

const App = ({social}) => {
    return (
        <main className="App">
            <MainComponent/>
            <Footer social={social}/>
        </main>
    )
}

export default App;
