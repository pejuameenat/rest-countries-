import { useEffect, useState } from 'react'
import Header from './Header'
import SearchQueries from './SearchQueries'
import CountryCard from './CountryCard'

const App = () => {
  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [query, setQuery] = useState({ countryName: '' })

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('https://restcountries.com/v2/all')
      if(!res.ok)return
      const data = await res.json()
      setCountry(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e, word) => {
   const { name, value } = e.target
      setQuery(prevQuery=> ({...prevQuery, [name]: value }))
      setCountry(prevCounty=>{
       return prevCounty.filter((item) => item.name === word)
      })
      }
  
  useEffect(()=>{
    fetchData()
  }, [])

  if(isLoading){
    return <p className="text-center font-semibold ">Loading...</p>
  }

  return (
    <main className="">
      <Header />
      <SearchQueries query={query} handleChange={handleChange}/>
      <section className=" p-5 grid lg:grid-cols-4 gap-y-6 gap-x-4">
        {country.map((county, i) => {
          return <CountryCard key={i} {...county} countries={country} />
        })}
      </section>
    </main>
  )
}

export default App

// bg - slate - 800