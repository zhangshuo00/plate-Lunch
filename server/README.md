### 安装

> git clone https://github.com/zhangshuo00/youji.git
>
> cd react/project
>
> npm install

### 运行

> node server.js

------

### 1. 登录

**必选参数：**`uemail`：用户账户；`upassword`：用户密码

**接口地址：**`/login`

**返回数据：**`{msg:'success',uid:returnUid}`

### 2. 注册

**必选参数：**`uname`：用户昵称；`uemail`：用户账户；`upassword`：用户密码

**接口地址**：`/sign`

**返回数据**：`{msg:'uemail exists'}`该邮箱已使用；`{msg:'signSuccess'}`：注册成功

### 3. 获取笔记列表

**必选参数：**`uid`：用户ID；`tags`：笔记分类

**接口地址：**`/sion`

**返回数据：**`[{"chid":1,"title":"测试文章","chdate":"2019-11-27T16:00:00.000Z","ch_headimg":"../images/ch_headimg1.jpg"},`

`{"chid":4,"title":"测试文章3","chdate":"2019-11-30T16:00:00.000Z","ch_headimg":"../images/ch_headimg4.jpg"}]`

### 4. 获取笔记分类

**必选参数：**`uid`：用户ID

**接口地址：**`/listSort`

**返回数据：**`[{"tags":"测试3","img_path":"../images/tagsImgTest.jpg"},`

`{"tags":"测试3","img_path":"../images/tagsImgTest.jpg"},`

`{"tags":"测试3","img_path":"../images/tagsImgTest.jpg"}]`

### 5. 获取笔记详情

**必选参数：**`uid`：用户ID；`chid`：当前文章的ID

**接口地址：**`/sionple`

**返回数据：**`    [{"title":"测试文章",`    

`"context":"现在一天比一天冷了，出门穿什么这是一个值得深思熟虑的问题，穿少了会着凉，穿多了就显胖，颜色靓丽太惹人眼球，色彩单一又显老气，出门穿什么，这是一个严肃认真的问题，应该细细思考。",`    

`"ch_headimg":"../images/ch_headimg1.jpg",`    

`"tags":"测试1",`    

`"favorites":20,"likes":100,`    

`"imgPath":[{"img_path":"../images/chapterImg1.jpg"},{"img_path":"../images/chapterImg2.jpg"},{"img_path":"../images/chapterImg3.jpg"}],`

`"isCollection":0}]`

### 6. 新增笔记分类

**必选参数：**``：；``：

**接口地址：**`/addTag`

**返回数据：**`{msg:'success'}`

### 7. 新增笔记

**必选参数：**``：；``：

**接口地址：**`/addSionple`

**返回数据：**`{msg:'success'}`

### 8. 获取个人信息

**必选参数：**``：；``：

**接口地址：**`/personal`

**返回数据：**`{msg:'success'}`

### 9. 获取侧边栏

**必选参数：**``：；``：

**接口地址：**`/userDetail`

**返回数据：**`{msg:'success'}`

### 10. 修改个人信息

**必选参数：**``：；``：

**接口地址：**`/editPerInfo`

**返回数据：**`{msg:'success'}`

### 11. 获取发现页文章块

**必选参数：**``：；``：

**接口地址：**`/discover`

**返回数据：**`{msg:'success'}`

### 12. 获取轮播图

**必选参数：**``：；``：

**接口地址：**`/getCarousel`

**返回数据：**`{msg:'success'}`

### 13. 我的页面

**必选参数：**``：；``：

**接口地址：**`/me`

**返回数据：**`{msg:'success'}`

### 14. 获取关注用户列表

**必选参数：**``：；``：

**接口地址：**`/getFollowUser`

**返回数据：**`{msg:'success'}`

### 15. 搜索

**必选参数：**``：；``：

**接口地址：**`/discoverSearch`

**返回数据：**`{msg:'success'}`

### 16. 获取信息列表

**必选参数：**``：；``：

**接口地址：**`/getMsgList`

**返回数据：**`{msg:'success'}`

### 17. 获取对话详情

**必选参数：**``：；``：

**接口地址：**`/getMsg`

**返回数据：**`{msg:'success'}`

### 18. 发送消息

**必选参数：**``：；``：

**接口地址：**`/sendMsg`

**返回数据：**`{msg:'success'}`

### 19. 添加收藏文章

**必选参数：**``：；``：

**接口地址：**`/addFavorites`

**返回数据：**`{msg:'success'}`

### 20. 取消收藏文章

**必选参数：**``：；``：

**接口地址：**`/cancelCollection`

**返回数据：**`{msg:'success'}`

### 21. 添加喜欢文章

**必选参数：**``：；``：

**接口地址：**`/addLike`

**返回数据：**`{msg:'success'}`

### 22. 取消喜欢文章

**必选参数：**``：；``：

**接口地址：**`/cancelLike`

**返回数据：**`{msg:'success'}`

### 23. 修改密码

**必选参数：**``：；``：

**接口地址：**`/modifyPwd`

**返回数据：**`{msg:'success'}`

### 24. 删除分类

**必选参数：**``：；``：

**接口地址：**`/delTags`

**返回数据：**`{msg:'success'}`

### 25. 删除文章

**必选参数：**``：；``：

**接口地址：**`/delSionple`

**返回数据：**`{msg:'success'}`

### 26. 获取轮播图文章详情

**必选参数：**``：；``：

**接口地址：**`/getCarouselContext`

**返回数据：**`{msg:'success'}`

### 27. 关注用户

**必选参数：**``：；``：

**接口地址：**`/followUser`

**返回数据：**`{msg:'success'}`

### 28. 取消关注用户

**必选参数：**``：；``：

**接口地址：**`/cancelFollowUser`

**返回数据：**`{msg:'success'}`

### 29. 获取验证码

**必选参数：**``：；``：

**接口地址：**`/getCode`

**返回数据：**`{msg:'success'}`

### 30. 校验验证码

**必选参数：**``：；``：

**接口地址：**`/verifyCode`

**返回数据：**`{msg:'success'}`

### 31. 获取用户的搜索历史

**必选参数：**`uid`：用户的uid；

**接口地址：**`/getSearchHistory`

**返回数据：**`{"uid":uid,"keyword":keyWordArray}`

### 32. 添加用户的搜索历史

**必选参数：**`uid`：用户的uid；`keyword`：需要添加的搜索关键词

**接口地址：**`/addSearchHistory`

**返回数据：**`{"msg":"success"}` 

### 33. 删除用户指定的搜索历史

**必选参数：**`uid`：用户的uid；`keyword`：需要删除的搜索关键词

**接口地址：**`/delSearchHistory`

**返回数据：**`{msg:'success'}`
