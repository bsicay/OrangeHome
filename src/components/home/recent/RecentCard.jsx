import React from "react"
import { list } from "../../data/Data"
import { FaBed, FaBath } from "react-icons/fa"
import { BiArea } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { FilterContext } from "../../../context/FilterContext"




const RecentCard = () => {

  const { filters } = useContext(FilterContext)

  const filteredList = list.filter((property) => {
    const matchArea = filters.area ? property.location === filters.area : true
    const matchBedrooms = filters.bedrooms ? property.bedrooms === parseInt(filters.bedrooms) : true
    const matchType = filters.type ? property.type.toLowerCase() === filters.type.toLowerCase() : true
    return matchArea && matchBedrooms && matchType
  })
  return (
    <>
      <div className='content grid3 mtop'>
        {filteredList.map((val) => {
          const { id, cover, category, location, name, bedrooms, bathrooms, size, type } = val
          return (
            <Link to={`/house/${id}`} key={id}>
              <div className='box shadow'>
                <div className='img'>
                  <img src={cover} alt='' />
                </div>
                <div className='text'>
                  <div className='category flex'>
                    <span
                      style={{
                        background: category === "En venta" ? "#25b5791a" : "#ff98001a",
                        color: category === "En venta" ? "#25b579" : "#ff9800",
                      }}
                    >
                      {category}
                    </span>
                    <i className='fa fa-heart'></i>
                  </div>
                  <h4>{name}</h4>
                  <p>
                    <i className='fa fa-location-dot'></i> {location}
                  </p>
                </div>
                <div className='button flex'>
                  <div className='details flex'>
                    <div className='detail'>
                      <FaBed /> {bedrooms}
                    </div>
                    <div className='detail'>
                      <FaBath /> {bathrooms}
                    </div>
                    <div className='detail'>
                      <BiArea /> {size} m²
                    </div>
                  </div>
                  <span>{type}</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
