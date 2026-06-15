function SearchBar(){
    return(
        <>
        <h2 className="search-title">Explore o universo das APIs</h2>
        <div className="search-container">
            <input type="text" className="search-bar" placeholder="Pesquise uma API..."/>
            <button className="btn-search">Buscar</button>
        </div>
        </>
    )
}
export default SearchBar;