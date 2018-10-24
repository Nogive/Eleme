var express=require('express');
var config=require('./config/index')

var port=process.env.port||config.build.port;
var app=express();
var router=express.Router();
router.get('/',function(req,res,next){
   req.url="/index.html"; 
   next();
})
app.use(router);
const appData = require("./data.json"); // 加载本地json文件
const seller = appData.seller; // 获取对应本地数据
const goods = appData.goods;
const ratings = appData.ratings;
const apiRoutes = express.Router();
apiRoutes.get("/api/seller", (reg, res) => {
    res.json({
        code: 0,
        data: seller
    }); // 接口返回json数据，上面配置的数据seller就复制给data请求后调用
});
apiRoutes.get("/api/goods", (reg, res) => {
    res.json({
        code: 0,
        data: goods
    });
});
apiRoutes.get("/api/ratings", (reg, res) => {
    res.json({
        code: 0,
        data: ratings
    });
});
app.use("/api", apiRoutes);
app.use(express.static('./dist'));
module.exports=app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Your application is running here:');
})

