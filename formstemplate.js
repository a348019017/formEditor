 let defaultschema = {
   type: "object",
   required: ["userName", "age", "sqr"],
   properties: {
     userName: {
       type: "string",
       title: "用户名",
       default: "Liu.Jun",
     },
     age: {
       type: "number",
       title: "年龄",
     },
     location: {
       type: "string",
       title: "坐标",
       "ui:widget": "LocationWidget",
       default: "{'latitude':22,'longitude':118,'accuracy':22222}",
    //    properties: {
    //      latitude: {
    //        type: "number",
    //        title: "维度",
    //      },
    //      longitude: {
    //        type: "number",
    //        title: "经度",
    //      },
    //    },
     },
     year: {
       type: "string",
       title: "年度",
       default: "2022",
     },
     sqr: {
       type: "string",
       title: "申请人",
     },
     bio: {
       type: "string",
       title: "签名",
       minLength: 10,
       default: "知道的越多、就知道的越少",
       "ui:options": {
         placeholder: "请输入你的签名",
         type: "textarea",
         rows: 1,
       },
     },
     imgUrlList: {
       title: "图片上传",
       type: "array",
       "ui:widget": "UploadWidget",
       //action指定上传的接口
       "ui:action": "http://localhost:8082/uploadImage",
       default: [],
       items: {
         type: "string",
       },
     },
   },
 };
exports.defaultschema=defaultschema;
