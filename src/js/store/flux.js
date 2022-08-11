const API_URL = "https://www.swapi.tech/api"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			singleItem: {},
			favorites: [],
			heartButton: "outline-",
		},
		actions: {
			getItems: async (resource) => {
				try {
					const response = await fetch(
					`${API_URL}/${resource}/?page=1&limit=82`
					);
					const body = await response.json();
					if(response.status !== 200) {
						alert("no pudimos cargar items");
						return;
					}
					setStore({
						[`${resource}`]: body.results,
					})
				} catch (error) {
					alert("servidor caido")
				}
			},
			getSingleItem: async (resource, uid) => {
				try {
					const response = await fetch(
						`${API_URL}/${resource}/${uid}`
					);
					const body = await response.json();
					if (response.status !== 200){
						alert("no pudimos cargar personajes");
						return;
					}
					setStore({
						singleItem: {
							...body.result.properties, 
							uid: body.result.uid,
							description: body.result.description,
						}				
					})
				} catch (error) {
					alert("promesa rechazada, servidor caido")
				}
			},
			removeSingleItem: async(resource) => {
				setStore({
					singleItem: ""
				})
			},
			addFavorites: (resource) => {
				const store = getStore()
				if (store.favorites.find(favorite => favorite.name == resource.name)) return
				setStore({
					favorites: [...store.favorites, resource]
				})
			},
			deleteFavorites: (resource) => {
				setStore({
					favorites: [...getStore().favorites.filter((item, index)=>{
						if (resource.name !== item.name) return true;
					})]
				})
			}, 
			holdHeartButton: () => {
				setStore({
					heartButton: "",
				}
				)
			}
		}
	};
};

export default getState;