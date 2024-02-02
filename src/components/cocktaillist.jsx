import React from "react";
import styles from "../style.module.css"
import Loading from "./loading";
import CockTail from "./cocktail";
import { useGlobalContext } from "../context";
const CockTaillist = () => {
    const{cocktails,loading} = useGlobalContext()
    if(loading){
        return  <Loading />
    }
    if(cocktails.length < 1){
        return(
            <h2 className={styles.sectiontitle}>
                 no cocktails matched your search criteria
            </h2>
        )
    }
  return(
    <section className={styles.section}>
        <h2 className={styles.sectiontitle}>
            cocktails
        </h2>
        <div className={styles.cocktailscenter}>
            {cocktails.map((item)=> {
                return <CockTail key={item.id}{...item} />
            })}
        </div>
    </section>
  )
}
export default CockTaillist