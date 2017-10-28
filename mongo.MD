# mongodb的安装以及使用
## 官网下载安装包
> https://www.mongodb.com/
## 安装
1. 在安装目录下创建data文件
2. 启动服务端
```c
//根据自己的安装目录适当修改命令
D:\MongoDB\Server\3.2\bin\mongod.exe --dbpath "D:\MongoDB\data" --journal --storageEngine=mmapv1
```
运行命令之后,如果出现最后一行

waiting for connections on port 27017

则证明开启数据库成功
3. 启动客户端
在bin文件下打开mongo.exe
## 使用
### 在客户端使用命令
1. 查询所有数据库
```
show dbs
```
2. 切换/创建数据库
```
use student
```
3. 显示当前db状态
```
db.stats()
```
4. 查询数据表
```
show collections;
```
5. 插入数据
```
db.student.insert({name:"redrice",age:31,sex:1});

db.student.insert({name:"jiayunzhe",age:21,sex:1});

db.student.insert({name:"liuhui",age:23,sex:0});
```
6. 查询 数据 
```
db.student.find({sex:1})
```
7. 修改数据 
```
db.student.update({name:"jiayunzhe"},{$set:{age:26}})
```
8. 删除数据 
```
db.student.remove({name:"redrice"});
```
### 使用mongodb可视化工具
#### MongoBooster 

下载地址：http://mongobooster.com/downloads

#### MongoChef

个人免费，用于商业需要有授权

下载地址：http://3t.io/mongochef/download/platform/

### 在nodejs操作mongodb
* mongodb
* mongoose
http://mongoosejs.com/docs/index.html