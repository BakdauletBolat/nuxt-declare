import { ApiService } from "@/services/api-service";
import { IPage } from "./interface";

class PageService extends ApiService {
    
    async getPage(slug:string) {
        return await this.get<{
            data: IPage
            
        }>(`/pages/${slug}/`)
    }
}

export default new PageService();