import { NavLink } from "react-router-dom"

function StaticsNav({setCategory,category}) {

  return (
    <>
        <NavLink onClick={()=>setCategory(category)} className={({isActive})=>isActive? "sideActive":"sideInactive"}>{category}</NavLink>
    </>
  )
}

export default StaticsNav