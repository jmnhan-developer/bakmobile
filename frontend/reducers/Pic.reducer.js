export default function(photo = [], action) {
  
    if(action.type == 'increase') {

        var newPhotoList =[...photo];
        newPhotoList.push(action.photoUrl)
        console.log("---------------reducer newPhoto-------------",newPhotoList)
        return newPhotoList;
    }else {    
        return photo; 
    }
    
  }