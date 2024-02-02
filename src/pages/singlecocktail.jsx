import React, { useEffect, useState } from "react";
import styles from "../style.module.css";
import Loading from "../components/loading";
import { useParams, Link } from "react-router-dom";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const Singlecocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className={styles.sectiontitle}>No cocktail to display</h2>;
  }

  const { name, image, category, info, glass, instructions, ingredients } = cocktail;

  return (
    <section className={`${styles.section} ${styles.cocktailsection}`}>
      <Link to='/' className={`${styles.btn} ${styles.btnprimary}`}>
        Back home
      </Link>
      <h2 className={styles.sectiontitle}>{name}</h2>
      <div className={styles.drink}>
        <img src={image} alt={name} />
        <div className={styles.drinkinfo}>
          <p>
            <span className={styles.drinkdata}>Name:</span> {name}
          </p>
          <p>
            <span className={styles.drinkdata}>Category:</span> {category}
          </p>
          <p>
            <span className={styles.drinkdata}>Info:</span> {info}
          </p>
          <p>
            <span className={styles.drinkdata}>Glass:</span> {glass}
          </p>
          <p>
            <span className={styles.drinkdata}>Instructions:</span> {instructions}
          </p>
          <p>
            <span className={styles.drinkdata}>Ingredients:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Singlecocktail;
