const getState = ({ getStore, setStore }) => {
    return {
        store: {
            characters: [],
            locations: [],
            episodes: [],
            favorites: [],
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

            addFavorite: (item) => {
                const store = getStore();
                const isFavorite = store.favorites.includes(item);

                if (isFavorite) {
                    setStore({
                        favorites: store.favorites.filter((fav) => fav !== item),
                    });
                } else {
                    setStore({
                        favorites: [...store.favorites, item],
                    });
                }
            },
        },
    };
};

export default getState;
