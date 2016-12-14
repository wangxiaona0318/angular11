## 创建模块
```
var app = angular.module('appModule',[]);
app.controller('myCtrl',['$scope',function($scope){}])
```

## 模块
- ng-app:模块名
- ng-controller:控制器名
- ng-model:只能放在input标签上，实现双向绑定
- ng-click:点击事件
    > ng-click = 'v.count = v.count -1';
- ng-repeat:放在需要循环的标签上 .循环几次创建几个作用域
    > ng-repeat='v in products track by $index'
    > ng-repeat='(key,v) in products track by $index'
- ng-disabled:是否可用
    > ng-disabled='v.count<=1?true:false'
    
## 组件式指令和装饰性指令
- directive
- 指令是否依赖于控制器：不依赖???

```
app.directive('myDire',function(){//需要转换成驼峰命名法，标签名为-连接
          return {
              restrict:'EAC',//
              replace:true,
              transclude,//保留标签上的文字，需要写在模板的哪个标签就在哪个标签上写ng-transclude,带有ng-transclude的标签会生成一个作用域
              template:'<h1>welcome</h1>'//模板中根节点保证只有一个，防止报错.
              // templateUrl:'./template.html',
              link:function(element,scope,attr){//可以操作DOM的地方
                           //scope:当前指令所在的作用域
                          // elements:是一个jq对象。写在谁身上，指向的就是哪个元素
                          //attrs：当前指令的所有属性变成一个对象格式
              }
              //scope:{title:'=title',tail:'@tail',submit:'&fn'}  = :表示可以双向绑定，@：表示获取的是获取一个字符串类型的值
              //scope:true//{}.两种都可以，是有区别的???
          }
      });
```
  
  > 拖拽？？？
  
```
  link:function(scope,element,attrs){
                  element.on('mousedown',function(e){
                      var disX = e.pageX - this.offsetLeft;
                      var disY = e.pageY - this.offsetTop;
                      angular.element(document).on('mousemove',function(e){
                          element.css({left:e.pageX - disX + 'px',top: e.pageY - disY + 'px'});
                      });
                      e.preventDefault();
                      angular.element(document).on('mouseup',function(e){
                          angular.element(document).off();
                      });
                  });
              }
                       
```
     