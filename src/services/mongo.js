import http from '../http-common'

class AppDataService {
    suscribeFund(data){
        return http.put("/push",data)
    }
}
export default new AppDataService();