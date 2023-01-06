
//测试全景照片切片的代码
var fs = require('fs');
  var path = require("path");
  const sharp = require('sharp');


const inputfolder="C:/Users/34801/Desktop/qjt"
const outputfolder="C:/Users/34801/Desktop/qjt"

 function test(){
    //遍历目录中的图片
    var pa = fs.readdirSync(inputfolder);
	pa.forEach(function(ele,index){
		var info = fs.statSync(inputfolder+"/"+ele)	
		if(info.isDirectory()){
			//console.log("dir: "+ele)
			//readDirSync(path+"/"+ele);
		}else{
			if(ele.endsWith(".JPG"))
            {
                let rpath = inputfolder + "/" + ele;
                let outputf = outputfolder + "/" + ele.replace(".JPG", "");
                if (!fs.existsSync(outputf)) {
                  fs.mkdirSync(outputf);
                }
                outputf += "/" + ele.replace(".JPG", "") + "_low.JPG";
                //运行命令
                sharp(rpath)
                  .resize(2048, 1024)
                  .toFile(outputf, function (err) {
                     console.log(err);
                  });
            }
		}	
	})
}


test();



