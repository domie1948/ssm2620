const base = {
    get() {
                return {
            url : "http://localhost:8080/waimiadiancan/",
            name: "waimiadiancan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/waimiadiancan/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "外卖点餐系统"
        } 
    }
}
export default base
