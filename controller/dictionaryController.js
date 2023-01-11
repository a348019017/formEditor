/**
 * 数据字典的Restful控制器,做了一个代码拆分
 */
const {
  User,
  formTemplate,
  formData,
  dictionaryData,
} = require("../models/formData");

let definedt = [
  {
    url: "/MoveMapApply/forms/getDictionary",
    type: "get",
    func: async (req, res) => {
      let pagesize = req.query.pagesize ? req.query.pagesize : 100;
      let pageindex = req.query.pageindex ? req.query.pageindex : 1;
      let type = req.query.type ? req.query.type : "";
      let queryparmas = {
        offset: (pageindex - 1) * pagesize,
        limit: pagesize,
        where: {},
      };
      type
        ? (queryparmas.where = {
            type: type,
          })
        : undefined;

      let rst = await dictionaryData.findAll(queryparmas).catch((err) => {
        res.send({
          isok: false,
          code: 404,
          err: err,
        });
      });

      // let newrst={};
      // rst.forEach(rt=>{
      //   newrst[rt.id]=rt;
      // })
      // //判断级联的情况
      // rst.forEach((rt) => {
      //   if (rt.parent) {
      //     let tmp = newrst[rt.parent];        
      //     if (!tmp.children) tmp.children = [];
      //     tmp.children.push(rt);
      //     newrst[rt.id] = undefined;
      //   }
      // });
      // rst=Object.values(rst).filter(j=>j)
      res.send({
        isok: true,
        code: 200,
        data: rst,
      });
    },
  },
];


module.exports ={definedt} ;
