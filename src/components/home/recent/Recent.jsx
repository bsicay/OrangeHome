import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"
import { useContext } from "react"
import { FilterContext } from "../../../context/FilterContext"


const Recent = () => {
  const { filters } = useContext(FilterContext)
  const hasFilters = filters.area || filters.bedrooms || filters.type
  return (
    <>
      <section className='recent padding'>
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
