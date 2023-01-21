import {IProduct} from '@/models/product';


class FavoriteServiceLocal {
    like(post: IProduct): boolean {
        let likes:IProduct[] = [];
        if (localStorage.getItem('likes') != null) {
            likes = JSON.parse(localStorage.getItem('likes')!);
        }
        
        likes.findIndex

        if (likes.findIndex((post_item: IProduct)=>post_item.id == post.id) != -1) {
            const id:number = likes.findIndex((post_item: IProduct)=>post_item.id == post.id);
            likes.splice(id,1);
            localStorage.setItem('likes', JSON.stringify(likes));
            return false;
        }
        
        likes.push(post);
        localStorage.setItem('likes', JSON.stringify(likes));
        return true;
    }

    checkLiked(post: IProduct) {
        let likes = [];
        if (localStorage.getItem('likes') != null) {
            likes = JSON.parse(localStorage.getItem('likes')!);
        }
        if (likes.findIndex((post_item: IProduct)=>post_item.id == post.id) != -1) {
            return true;
        }
        return false;
    }

    getAllFavorites() {
        let products = [];
        if (localStorage.getItem('likes') != null) {
            products = JSON.parse(localStorage.getItem('likes')!);
        }
        return products;
    }
}

export default new FavoriteServiceLocal();