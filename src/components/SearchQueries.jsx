
const SearchQueries = ({query, handleChange}) => {
  return (
    <div className="flex justify-between p-6">
      <div className="relative border rounded-md shadow-3xl w-3/6">
        <input
          type="text"
          name="countryName"
          id="country"
          placeholder="Search..."
          value={query.countryName}
          onChange={(e)=>handleChange(e, query.countryName)}
          className="block outline-0 w-full bg-transparent p-1 focus:border focus:outline-black  "
        />
      </div>
      <div className="w-3/12 border shadow-md rounded-md">
        <select name="" id=""></select>
      </div>
    </div>
  )
}

export default SearchQueries