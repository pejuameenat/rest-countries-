import { useEffect, useState } from 'react'
import Header from './Header'
import SearchQueries from './SearchQueries'
import CountryCard from './CountryCard'
import Loading from './Loading'
import  Error  from './Error';

const App = (props) => {
  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [query, setQuery] = useState({ countryName: '', selectOptions: '' })
  const [mode, setMode] = useState(props.darkMode)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('https://restcountries.com/v2/all')
      if (!res.ok) return
      const data = await res.json()
      setCountry(data)
      setIsLoading(false)
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setQuery((prevQuery) => ({ ...prevQuery, [name]: value }))
  }
  const handleSubmit = (e, word) => {
    e.preventDefault()
    setCountry((prevCounty) => {
      return prevCounty.filter((item) => {
          const lower = word.toLowerCase()
         return lower === item.name.toLowerCase() ? (
           item
         ) : (
           <strong className="text-sm text-center">
             oops! looks like the country cannot be found
           </strong>
         ) 
      })
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return  <Error />
  }
  return (
    <main
      className={
        mode
          ? 'bg-slate-800 duration-300 ease-in text-slate-300'
          : 'duration-300 ease-in'
      }
    >
      <Header mode={mode} setMode={setMode} />
      <SearchQueries
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        country={country}
      />
      <section className="max-w-4xl w-3/5 mx-auto p-5 grid place-items-center lg:w-full lg:max-w-full lg:grid-cols-4 gap-y-6 gap-x-4">
        {country.map((county, i) => {
          return <CountryCard key={i} {...county} countries={country} />
        })}
      </section>
    </main>
  )
}

export default App

