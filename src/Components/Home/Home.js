import React from 'react'
import cuppy from '../../Images/cuppy.svg';
import '../../CSS/Home.css'

export const Home = () => {
    return (
        <div class="title-img bRed">
            <div class="bRed title-box ">
                <h1 class="title">
                    CuppyCake
                    <hr class="liner" />
                </h1>
                <h4 class="subtitle">Satisfy your sweet-tooth</h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                {/* <img src={cuppy} className="cuppy-logo" alt="cuppy" /> */}
            
            </div> 
        </div>
    )
}