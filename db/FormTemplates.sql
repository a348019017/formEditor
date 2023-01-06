INSERT INTO "FormTemplates"("id", "name", "template", "type", "createdAt", "updatedAt", "enable", "group", "title", "roleid", "order") VALUES (2, 'template2', '{"type":"object","required":["userName","age"],"properties":{"userName":{"type":"string","title":"用户名","default":"Liu.Jun"},"age":{"type":"number","title":"年龄"},"bio":{"type":"string","title":"签名","minLength":10,"default":"知道的越多、就知道的越少","ui:options":{"placeholder":"请输入你的签名","type":"textarea","rows":1}},"imgUrlList":{"title":"图片上传","type":"array","ui:widget":"UploadWidget","ui:action":"http://localhost:8082/uploadImage","default":[],"items":{"type":"string"}}}}', NULL, '2022-12-28 14:24:51+08', '2022-12-28 14:24:54+08', 't', '', '申请表', NULL, NULL);
INSERT INTO "FormTemplates"("id", "name", "template", "type", "createdAt", "updatedAt", "enable", "group", "title", "roleid", "order") VALUES (1, 'template1', '{
    "title": "用户基本信息",
    "type": "object",
    "required": [
        "userName",
        "age"
    ],
    "properties": {
        "userName": {
            "type": "string",
            "title": "用户名",
            "default": "Liu.Jun"
        },
        "age": {
            "type": "number",
            "title": "年龄"
        },
        "city": {
            "type": "string",
            "title": "城市",
            "default":"330303",
            "ui:widget": "AddressWidget"
        },
        "bio": {
            "type": "string",
            "title": "签名",
            "minLength": 10,
            "default": "知道的越多、就知道的越少",
            "ui:options": {
                "placeholder": "请输入你的签名",
                "type": "textarea",
                "rows": 1
            }
        },
        "imgUrlList": {
            "title": "图片上传",
            "type": "array",
            "ui:widget": "UploadWidget",
            "ui:action": "http://localhost:8082/uploadImage",
            "default": [],
            "items": {
                "type": "string"
            }
        }
    }
}
', NULL, '2022-12-28 14:24:51+08', '2022-12-28 14:24:54+08', 't', '', '巡查表', NULL, NULL);
INSERT INTO "FormTemplates"("id", "name", "template", "type", "createdAt", "updatedAt", "enable", "group", "title", "roleid", "order") VALUES (5, 'template5', '{
    "title": "判读信息",
    "type": "object",
    "required": [
        "year",
        "ly"
    ],
    "properties": {
        "year": {
            "type": "string",
            "title": "年度",
            "format":"date",
            "default":"2023-01-01",
            "ui:options": {
                "placeholder": "请输入年度",
                "type":"year"
            }
        },
        "ly": {
            "type": "string",
            "title": "来源",
            "ui:options": {
                "placeholder": "2-AI识别"
            }
        },
        "pddw": {
            "type": "string",
            "title": "判读单位"
        },
        "pdtbbh": {
            "type": "string",
            "title": "判读图斑编号",
            "ui:options": {
                "placeholder": "1-违法违规采伐林木"
            }
        },
        "shenshixian": {
            "title": "省市县",
            "type": "string" ,
            "ui:widget" :"AddressWidget"
        },
        "shi": {
            "title": "市",
            "type": "string"   
        },
        
        "xiang":{
            "title": "乡（镇）",
            "type": "string"   
        },
        "cun":{
            "title": "村（营林区）",
            "type": "string"  
        },
        "lyj":{
            "title": "林业局（场）",
            "type": "string"  
        },
        "lc":{
            "title": "林场（分场）",
            "type": "string"  
        },
        "lb":{
            "title": "林斑",
            "type": "string"  
        },
        "hzb":{
            "title": "横坐标",
            "type": "number" ,
            "ui:widget":"LocationWidgetX",
            "ui:posType":"longitude"
        },
        "zzb":{
            "title": "纵坐标",
            "type": "number" ,
            "ui:widget":"LocationWidgetX",
            "ui:posType":"latitude"
        },
        "qqyxsj":{
            "title": "前期影像时间",
            "type": "string" ,
            "format":"date-time"
        },
        "hqyxsj":{
            "title": "后期影像时间",
            "type": "string" ,
            "format":"date-time"
        },
        "pdtbmj":{
            "title": "判读图斑面积（公顷）",
            "type": "string" 
        },
        "pdbhyy":{
            "title": "判读变化原因",
            "type": "string" ,
            "ui:options": {
                "placeholder": "10-建设项目使用林地"
            }
        }
    }
}
', NULL, '2023-01-04 13:43:04+08', '2023-01-04 13:43:07+08', 't', 'tepgrp', '判读信息', NULL, NULL);
INSERT INTO "FormTemplates"("id", "name", "template", "type", "createdAt", "updatedAt", "enable", "group", "title", "roleid", "order") VALUES (4, 'template4', '{
    "title": "调查核实情况",
    "type": "object",
    "required": [
       
    ],
    "properties": {
        "num": {
            "type": "string",
            "title": "编号",
            "ui:disabled":true
        },
        "hsxbh": {
            "type": "string",
            "title": "核实细斑号"
        },
        "ldgldw": {
            "type": "string",
            "title": "林地管理单位"
        },
        "phslzyxz": {
            "type": "string",
            "title": "破坏森林资源性质",
            "ui:options": {
                "placeholder": "1-违法违规采伐林木"
            }
        },
        "xzdl": {
            "title": "现状地类",
            "type": "string"   ,
            "ui:enumType":"dlbm",
            "ui:widget":"SelectWidgetDic",
            "ui:options": {
                "placeholder": "01-耕地"
            }
        },
        "rdqdl": {
            "title": "认定前地类",
            "type": "string"   , "ui:options": {
                "placeholder": "01-耕地"
            }
        },
        "hsbhyy":{
            "title": "核实变化原因",
            "type": "string"   
            , "ui:options": {
                "placeholder": "11-人工造林或飞播造林"
            }
        },
        "xmfqmc":{
            "title": "项目伐区名称",
            "type": "string"   
        },
        "xmyt":{
            "title": "项目用途",
            "type": "string"  ,
            "ui:options": {
                "placeholder": "201-公路"
            }
        },
        "lsydlb":{
            "title": "临时用地类别",
            "type": "string"  ,
            "ui:options": {
                "placeholder": "1-工程用地"
            }
        },
        "qtjtyt":{
            "title": "其它具体用途",
            "type": "string"  
        }
    }
}
', NULL, '2023-01-04 11:29:42+08', '2023-01-04 11:29:45+08', 't', 'tepgrp', '调查核实情况', NULL, NULL);
INSERT INTO "FormTemplates"("id", "name", "template", "type", "createdAt", "updatedAt", "enable", "group", "title", "roleid", "order") VALUES (3, 'template3', '{
    "title": "测试注册表单",
    "description": "A simple form example.",
    "type": "object",
    "required": [
        "firstName",
        "lastName"
    ],
    "ui:order": [
        "lastName",
        "firstName",
        "*",
        "password"
    ],
    "properties": {
        "firstName": {
            "type": "string",
            "title": "First name",
            "default": "Jun"
        },
        "lastName": {
            "type": "string",
            "title": "Last name",
            "ui:options": {
                "description": "请输入你的姓"
            },
            "err:required": "必须输入Last Name"
        },
        "price": {
            "type": "string",
            "description": "最多输入两位小数点，最大值 999999.99",
            "title": "价格",
            "format": "price"
        },
        "age": {
            "type": "integer",
            "title": "Age",
            "maximum": 80,
            "minimum": 16
        },
        "bio": {
            "type": "string",
            "title": "Bio",
            "minLength": 10
        },
        "password": {
            "type": "string",
            "title": "Password",
            "minLength": 3
        },
        "telephone": {
            "type": "string",
            "title": "Telephone",
            "minLength": 10
        }
    }
}', NULL, '2022-12-28 14:24:51+08', '2022-12-28 14:24:54+08', 't', '', '测试表', NULL, NULL);
INSERT INTO "FormTemplates"("id", "name", "template", "type", "createdAt", "updatedAt", "enable", "group", "title", "roleid", "order") VALUES (6, 'template6', '{
    "title": "调查信息",
    "type": "object",
    "required": [
       
    ],
    "properties": {
        "dcdwmc": {
            "type": "string",
            "title": "调查单位名称"
        },
        "dcry": {
            "type": "string",
            "title": "调查人员",
            "ui:options": {
                "placeholder": "2-AI识别"
            }
        },
        "dcsj": {
            "type": "string",
            "title": "调查时间",
            "format":"date-time"
        },
        "bz": {
            "type": "string",
            "title": "备注"
        },
        "dcjl": {
            "title": "调查结论",
            "type": "string" ,
            "ui:options": {
                "placeholder": "1-存在违法使用林地或采伐"
            }
        }
    }
}
', NULL, '2023-01-04 17:08:22+08', '2023-01-04 17:08:25+08', 't', 'tepgrp', '调查信息', NULL, NULL);
