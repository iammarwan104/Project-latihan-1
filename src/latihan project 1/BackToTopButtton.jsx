import React, { useState } from 'react';
export default function BackToTopButton() {
    const [showButton, setShowButton] = useState(false)
    window.onscroll = () => {
        if (window.scrollY < 597) {
            setShowButton(false);
        }
        if (window.scrollY > 597) {
            setShowButton(true);
        }
    }
    return (
        <>
            <a href='#dashboard' className={`fixed bottom-4 right-4 rotate-180 text-3xl ${showButton ? 'block' : 'hidden'}`}>🔰</a>
        </>
    )
}