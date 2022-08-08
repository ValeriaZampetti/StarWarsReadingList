import { element } from "prop-types";

const API_URL = "https://www.swapi.tech/api/"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: []
		},
		actions: {
			updateResourceList: async (resource, list) => {
				const resourceList = await getResources(resource)
				// for(element of resourceList) {
				// 	const details = await getResources(`${resource}/${element.uid}`, true)
				// 	element.details = details
				// }
				setStore({
					[list]: resourceList
				})
			},
			updateAllLists: async () =>{
				const actions = getActions()
				await actions.updateResourceList('people', 'characters')
				await actions.updateResourceList('planets', 'planets')
				await actions.updateResourceList('vehicles', 'vehicles')
			}
		}
	};
};

async function getResources(resource, detalis = false) {
	try {
		const response = await fetch(
		`${API_URL}${resource}`
	)
	const body = await response.json()
	if (response.status !==200) {
		alert(`no pudimos cargar los ${resource}`)
		return
	}	
		if (detalis) {
			return body.result
		}
		return body.results
	}
	catch(error) {
		alert("fallamos ='(")
		console.log(error)
	} 
}


export default getState;