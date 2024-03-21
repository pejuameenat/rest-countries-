const CountryCard = ({
  name,
  capital,
  flag,
  region,
  population,
  languages,
}) => {
  return (
    <div className="shadow-2xl rounded-md flex flex-col">
      <img
        src={flag}
        alt="country flag"
        className="block max-w-full w-full rounded-t-md basis-1/2 m-0"
      />
      <article className="p-5 basis-1/2">
        <h2 className="font-semibold">{name}</h2>
        <div className="text-sm">
          <strong>Population: </strong>
          <span>{population}</span>
        </div>
        <div className="text-sm">
          <strong>Region: </strong>
          <span>{region}</span>
        </div>
        <div className="text-sm">
          <strong>Capital: </strong>
          <span>{capital}</span>
        </div>
        <h5 className="pb-3.5 text-sm lg:hidden">Languages</h5>
        <div className="flex flex-wrap lg:hidden"> 
          {languages.map((l, i) => (
            <span key={i} className="p-2 shadow-md">
              {l.name}
            </span>
          ))}
        </div>
      </article>
    </div>
  )
}

export default CountryCard
