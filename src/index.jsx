import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { FilterProvider } from "./context/FilterContext"


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
   <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>
)
