'use client'
import React, { useEffect, useState } from 'react'
import { VideoButton } from '../ui/videoButton'

const Services = () => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return ''
    }
    return (
        <div className="h-[90vh]">
            {' '}
            <div className="w-full h-[80vh] flex flex-row relative lg:flex-row md:flex-col max-md:flex-col">
                <VideoButton
                    videoLink={'/food.mp4'}
                    text="Analiza obecnego sposobu jedzenia, nauka poprawnych nawyków żywieniowych Wszystko jest w zasięgu ręki. "
                    buttonText="Więcej ->"
                    buttonLink={'/Oferta'}
                    title="Dieta"
                ></VideoButton>
                <VideoButton
                    videoLink={'/workout.mp4'}
                    text="Redukcja wagi, budowanie masy mięśniowej, przebiegnięcie pierwszego maratonu, poprawa gibkości…? Twój cel jest naszą motywacją."
                    buttonText="Więcej ->"
                    buttonLink={'/Oferta'}
                    title="Trening Personalny"
                ></VideoButton>
            </div>
        </div>
    )
}

export default Services
