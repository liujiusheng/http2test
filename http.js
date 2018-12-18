/**
 * 发起异步请求的库
 */

 function GET(url,callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.responseType = 'blob';
    xhr.onload = function(){
        if(xhr.readyState === 4 && xhr.status >= 200 && xhr.status <300 && xhr.response){
            callback(xhr.response);
        }
    }
    xhr.send();
 }