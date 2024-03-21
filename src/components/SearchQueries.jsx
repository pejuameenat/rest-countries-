const SearchQueries = ({ query, handleChange, handleSubmit, country }) => {
  const regions = country.map(item=> item.region)
  console.log(regions);
  return (
    <form
      className="p-6 flex flex-col gap-5 justify-between lg:flex-row"
      onSubmit={(e) => handleSubmit(e, query.countryName)}
    >
      <div className="w-full relative border rounded-md shadow-md lg:w-3/6">
        <input
          type="text"
          name="countryName"
          id="country"
          placeholder="Search..."
          value={query.countryName}
          onChange={handleChange}
          className="block outline-0 w-full h-10 bg-transparent rounded-md p-1 focus:border focus:outline-black  "
        />
      </div>
      <div className="w-3/6 border font-thin text-slate-400 shadow-md rounded-md p-2 lg:w-3/12">
        select region
        <select
          name="selectOptions"
          id="selectOptions"
          value={query.selectOptions}
          onChange={handleChange}
          className="float-right bg-transparent border-l border-slate-950"
        ></select>
      </div>
    </form>
  )
}

export default SearchQueries
