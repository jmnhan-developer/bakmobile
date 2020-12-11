
export default function(id = '',action) {
  
    if(action.type == 'informationFromSignUp') {

        var newId =action.id;
        console.log('Id from reducer------',newId);
        return newId;

    }
    if(action.type == 'informationFromSignIn') {

        var newId =action.id;
        console.log('Id from reducer------',newId);
        return newId;
    }
    else 
    {    
        return id; 
    }
    
  }