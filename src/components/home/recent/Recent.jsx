import React, { useEffect, useState, useRef } from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"
import { useContext } from "react"
import { FilterContext } from "../../../context/FilterContext"
import BirdsAnimation from "./BirdsAnimation"

const Recent = () => {
  const { filters } = useContext(FilterContext)
  const hasFilters = filters.area || filters.bedrooms || filters.type

  const [showBirds, setShowBirds] = useState(false)
  const recentRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const section = recentRef.current
      if (section) {
        const { top } = section.getBoundingClientRect()
        if (top <= window.innerHeight * 0.7) {
          setShowBirds(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section className='recent padding' ref={recentRef} style={{ position: "relative" }}>
        {/* {showBirds && <BirdsAnimation />} */}
        <div className='container'>
          <Heading
            title={hasFilters ? 'Casas disponibles para ti' : 'Propiedades destacadas'}
            subtitle={
              hasFilters
                ? 'Explora las propiedades que coinciden con tu búsqueda.'
                : 'Explora nuestra selección de propiedades exclusivas, diseñadas para satisfacer tus necesidades y superar tus expectativas. Encuentra el hogar ideal para ti y tu familia en las mejores ubicaciones.'
            }
          />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
