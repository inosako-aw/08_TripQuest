import React from 'react'

function Page1() {
  return (
    <div className="page" id="page1">
        <img src="../../public/decoration_top.svg" alt="画面上部の装飾" className="decoration_top" />
        <img src="../../public/title_logo.svg" alt="偉人から学ぶ人生レシピ　TripQuestTripQuest" className="title_logo" />
        <div id="Scroll1">
            <img src="Scroll_circle.svg" alt="" className="Scroll_circle" />
            <img src="Scroll_Vector.svg" alt="" className="Scroll_Vector" />
        </div>
        <img src="../../public/decoration_bottom.svg" alt="画面下部の装飾" className="decoration_bottom" />
    </div>
  )
}

export default Page1