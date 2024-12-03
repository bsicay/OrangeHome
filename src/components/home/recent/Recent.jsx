import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Propiedades destacadas' subtitle='Explora nuestra selección de propiedades exclusivas, diseñadas para satisfacer tus necesidades y superar tus expectativas. Encuentra el hogar ideal para ti y tu familia en las mejores ubicaciones.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
