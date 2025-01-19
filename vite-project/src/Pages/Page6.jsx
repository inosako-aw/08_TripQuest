import React from 'react'
import { useState, useEffect } from 'react';

const Page6 = () => {
    const images = [
        "../../public/quest_img1.png",
        "../../public/quest_img2.png",
        "../../public/quest_img3.png",
        "../../public/quest_img4.png",
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [isFading, setIsFading] = useState(false); // フェードアウト用の状態を追加

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleFadeOut = () => {
        setIsFading(true); // クリックでフェードアウト開始
    };

    return (
        <div className="page" id="page6">
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
                <h2 className="quest_place">田端文志村記念館</h2>
                <p className="quest_access">
                    <a href="https://kitabunka.or.jp/tabata/information/">アクセス情報</a>
                </p>
                <h1 className="quest_title1">文豪が集まる地<br />田端の歴史を見てみよう</h1>
                <p className="quest_episode">移動中のちょこっとエピソード</p>
                <p
                    className={`quest_text ${isFading ? "fade-out" : ""}`} // フェードアウトのクラスを動的に追加
                    onClick={handleFadeOut} // クリックイベントでフェードアウトを開始
                >
                    「1日180本」何の数字？
                </p>
                <p
                    className={`hidden-text ${isFading ? "visible" : ""}`} // フェードアウト後に表示
                >
                    1.ヘビースモーカー<br />
                    １日に180本も吸っていたことがあったようです。<br />
                    彼の師である夏目漱石も煙草を吸っており、<br />
                    その時代の文豪たちも吸っている人が多かったそうです。
                </p>
                <p className="quest_clear">
                    クリア条件<br />
                    芥川の一人称は独特？展示品を鑑賞して探してみよう！
                </p>
            </div>
        </div>
    );
};

export default Page6