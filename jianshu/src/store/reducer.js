const defaultState = {
   focused: false
};

export default (state=defaultState, action)=>{
   if(action.type === 'searchBox_focus'){
      return {
         focused: true
      };
   }
   if(action.type === 'searchBox_blur'){
      return {
         focused: false
      };
   }
   return state;
}