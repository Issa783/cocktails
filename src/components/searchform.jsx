import React, { useEffect, useRef } from "react";
import styles from "../style.module.css"
import { useGlobalContext } from "../context";
const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext()
    const searchValue = useRef('')
    useEffect(()=>{
        searchValue.current.focus()
    },[])
    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }
    const handleSubmit = (e) => {
       e.preventDefault()
    }
    return(
       <section className={`${styles.section} ${styles.search}`}>
        <form className={styles.searchform} onSubmit={handleSubmit}>
            <div className={styles.formcontrol}>
                <label htmlFor="name">search your favorite cocktail</label>
                <input type="text" id="name" ref={searchValue} onChange={searchCocktail} />
            </div>
        </form>
       </section>
    )

}
export default SearchForm