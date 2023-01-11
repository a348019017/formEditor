
const {dictionaryData}=require("./models/formData")



let input1=`
"030100-乔木林地;" +
"030200-竹林地;" +
"030301-国家特别规定灌木林地;" +
"030302-其他灌木林地;" +
"030401-疏林地;"+
"030402-未成林造林地;"+
"030403-未成林封育地;"+
"030404-苗圃地;"+
"030405-采伐迹地;"+
"030406-火烧迹地;"+
"030491-其他无立木林地;"+
"030492-林业辅助生产用地;"+
"040201-人工牧草地;" +
"040301-其他草地;" +
"050101-森林沼泽;" +
"050201-灌丛沼泽;" +
"050301-沼泽草地;" +
"050401-其他沼泽地;" +
"050501-沿海滩涂;" +
"050601-内陆滩涂;"+
"050701-红树林地;"+
"01-耕地;"+
"02-园地;"+
"06-农业建设用地;"+
"07-居住用地;"+
"08-公共管理与公共服务用地;"+
"09-商业服务用地;"+
"10-工矿用地;"+
"11-仓储用地;"+
"12-交通运输用地;"+
"13-公用设施用地;"+
"14-绿地与开敞空间用地;"+
"15-特殊用地;"+
"16-留白用地;"+
"17-陆地水域;"+
"18-渔业用海;"+
"19-工矿通信用海;"+
"20-交通运输用海;"+
"21-游憩用海;"+
"22-特殊用海;"+
"23-其他土地;"+
"24-其他海域;"+
"99-国土新进林地"
`

let input2=`
"1-违法违规采伐林木;" +
"2-违法违规占用林地"
`
let input3=`
"41-永久使用林地;" +
"42-临时使用林地;" +
"43-直接为林业生产经营服务;" +
"51-毁林开星;" +
"52-土地整理;" +
"53-毁坏林地;" +
"21-林木采伐;" +
"22-毁坏林木;" +
"11-人工造林或飞播造林;" +
"12-人工更新;" +
"13-封山育林;" +
"60-森林抚育;" +
"71-火灾;" +
"72-地所灾害;" +
"73-其他灾害;" +
"80-自然变化;" +
"91-无变化;" +
"92-历年已上报"
`
let input4=`
"201-公路;202-铁路";"203-机场;204-水利水电"
`
let input5=`
"1-工程施工用地;" +
"2-电力线路、油气管线、给排水管网临时用地;" +
"3-工程建设配套的取（弃）土场用地;" +
"4-工程勘察、地质勘查用地;" +
"5-其他确需临时使用林地的"
`

let input6=
`"1-存在违法使用林地或采伐";"2-不存在违法使用林地或采伐"`


let inputindex=[
    {
        type:"dlbm",
        title:"地类编码",
        value:input1
    },
    {
        type:"phslzyxz",
        title:"破坏森林资源性质",
        value:input2
    },
    {
        type:"hsbhyy",
        title:"核实变化原因",
        value:input3
    },
    {
        type:"xmyt",
        title:"项目用途",
        value:input4
    },
    {
        type:"lsydlb",
        title:"临时用地类别",
        value:input5
    },
    {
        type:"dcjl",
        title:"调查结论",
        value:input6
    },
]





function importdictionary()
{
  let rst=  inputindex.map(i=>{
        let type=i.type;
        let title=i.title;
       let dd=i.value;
       let dds=[];
       if (dd.indexOf("+") != -1) {
          dds = dd.split("+");
       } else {
          dds = dd.split(";");
       }
       return dds.map(j=>{
            j=j.trim();
            j=j.replace(`"`,"");
            j=j.replace(`"`,"");
           
            j=j.replace(`;`,"");
            
            j=j.split("-");

            return {name:j[1],code:j[0],type:type,title:title};
        })
    });
    //合并然后导入到数据库中
   rst=rst.flat();
   //console.log(rst);
   rst.forEach((r) => {
     dictionaryData.upsert(r);
     //console.log(r);
   });
}


importdictionary();
