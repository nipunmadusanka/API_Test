import Head from 'next/head'
import Image from 'next/image'
import { Input } from 'postcss'
import Box from '../components/Box/Box'
import styles from '../styles/Home.module.css'
import react,{ useState } from 'react'
import Box2 from '../components/Box/Box2/Box2'
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
  // const fetchData = async () => {
  //   try {
  //     await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "*/*",
  //         "api-key": "1",
  //         "Access-Control-Allow-Headers": "Content-Type",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Credentials": "true",
  //         "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  //         "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"

  //       },
  //     })
  //       .then(
  //         async (res) => await res.json()
  //       )
  //       .then((data) => {
  //         console.log(data);
  //         setdrinkList(data);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // fetchData();
  return (
    <div className='bg-slate-600 h-screen'>
    <div className='bg-slate-600 items-center justify-between'>
    <div className='flex items-center justify-center py-16 w-full'> 
     <form className='my-2' onSubmit={handleSubmit}> 
      <input type="text" name='search' placeholder='search' className='border-2 border-black p-1 w-96'
      value={searchdrink}
      onChange={submt}
      ></input>
      <button
      type="submit" 
      // onClick={()=>setsearchdrink(value)} 
      className='bg-white text-black border-2 border-black p-1 w-44 font-bold hover:bg-amber-200'>Search</button>
     </form>
     </div>
     <div className='flex justify-end items-end mx-24'>
     <div className='text-right mt-4'>
      <button onClick={()=>{setOpen(true); setOpen1(false)}} className='bg-white hover:bg-amber-200 px-7 border-2 border-b-neutral-800'>Grid</button>
      <button onClick={()=>{setOpen1(true); setOpen(false)}} className='bg-white hover:bg-amber-200 px-7 border-2 border-b-neutral-800'>Column</button>
     </div>
     </div>
     <div className={`flex justify-center items-center my-5 ${ open ? '':'hidden' } `}>
     <div className='grid grid-cols-4 gap-1'>
     {drinkList.drinks.map((t, index) => (
                        <Box title={t.strDrink} type={t.strAlcoholic} thumb={t.strDrinkThumb} tags={t.strTags}/>
                      ))}
      </div>
     </div>
     <div className={`grid grid-cols-1 gap-1 my-5 ${ open1 ? '':'hidden' } `}>
     {drinkList.drinks.map((t, index) => (
                        <Box2 title={t.strDrink} type={t.strAlcoholic} thumb={t.strDrinkThumb} des={t.strInstructions} tags={t.strTags}/>
                      ))}
     </div>
    </div>
    </div>
  )
}
