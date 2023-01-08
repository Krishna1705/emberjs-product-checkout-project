/* eslint-disable prettier/prettier */
import Controller from '@ember/controller';

export default class CartController extends Controller {
    get subtotal(){
      // eslint-disable-next-line no-undef
     const subtotal= this.model.reduce((acc,item)=>{
            // eslint-disable-next-line no-undef
            return acc+item.price;
        },0)
        return subtotal;
    };
    get tax(){
       return 0.09*this.subtotal;
    }
    get total(){
        return this.subtotal+this.tax;
    }
}
