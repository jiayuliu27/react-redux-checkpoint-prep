const initialState = {
	registryItems: []
};

export default (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_ITEM_TO_REGISTRY':
			// create copy of registryItems with new item added
			var regItems = state.registryItems.concat(action.item);
			return Object.assign({}, state, { 
				registryItems: regItems 
			});
		default:
			return state;
	}
};
