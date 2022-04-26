import http from '../http-common'

class AppDataService {
    suscribeFund(data){
        return http.put("/push",data)
    }
    cancelFund(fund){
        return http.delete("/pop",{data:fund})
    }
    getBalance(){
        return http.get("/balance")
    }
    getHistorical(){
        return http.get("/historical")
    }
    getFundBalance(){
        return http.get('/balance/fund')
    }
}
export default new AppDataService();