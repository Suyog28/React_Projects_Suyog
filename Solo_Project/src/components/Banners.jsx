import React from 'react'


// eslint-disable-next-line react/prop-types
function Banners({ title, text, status, icon }) {

    return (
        <div>
            <div className='container-banner'>
                {/* multiline */}
                <div className={`${status}-multiline-Banners`}>

                    <p className='title'>{icon}  {title}</p>
                    <p>{text}</p>
                </div>
                {/* Singleline */}
                <div className={`${status}-Singleline-Banners`}>
                    <p> {icon}  {title}</p>
                </div>
            </div>
        </div >
    )
}

export default Banners