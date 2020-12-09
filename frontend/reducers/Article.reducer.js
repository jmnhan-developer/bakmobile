export default function(product = null, action) {
    if(action.type == 'pickProduct') {
        return action.product;
    }
    else {return product}
}