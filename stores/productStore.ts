import {defineStore} from "pinia";
import productService from "~/services/product-service";


export const useProductStore = defineStore('product-store', ()=>{

   const loadProducts = async () => {
       await productService.getProducts({
           collection_id: 3
       });
   }

   return {
       loadProducts
   }

});