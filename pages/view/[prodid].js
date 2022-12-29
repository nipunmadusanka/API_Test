import react,{ useState } from 'react'
import { useRouter } from 'next/router'
import Afterglow from './Afterglow';

function Product() {
    const dataDrinks = {"drinks": []};
    const [drinkList, setdrinkList] = useState(dataDrinks);
    const propss = useRouter()
    const prdid = propss.query.prodid
    const callAPI = async () => {
		try {
			const res = await fetch(
				`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`+prdid,
			);
			const data = await res.json();
			console.log(data);
            setdrinkList(data);
		} catch (err) {
			console.log(err);
		}
	};
    callAPI()
  return (
    <div>
           {drinkList.drinks.map((t, index) => (
                     <Afterglow instr={t.strInstructions} imgs={t.strDrinkThumb} brnd={t.strIngredient1} title={t.strDrink} 
                     ing1={t.strIngredient1}
                     ing2={t.strIngredient2}
                     ing3={t.strIngredient3}
                     ing4={t.strIngredient4}/>
            ))}
    </div>
  )
}

export default Product