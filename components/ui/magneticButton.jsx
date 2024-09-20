'use client'
import React, { useRef, useState, useEffect } from 'react'

const MagneticButton = ({
    bgcolor,
    text,
    textStyle,
    borderRadius,
    borderSize,
    onClick,
    height,
    width,
    font,
    fontWeight,
    shadow,
    shake,
}) => {
    // Refs to store references to DOM elements
    const buttonRef = useRef(null)
    const divRef = useRef(null)

    // State variables to track mouse position, enter state, button position, offsets, and shaking state
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [mouseEnter, setMouseEnter] = useState(false)
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
    const [offsetNumberx, setOffsetNumberx] = useState(0)
    const [offsetNumbery, setOffsetNumbery] = useState(0)
    const [isShaking, setShaking] = useState(false)

    // Function to handle mouse move and calculate offsets
    const handleMouseMove = () => {
        if (buttonPosition.x < position.x) {
            setOffsetNumberx(20 + (position.x - buttonPosition.x))
        }
        if (buttonPosition.x > position.x) {
            setOffsetNumberx(-20 - (buttonPosition.x - position.x))
        }
        if (buttonPosition.y > position.y) {
            setOffsetNumbery(-20 - (buttonPosition.y - position.y))
        }
        if (buttonPosition.y < position.y) {
            setOffsetNumbery(20 + (position.y - buttonPosition.y))
        }
    }

    // Function to handle mouse enter event
    const handleMouseEnter = () => {
        setMouseEnter(true)
    }

    // Function to handle mouse leave event
    const handleMouseLeave = () => {
        setMouseEnter(false)
        setOffsetNumberx(0)
        setOffsetNumbery(0)
        console.log('true')
        if (shake) {
            if (!isShaking) {
                setShaking(true)
            }
        }
    }

    // Effect to update the position of the button and listen for mouse move events
    useEffect(() => {
        const handleMouseMove = (event) => {
            const mouseX = event.clientX
            const mouseY = event.clientY
            setPosition({ x: mouseX, y: mouseY })
        }

        if (buttonRef.current) {
            const buttonElement = buttonRef.current
            const { left, top, width, height } =
                buttonElement.getBoundingClientRect()
            const middleX = left + width / 2
            const middleY = top + height / 2

            setButtonPosition({ x: middleX, y: middleY })
        }

        window.addEventListener('mousemove', handleMouseMove)

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [position])

    // Function to handle button click
    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }

    // Style for the inner div with dynamic transform
    const divStyles = {
        transform: `translate(${50 + offsetNumberx / 3}%, ${
            -50 + offsetNumbery
        }%)`,
    }

    // Function to handle animation end
    const handleAnimationEnd = () => {
        setShaking(false)
    }

    return (
        <>
            <div
                className={`${bgcolor} ${borderSize} ${borderRadius} ${shadow} ${
                    isShaking ? 'shake' : ''
                }`}
            >
                <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    onAnimationEnd={handleAnimationEnd}
                    ref={buttonRef}
                    className={`magnetic-button ${height} ${borderSize} ${borderRadius} ${fontWeight} ${width} ${
                        isShaking ? 'shake' : ''
                    }`}
                    onClick={handleClick}
                >
                    <div
                        ref={divRef}
                        className={`absolute top-1/2 right-1/2 ${font}`}
                        style={divStyles}
                    >
                        <p className={`${textStyle}`}>{text}</p>
                    </div>
                </button>
            </div>
        </>
    )
}

export default MagneticButton
