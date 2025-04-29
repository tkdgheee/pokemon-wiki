import { lazy, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { axiosMultiplePokemonByID } from './RTK/Thunk'
import { Link, Router, Routes, Route, useNavigate} from 'react-router-dom'

const Main = lazy(()=> import('./pages/Main'))
const Detail = lazy(()=> import('./pages/Detail'))
const Search = lazy(()=> import('./pages/Search'))
const Favorite = lazy(()=> import('./pages/Favorite'))


function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const pokemonData = useSelector(state => state.pokemon)
  console.log(pokemonData)
  useEffect(()=>{
   dispatch(axiosMultiplePokemonByID(151))
  },[])

  return (
    <>
     <h1 className='text-5xl text-center m-5'>포켓몬 도감</h1>
     <nav className='text-3xl flex gap-[40px] m-[10px] justify-center'>
      <Link to = {'/'}>MAIN</Link>
      <Link to = {'/favorite'}>찜목록</Link>
      <div className='flex justify-center mb-1'>
      <input onChange={(e)=> navigate(`search?pokemon=${e.target.value}`)} 
      className='border-2 p-1.5 border-gray-600 text-xs' 
      type="text" 
      placeholder='포켓몬 이름을 입력하세요'
      />
      <span className='ml-1 text-2xl'>🔍</span>
      </div>
     </nav>

      <main className='flex justify-center flex-wrap'>
        <Routes>
          <Route path = {'/'} element={<Main />} />
          <Route path = {'/detail/:pokemonId'} element={<Detail />} />
          <Route path = {'/search'} element={<Search />} />
          <Route path = {'/favorite'} element={<Favorite />} />
        </Routes>
      </main>
    </>
  )
}

export default App
