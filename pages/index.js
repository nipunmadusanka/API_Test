import Head from 'next/head'
import Image from 'next/image'
import { Input } from 'postcss'
import Box from '../components/Box/Box'
import styles from '../styles/Home.module.css'
import react,{ useState } from 'react'
import Box2 from '../components/Box/Box2/list'
import { data } from 'autoprefixer'

const dataDrinks = {"drinks": []};

export default function Home() {
  const drinks= {
        strDrink: "1-900-FUK-MEUP",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
        idDrink: "15395"
  }
  const[open, setOpen]=useState(true);
  const[open1, setOpen1]=useState(false);
  const [drinkList, setdrinkList] = useState(dataDrinks);
  const [searchdrink, setsearchdrink] = useState("margarita");
  console.log(dataDrinks);
  console.log("hbhbhg");
  
  const callAPI = async () => {
		try {
			const res = await fetch(
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`+searchdrink,
			);
			const data = await res.json();
			console.log(data);
      setdrinkList(data);
		} catch (err) {
			console.log(err);
		}
	};

  callAPI()

  const submt= (event) => {
    const name = event.target.value;
    setsearchdrink(name);
    console.log(name);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchdrink);
    console.log("test");
  }
  
  return (
    <div className='bg-violet-50 w-screen'>
    
    <div className='items-center justify-center'>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <div className='input-group relative flex my-16 items-stretch w-full mb-4 rounded' onSubmit={handleSubmit}>
            <input type="search" className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder="Search" aria-label="Search" aria-describedby="button-addon2"
            value={searchdrink} onChange={submt}></input>
            <span class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>

     <div className='flex justify-end items-end mx-24'>
     <div className='text-right mt-4'>
      <button onClick={()=>{setOpen(true); setOpen1(false)}} className='hover:bg-gray-200 px-3 '>
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
      </button>
      <button onClick={()=>{setOpen1(true); setOpen(false)}} className='hover:bg-gray-200 px-'>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
      </button>
     </div>
     </div>


     <div className={`flex justify-center items-center my-5 ${ open ? '':'hidden' } `}>
     <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 '>
     {drinkList.drinks.map((t, index) => (
                        <Box title={t.strDrink} type={t.strAlcoholic} thumb={t.strDrinkThumb} tags={t.strIngredient1} idDrink={t.idDrink}/>
                      ))}
      </div>
     </div>

     <div className={`grid grid-cols-1 gap-1 my-5 ${ open1 ? '':'hidden' } `}>
     {drinkList.drinks.map((t, index) => (
                        <Box2 title={t.strDrink} type={t.strAlcoholic} thumb={t.strDrinkThumb} des={t.strInstructions} tags={t.strIngredient1} idDrink={t.idDrink}/>
                      ))}
     </div>
    </div>
    </div>
  )
}
