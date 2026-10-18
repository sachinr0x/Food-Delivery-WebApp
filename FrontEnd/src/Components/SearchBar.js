const searchIcon = new URL('../../Resources/icons_and_logos/search-icon.svg', import.meta.url).href

const SearchBar = (props) => {
    const {searchText, onSearchChange} = props;
    return (<div className = "search-bar">
        <input type="text" placeholder= "Search for restaurants or cuisines" onChange = {(e) => {
            onSearchChange(e.target.value)
        }}/>
        <img className = 'search-icon' src={searchIcon} alt="Search" onClick={() => {
             //ToBeWritten 
        }}/>
        </div>
    )
}
export default SearchBar;