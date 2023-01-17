# 简介
主要应用于各行业系统中业务表单的录入，存储和检索。具有动态可配置，不修改源码，高效集成等特性。特别应用于各类外业App，如林业调查，地籍调查中复杂的表单录入功能，极大减少了开发人员的维护时间。



# formEditor
动态表单后台服务，集成一个内部网页，可选数据库等实体存储；
在线访问地址https://ponggis.xyz:8070/#/formseditor

# 如何使用
## H5表单访问地址：
   调试地址公网:http://swyy.nat123.cc:53906/#/forms?group=tepgrp

## 通过模板名称创建空的表单页面：
   http://localhost:8080/#/forms?group=tepgrp，其中tepgrp表示模板名称，可将此参数写在app配置文件中。

## 通过表单guid（名称）获取已提交到服务器的表单实例。
    http://localhost:8080/#/forms/e9f27a29-22cd-d69a-08cf-9ba012fb438d。
    表单在提交后，需要和某些业务建立弱关联，如果此表单系统完全和业务系统独立开，可能需要在业务系统中独立维护此guid。这里提供windows.formguid获取当前表单的guid供其二次操作。

# 参数说明
```````````````````````
//基本服务的地址
window.BaseUrl2= "http://10f192b.nat123.fun:53907"   基本服务访问地址
//新表单的默认值，字段名称需要和配置文件对应，如编号
window.defaultValues={
    code:"123456789"      //编号
}
 //获取每个表单的唯一编号
window.formguid="guid";
//表单参数，扩展表单的角色用户支持，用于关联同构或异构的系统，如需其他关联需要自行添加
window.formoption={
    userid:"",
    roleid:""
} 

```````````````````````

# 数据库等配置
位于models/dbcnn.js文件中

