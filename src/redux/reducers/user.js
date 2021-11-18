const initialState = {
    item: null,
  };
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
            item: action.payload ?? state
        };
    
      default:
        return state;
    }
  };
  
  export default user;