import React from 'react'
import { useState, useEffect } from 'react';


const Page8 = () => {
    const images = [
        "../../public/quest_img9.png",
        "../../public/quest_img10.png",
        "../../public/quest_img11.png",
        "../../public/quest_img12.png",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="page" id="page8">
            <div className="image-container">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`画像${index + 1}`}
                        className={`fade-image ${
                            currentImage === index ? "visible" : "hidden"
                        }`}
                    />
                ))}
            </div>
            <div className="text-container">
            <h2 className="quest_place">東洋文庫ミュージアム</h2>
                <p className="quest_access"><a href="https://toyo-bunko.or.jp/access/">アクセス情報</a></p>
                <h1 className="quest_title1">芥川龍之介の<br />小説を読んでみよう</h1>
                <p className="quest_episode">移動中のちょこっとエピソード</p>
                <p className="quest_text">最期の言葉</p>
                <p className="quest_clear">
                    クリア条件<br />
                    芥川龍之介の小説を読む
                </p>
            </div>
        </div>
    );
};

export default Page8