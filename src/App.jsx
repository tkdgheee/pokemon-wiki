import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { axiosMultiplePokemonByID } from './RTK/Thunk'
import { Link, Router, Routes, Route} from 'react-router-dom'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Favorite from './pages/Favorite'
import Main from './pages/Main'

function App() {
  const dispatch = useDispatch()
  const pokemonData = useSelector(state => state.pokemon)
  console.log(pokemonData)
  useEffect(()=>{
   dispatch(axiosMultiplePokemonByID(151))
  },[])

  return (
    <>
     <h1 className='text-6xl text-center'>포켓몬 도감</h1>
     <nav className='flex gap-[40px] m-[10px] justify-center'>
      <Link to = {'/'}>MAIN</Link>
      <Link to = {'/detail/:pokemon'}>상세정보</Link>
      <Link to = {'/search'}>검색</Link>
      <Link to = {'/favorite'}>찜목록</Link>
     </nav>

      <main className='flex justify-center flex-wrap'>
        <Routes>
          <Route path = {'/'} element={<Main />} />
          <Route path = {'/detail/:pokemon'} element={<Detail />} />
          <Route path = {'/search'} element={<Search />} />
          <Route path = {'/favorite'} element={<Favorite />} />
        </Routes>
      </main>
    </>
  )
}

export default App
