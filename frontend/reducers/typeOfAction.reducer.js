export default function(typeOfAction = '',action) {
  
    if(action.type == 'buy') {

        var newTypeOfAction =action.typeOfAction;
        console.log('Id from reducer------',newTypeOfAction);
        return newTypeOfAction;
      
    }
    if(action.type == 'sell') {

        var newTypeOfAction =action.typeOfAction;
        console.log('Id from reducer------',newTypeOfAction);
        return newTypeOfAction;
      
    }
    else 
    {    
        return typeOfAction; 
    }
    
  }