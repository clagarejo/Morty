// @ts-nocheck
import {
    useState,
    useReducer,
    useMemo,
    useRef,
    useCallback,
} from "react";


import Search from "./Search";
import useCharacters from '../hooks/useCharacter';

const initialState = {
    favorites: [],
};

const API = 'https://rickandmortyapi.com/api/character/';

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };

        default:
            return state;
    }
};

const Characters = () => {
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState("");
    const searchInput = useRef(null);

    const characters = useCharacters(API);


    const handleClick = (favorite) => {
        dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
    };

    // const handleSearch = () => {
    //     setSearch(searchInput.current.value);
    // };

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, []);

    // const filteredUsers = characters.filter((user) => {
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // });

    const filteredUsers = useMemo(
        () =>
            characters.filter((user) => {
                return user.name.toLowerCase().includes(search.toLowerCase());
            }),

        [characters, search]
    );

    return (
        <>
            <div className="row">
                {favorites.favorites.map((favorite) => (
                    <li key={favorite.id}>
                        <img
                            className="rounded-circle mr-3 mb-4"
                            src={favorite.image}
                            alt="Profile Favorite"
                        />
                    </li>
                ))}
            </div>

            <Search
                search={search}
                searchInput={searchInput}
                handleSearch={handleSearch}
            />

            <div className="Characters d-flex">
                <div className="container">
                    <div className="row">
                        {filteredUsers.map((character) => (
                            <div className="col" key={character.id}>
                                <>
                                    <img
                                        className="character__img rounded-circle"
                                        src={character.image}
                                        alt="Profile"
                                    />

                                    <h2 className="character__name mb-5">{character.name}</h2>

                                    <button
                                        className="btn btn-info mb-4"
                                        type="button"
                                        onClick={() => handleClick(character)}
                                    >
                                        Agregar a favoritos
                                    </button>
                                </>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Characters;
