const initialstate ={
    data: [],


}

const reducer= (state =initialstate, action) => {
  switch(action.type){
      case 'FETCH_DATA':
        return {...state,data : action.payload};
        
      case "ERROR":
        return{error: action.payload};
        
      default:
          return state;
  }
  
}
export default reducer;