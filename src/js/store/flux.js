const getState = ({ getStore, setStore }) => {
    return {
        store: {
            characters: [],
            locations: [],
            episodes: [],
            favorites: [],
            detailedData: null,
        },
        actions: {
            getCharacters: async () => {
                try {
                    const response = await fetch("https://rickandmortyapi.com/api/character");
                    const data = await response.json();
                    setStore({ characters: data.results });
                } catch (error) {
                    console.log("error:", error);
                }
            },

            getLocations: async () => {
                try {
                    const response = await fetch("https://rickandmortyapi.com/api/location");
                    const data = await response.json();
                    setStore({ locations: data.results });
                } catch (error) {
                    console.log("error:", error);
                }
            },

            getEpisodes: async () => {
                try {
                    const response = await fetch("https://rickandmortyapi.com/api/episode");
                    const data = await response.json();
                    setStore({ episodes: data.results });
                } catch (error) {
                    console.log("error:", error);
                }
            },

            getData: async (type, id) => {
                try {
                    const response = await fetch(`https://rickandmortyapi.com/api/${type}/${id}`);
                    const data = await response.json();
                    setStore({ detailedData: data });
                } catch (error) {
                    console.error(`Error fetching ${type} data:`, error);
                }
            },

            addFavorite: (item, type) => {
                const store = getStore();
                const favoriteItem = { id: item.id, name: item.name, type: type };
                const isFavorite = store.favorites.some(fav => fav.id === item.id && fav.type === type);
    
                if (isFavorite) {
                    setStore({
                        favorites: store.favorites.filter(fav => fav.id !== item.id || fav.type !== type),
                    });
                } else {
                    setStore({
                        favorites: [...store.favorites, favoriteItem],
                    });
                }
            },

            isFavorite: (id, type) => {
                const store = getStore();
                return store.favorites.some(fav => fav.id === id && fav.type === type);
            },

            removeFavorite: (id, type) => {
                const store = getStore();
                setStore({
                    favorites: store.favorites.filter(fav => fav.id !== id || fav.type !== type),
                });
            },

            navigateToFavorite: (type, id, navigate) => {
                navigate(`/${type}/${id}`);
            }
        },
    };
};

export default getState;
