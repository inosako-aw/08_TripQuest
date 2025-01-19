import React from 'react'
import { useState, useEffect } from 'react';


const Page7 = () => {
    const images = [
        "../../public/quest_img5.png",
        "../../public/quest_img6.png",
        "../../public/quest_img7.png",
        "../../public/quest_img8.png",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="page" id="page7">
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
                <h2 className="quest_place">そば処　浅野屋</h2>
                <p className="quest_access"><a href="https://www.ekiten.jp/shop_281076/access/">アクセス情報</a></p>
                <h1 className="quest_title1">芥川の愛した<br />料理を味わいに行こう</h1>
                <p className="quest_episode">移動中のちょこっとエピソード</p>

                
                <p className="quest_text">出前蕎麦</p>
                <p className="quest_clear">
                    クリア条件<br />
                    芥川の愛した料理を味わう　（写真二枚）
                </p>
            </div>
        </div>
    );
};

export default Page7