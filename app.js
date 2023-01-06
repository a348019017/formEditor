const express = require('express')
const app = express()
const port = 8082
var cors = require('cors');
const {User,formTemplate, formData}=require("./models/formData")
const { QueryTypes } = require('sequelize');
const bodyparser= require("body-parser")
const {definedt}=require("./controller/dictionaryController")

app.use(cors());
app.use(bodyparser.json())

const upload = require('./upload.js');
const sequelize = require('./models/dbcnn');


// //获取表单模板，暂不传递usrid，全局的,根据名称查询模板
// app.get("/MoveMapApply/forms/getformstemplate", (req, res) => {
//   let params= req.params;
//   let id=params.id;
//   res.send(JSON.stringify(defaultschema.defaultschema));
// });

//根据分组名称获取模板组
app.get("/MoveMapApply/forms/getformstemplatebygroup",async (req, res) => {
  let params = req.query;
  let group = params.group;
  let rst = await formTemplate.findAll({
    where: {
      group: group,
    },
  }).catch(err=>{
     res.send({
      isok: false,
      code: 404,
      err: err,
    });
  });
  let rrst = {
    isok: true,
    code: 200,
    data: rst,
  };
  res.send(rrst);
});


// //提交表单内容到数据库中保存，这里尝试使用orm框架，sqlite
// app.get("/MoveMapApply/forms/saveforms", (req, res) => {
//   res.send(JSON.stringify(defaultschema.defaultschema));
// });

// 上传图片接口
app.post("/uploadImage", (req, res) => {
  upload(req, res)
    .then((imgsrc) => {
      // 上传成功 存储文件路径 到数据库中
      res.send({
        code: "ok",
        message: "上传成功",
        data: {
          url: imgsrc,
        },
      });
    })
    .catch((err) => {
      res.status(500).send({
        code: "error",
        message: err || "",
      });
    });
});


//使用静态目录
app.use('/images',express.static(__dirname + '/images'))

//测试orm
//提交表单内容到数据库中保存，这里尝试使用orm框架，sqlite
app.get("/MoveMapApply/forms/createformData", async (req, res) => {
  try {
    let rst = await sequelize.query(
      `select json('{"first":"test", "second":"haha"}') as rst`,
      { type: QueryTypes.SELECT }
    );
    if (rst.length > 0) {
      //这里自动转换成json
      res.send(rst[0].rst);
    }
      //return rst[0];
    //const jane = await User.create({ firstName: "Jane" });
    //console.log(JSON.stringify(rst));
  } catch (error) {
    res.send("Unable to connect to the database:", error);
  }
});

//通过Id或name获取表单数据，同时返回template数据便于前端渲染。接口包含group
app.get("/MoveMapApply/forms/getformData", async (req, res) => {
  let pagesize = req.query.pagesize ? req.query.pagesize : 10;
  let pageindex = req.query.pageindex ? req.query.pageindex : 1;
  let group = req.query.group ? req.query.group : "";
  let userid = req.query.userid ? req.query.userid : "";
  let queryparmas={
    offset: (pageindex - 1) * pagesize,
    limit: pagesize,
    include: formTemplate,
    where:{},
 };
 group
   ? (queryparmas.where = {
       group: group,
     })
   : undefined;

 userid
   ? (queryparmas.where = {
       userid: userid,
     })
   : undefined;

  let rst = await formData
    .findAll(queryparmas)
    .catch((err) => {
      res.send({
        isok: false,
        code: 404,
        err: err,
      });
    });
    //同时计算总数
  let count=await formData.count(queryparmas);

  res.send({
    isok: true,
    code: 200,
    data: rst,
    count:count
  });
});


//通过userId，获取表单的列表
app.get("/MoveMapApply/forms/getformDataList", async (req, res) => {
  let pagesize = req.query.pagesize ? req.query.pagesize : 10;
  let pageindex = req.query.pageindex ? req.query.pageindex : 1;
  let userid = req.query.userid ? req.query.userid : "";
  let queryparmas={
    offset: (pageindex - 1) * pagesize,
    limit: pagesize,
    include: formTemplate,
    where:{},
    
 };
 group
   ? (queryparmas.where = {
       group: group,
     })
   : undefined;

 userid
   ? (queryparmas.where = {
       userid: userid,
     })
   : undefined;

  let rst = await formData
    .findAll(queryparmas)
    .catch((err) => {
      res.send({
        isok: false,
        code: 404,
        err: err,
      });
    });
    //同时计算总数
  let count=await formData.count(queryparmas);

  res.send({
    isok: true,
    code: 200,
    data: rst,
    count:count
  });
});


//通过Id或name获取表单数据，同时返回template数据便于前端渲染。这里需要同时支持创建或保存，通过name
app.post("/MoveMapApply/forms/submitformData", async (req, res) => {
  //let pagesize = req.query.pagesize ? req.query.pagesize : 10;
  //let pageindex = req.query.pageindex ? req.query.pageindex : 1;
  let frmdt = req.body;
  //如果是单对象，如果是数组对象
  let alltask=[];
  if (Array.isArray(frmdt)) {
    alltask = frmdt.map((i) => {
      return formData.upsert(i).catch((err) => {
        // res.send({
        //   isok: false,
        //   code: 404,
        //   err: err,
        // });
      });
    });
  } else {
    alltask.push(formData.upsert(frmdt).catch((err) => {
      res.send({
        isok: false,
        code: 404,
        err: err,
      });
    }))
  }
  let newrst=await Promise.all(alltask);
  res.send({
    isok: true,
    code: 200,
    data: newrst,
  });
});


  //初始化数据库接口
  app.get("/MoveMapApply/forms/initDb", async (req, res) => {
    //获取分页参数,在req.query中
    //let pagesize=req.query.pagesize?req.query.pagesize:10;
    //let pageindex=req.query.pageindex?req.query.pageindex:1;
    //console.log("xx:"+JSON.stringify(req.query));
    let rst = await sequelize.sync({
        alter: true,
    }).catch(err=>{
        res.send({
            isok:false,
            code:404,
            err:err
        })
    });
    //然后创建模板表单
    res.send({
        isok:true,
        code:200,
        //data:rst
    });
});


app.get("/MoveMapApply/forms/test", async (req, res) => {
    //获取分页参数,在req.query中
    //let pagesize=req.query.pagesize?req.query.pagesize:10;
    //let pageindex=req.query.pageindex?req.query.pageindex:1;
    //console.log("xx:"+JSON.stringify(req.query));
    let rst = await formData.create({
       name:"test"
    }).catch(err=>{
        res.send({
            isok:false,
            code:404,
            err:err
        })
    });
    //然后创建模板表单
    res.send({
        isok:true,
        code:200,
        //data:rst
    });
});




//映射数据字典的控制器
definedt.forEach(dt=>{
  app[dt.type](dt.url,dt.func);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  var open = require('open');
  open('http://localhost:8080/#/forms?group=tepgrp');
});


