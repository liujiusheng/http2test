const fs = require('fs');


var path = './maximg';
var dirs = fs.readdirSync(path);
var n = 0;
for(let i in dirs){
    var filename = dirs[i].split('.');
    var type = filename[filename.length-1];
    if(type=='png'){
        fs.renameSync(path+'/'+dirs[i],path+'/'+n+'.png');
        n +=1;
    }else{
        fs.unlinkSync(path+'/'+dirs[i]);
    }
    console.log('处理完成：'+dirs[i]);
}