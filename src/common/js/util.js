/**
 * 解析url参数
 * @example ？id=2345&a:b
 * @return Object {id:12345,a:b}
 */
export function urlParse(){
    let url=window.location.href;
    //let url="http://localhost:8080/#/goods?id=2345&a:b"
    let obj={};
    let reg=/[?&][^?&]+=[^?&]+/g; //[^?&]:匹配 非 ？号和&符号
    let arr=url.match(reg);
    //['?id=12345','&a=b']
    if(arr){
        arr.forEach(item=>{
            let tempArr=item.substring(1).split('=');
            let key=decodeURIComponent(tempArr[0]);
            let val=decodeURIComponent(tempArr[1]);
            obj[key]=val;
        })
    }
    return obj;
}