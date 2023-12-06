import React from 'react'
import Button from './Button/Button'
import Card from './Card/Card'
import logo from '../assets/logo.png'
import SlideShow from './SlideShow/SlideShow'

function Components() {

    const gallery = [
        {
            image: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/299692999_518695410257505_2833563506131332857_n.png?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=hSJZiiHJmSUAX9-9pRk&_nc_ht=scontent-lax3-1.xx&oh=00_AfBMRw_srCblafd3K8V45nd0uSrbPV_Fhwbsz7wuLKVEJA&oe=656FF26B",
            alt: "logo"
        },
        {
            image: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/299692999_518695410257505_2833563506131332857_n.png?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=hSJZiiHJmSUAX9-9pRk&_nc_ht=scontent-lax3-1.xx&oh=00_AfBMRw_srCblafd3K8V45nd0uSrbPV_Fhwbsz7wuLKVEJA&oe=656FF26B",
            alt: "logo"
        },
    ]



    return (
        <div>
            {/* <Button text="Hello" onClick={() => alert('button clicked')} />
            <Card
                image={logo}
                alt="logo"
                title="Logo"
                desc="This is a logo"
            />
            <SlideShow gallery={gallery} /> */}
        </div>
    )
}

export default Components