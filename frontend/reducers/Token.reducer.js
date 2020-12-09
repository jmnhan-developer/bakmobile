export default function(token = '',action) {
  
    if(action.type == 'informationFromSignUp') {

        var newToken =action.token;
        console.log('token from reducer------',newToken);
        return newToken;

    }
    if(action.type == 'informationFromSignIn') {

        var newToken =action.token;
        console.log('token from reducer------',newToken);
        return newToken;

    }
    else 
    {    
        
        return token; 
    }
    
  }