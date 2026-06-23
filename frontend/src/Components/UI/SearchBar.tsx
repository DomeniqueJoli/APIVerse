interface SearchBarProps {
    valor: string;
    onChange: (valor: string) => void;
}

function SearchBar({ valor, onChange }: SearchBarProps) {
    return (
        <>
            <h2 className="search-title">
                Explore o universo das APIs
            </h2>

            <div className="search-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Pesquise uma API..."
                    value={valor}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </>
    );
}

export default SearchBar;