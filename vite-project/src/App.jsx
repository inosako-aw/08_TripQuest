import React, { useState, useEffect } from "react";
import Page1 from "./Pages/Page1";
import Page2 from "./pages/Page2";

const pages = [
    <Page1 />,
    <Page2 />,
];

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const handleScroll = (e) => {
            if (isTransitioning) return;

            if (e.deltaX > 0 && currentPage < pages.length - 1) {
                setIsTransitioning(true);
                setCurrentPage((prev) => prev + 1);
            } else if (e.deltaX < 0 && currentPage > 0) {
                setIsTransitioning(true);
                setCurrentPage((prev) => prev - 1);
            }

            setTimeout(() => setIsTransitioning(false), 700);
        };

        window.addEventListener("wheel", handleScroll);
        return () => window.removeEventListener("wheel", handleScroll);
    }, [currentPage, isTransitioning]);

    return (
        <div className="FlipBook-container">
            <div className="page-wrapper">{pages[currentPage]}</div>
        </div>
    );
}

export default App;
