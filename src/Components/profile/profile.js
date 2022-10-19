import React from "react";
import "./profile.scss";
import bag from "../../Assets/bag.png";
import Univercity from "../../Assets/univercity.png";


function profile() {
    return <>
        <div className="profile-main-container">
            <div className="tagline">
                <div className="icon-container">
                    <div className="icon"><img src={bag} alt="" /></div>
                </div>
                <div className="profile-tag">Experiance</div>
            </div>
            <div className='table-container'>
                <div className='table-row'>
                    <div className='table-tag'> Project</div>
                    <div className='table-tag'>About</div>
                    <div className='table-tag'>Link</div>
                </div>
                <div className='table-row'>
                    <div className='table-data'> AQS</div>
                    <div className='table-data'>It's Enterprises</div>
                    <div className='table-data'> <a href="">view</a></div>
                </div>
                <div className='table-row'>
                    <div className='table-data'> Fooddiiee</div>
                    <div className='table-data'>It's digitel menu</div>
                    <div className='table-data'> <a href="">view</a></div>
                </div>
                <div className='table-row'>
                    <div className='table-data'> UpComing</div>
                    <div className='table-data'>Incomplited</div>
                    <div className='table-data'> <a href="">view</a></div>
                </div>
                <div className='table-row'>
                    <div className='table-data'> UpComing</div>
                    <div className='table-data'>Incomplited</div>
                    <div className='table-data'> <a href="">view</a></div>
                </div>
                <div className='table-row'>
                    <div className='table-data'> UpComing</div>
                    <div className='table-data'>Incomplited</div>
                    <div className='table-data'> <a href="">view</a></div>
                </div>
            </div>
        </div>
        <div className="profile-main-container">
            <div className="tagline">
                <div className="icon-container">
                    <div className="icon"><img src={Univercity} alt="" /></div>
                </div>
                <div className="profile-tag">Education</div>
            </div>
            <div className='table-container'>
                <div className='table-row'>
                    <div className='table-tag'> Degree</div>
                    <div className='table-tag'>Year</div>
                    <div className='table-tag'>Percentage</div>
                </div>
                <div className='table-row'>
                    <div className='table-data'> SSC</div>
                    <div className='table-data'>2013</div>
                    <div className='table-data'> <a href="">view</a></div>
                </div>
                <div className='table-row'>
                    <div className='table-data'> HSC</div>
                    <div className='table-data'>2018</div>
                    <div className='table-data'> <a href="">view</a></div>
                </div>
                <div className='table-row'>
                    <div className='table-data'> ITI</div>
                    <div className='table-data'>2016</div>
                    <div className='table-data'> <a href="">view</a></div>
                </div>
            </div>
        </div>
        <div className="under-line"></div>
    </>
}

export default profile;
