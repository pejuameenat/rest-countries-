const CountryCard = ({
  name,
  capital,
  flag,
  region,
  population,
  languages,
}) => {
  return (
    <div className="shadow-2xl rounded-md">
      <img
        src={flag}
        alt="country flag"
        className="max-w-full w-full h-fit rounded-t-md"
      />
      <article className="p-5">
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
        <h5 className="pb-3.5 text-sm">Languages</h5>
        <div className="flex flex-wrap">
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
