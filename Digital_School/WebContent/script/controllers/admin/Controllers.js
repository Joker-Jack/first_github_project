define(["controllers/controllers"],function(a){require(["controllers/controllers"],function(a){function b(a,b,c){a.editorConfig={focus:!0},a.nowTime=new Date,a.$watch("content",function(){a.html=c.trustAsHtml(a.content),a.nowTime=new Date})}a.controller("boardManagementCtrl",b),b.$inject=["$scope","$timeout","$sce"]}),require(["controllers/controllers"],function(a){function b(a,b){var c=a.vm={};c.course=["用拉伸法测量杨氏弹性模量","用光栅法测定氢原子光谱线的波长","冷却法测量金属的比热容","迈克耳逊干涉仪","超声波在空气中传播速度的测定","密立根油滴实验","夫兰克－赫兹实验","光电效应和普朗克常量测定","铁磁材料的磁滞回线和基本磁化曲线","电子和场","激光全息照相","弹簧振子周期经验公式总结","双光栅测量微弱振动的位移量","光导纤维中光速的实验测定","半导体热敏电阻特性的研究","用光栅法测定光栅常数和超声波的波速","电表改装与校准","利用霍尔效应测量磁场分布和磁阻","落体法测转动惯量","用拉脱法测定液体表面张力系数","用模拟法测绘静电场"],c.response=[];for(var d=0;d<15;d++)c.response.push(d)}a.controller("forumManagementCtrl",b),b.$inject=["$scope","$timeout"]}),require(["controllers/controllers"],function(a){function b(a,b){var c=a.vm={};c.course=["用拉伸法测量杨氏弹性模量","用光栅法测定氢原子光谱线的波长","冷却法测量金属的比热容","迈克耳逊干涉仪","超声波在空气中传播速度的测定","密立根油滴实验","夫兰克－赫兹实验","光电效应和普朗克常量测定","铁磁材料的磁滞回线和基本磁化曲线","电子和场","激光全息照相","弹簧振子周期经验公式总结","双光栅测量微弱振动的位移量","光导纤维中光速的实验测定","半导体热敏电阻特性的研究","用光栅法测定光栅常数和超声波的波速","电表改装与校准","利用霍尔效应测量磁场分布和磁阻","落体法测转动惯量","用拉脱法测定液体表面张力系数","用模拟法测绘静电场"],c.response=[];for(var d=0;d<15;d++)c.response.push(d)}a.controller("forumManagementCtrl",b),b.$inject=["$scope","$timeout"]}),require(["controllers/controllers"],function(a){function b(a,b){var c=a.vm={};a.changeCollege=function(){b(function(){c.defaultClasses=c.classmanagement[c.defaultCollege][0]})},c.defaultCollege="计算机学院",c.defaultCourse="用拉伸法测量杨氏弹性模量",c.defaultClasses="软件工程1班",c.course=["用拉伸法测量杨氏弹性模量","用光栅法测定氢原子光谱线的波长","冷却法测量金属的比热容","迈克耳逊干涉仪","超声波在空气中传播速度的测定","密立根油滴实验","夫兰克－赫兹实验","光电效应和普朗克常量测定","铁磁材料的磁滞回线和基本磁化曲线","电子和场","激光全息照相","弹簧振子周期经验公式总结","双光栅测量微弱振动的位移量","光导纤维中光速的实验测定","半导体热敏电阻特性的研究","用光栅法测定光栅常数和超声波的波速","电表改装与校准","利用霍尔效应测量磁场分布和磁阻","落体法测转动惯量","用拉脱法测定液体表面张力系数","用模拟法测绘静电场"],c.classmanagement={"计算机学院":["软件工程1班","软件工程2班","软件工程3班","软件工程4班"],"自动化学院":["数字与媒体1班","数字与媒体2班","数字与媒体3班","数字与媒体4班"]},c.gradeDate=[{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006245",name:"陈杰勇",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"何伟婷",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100},{number:"3113006244",name:"吴丹武",title_0:20,title_1:20,title_2:20,title_3:20,title_4:20,title:100}]}a.controller("gradeManagementCtrl",b),b.$inject=["$scope","$timeout"]}),require(["controllers/controllers"],function(a){function b(a){var b=a.vm={};b.menus=[{name:"实验管理",href:"sygl"},{name:"成绩管理",href:"cjgl"},{name:"教师管理",href:"jsgl"},{name:"学生管理",href:"xsgl"},{name:"公告栏",href:"board"},{name:"讨论区",href:"forum"}]}a.controller("headerCtrl",b),b.$inject=["$scope"]}),require(["controllers/controllers"],function(a){function b(a,b){var c=a.vm={};a.editorConfig={initialFrameHeight:100,initialFrameWidth:740,toolbars:[["bold","italic","underline","simpleupload","spechars","insertunorderedlist","insertorderedlist"]]},c.course=["用拉伸法测量杨氏弹性模量","用光栅法测定氢原子光谱线的波长","冷却法测量金属的比热容","迈克耳逊干涉仪","超声波在空气中传播速度的测定","密立根油滴实验","夫兰克－赫兹实验","光电效应和普朗克常量测定","铁磁材料的磁滞回线和基本磁化曲线","电子和场","激光全息照相","弹簧振子周期经验公式总结","双光栅测量微弱振动的位移量","光导纤维中光速的实验测定","半导体热敏电阻特性的研究","用光栅法测定光栅常数和超声波的波速","电表改装与校准","利用霍尔效应测量磁场分布和磁阻","落体法测转动惯量","用拉脱法测定液体表面张力系数","用模拟法测绘静电场"],a.items=["A","B","C","D","E","F"],a.selected=[],a.toggle=function(a,b){var c=b.indexOf(a);c>-1?b.splice(c,1):b.push(a)},a.exists=function(a,b){return b.indexOf(a)>-1}}a.controller("phyManagementCtrl",b),b.$inject=["$scope","$timeout"]}),require(["controllers/controllers"],function(a){function b(a,b){var c=a.vm={};a.changeCollege=function(){b(function(){c.defaultClasses=c.classmanagement[c.defaultCollege][0]})},c.defaultCollege="计算机学院",c.defaultClasses="软件工程1班",c.classmanagement={"计算机学院":["软件工程1班","软件工程2班","软件工程3班","软件工程4班"],"自动化学院":["数字与媒体1班","数字与媒体2班","数字与媒体3班","数字与媒体4班"]},c.gradeDate=[{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006245",name:"陈杰勇",college:"自动化学院",classes:"软件工程2班"},{number:"3113006244",name:"何伟婷",college:"自动化学院",classes:"软件工程2班"},{number:"3113006244",name:"刘洁勇",college:"自动化学院",classes:"软件工程2班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程3班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程3班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程3班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程3班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"},{number:"3113006244",name:"吴丹武",college:"自动化学院",classes:"软件工程1班"}]}a.controller("stuManagementCtrl",b),b.$inject=["$scope","$timeout"]}),require(["controllers/controllers"],function(a){function b(a,b){function d(a){var b=a?c.allContacts.filter(e(a)):[];return b}function e(a){var b=angular.lowercase(a);return function(c){return c._lowername.indexOf(b)!=-1}}function f(){var a=["软件工程1班","软件工程2班","软件工程3班","软件工程4班","数字与媒体1班","数字与媒体2班","数字与媒体3班","数字与媒体4班"];return a.map(function(a,b){var c={name:a,image:"images/admin/iconfont-member.png",email:""};return c._lowername=c.name.toLowerCase(),c})}var c=this;c.querySearch=d,c.allContacts=f(),c.contacts=[c.allContacts[0]],c.filterSelected=!0,c.tecData=[{tecname:"吴老师",classes:[{name:"软件工程5班",_lowername:"软件工程5班",email:"",image:"images/admin/iconfont-member.png"},{name:"软件工程6班",_lowername:"软件工程6班",email:"",image:"images/admin/iconfont-member.png"}]},{tecname:"刘老师",classes:[{name:"数字与媒体6班",_lowername:"数字与媒体6班",email:"",image:"images/admin/iconfont-member.png"},{name:"数字与媒体5班",_lowername:"数字与媒体5班",email:"",image:"images/admin/iconfont-member.png"}]}]}a.controller("tecManagementCtrl",b),b.$inject=["$timeout","$q"]})})