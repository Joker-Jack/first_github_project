require.config({paths:{angular:"../lib/angular/angular","angular-route":"../lib/angular-ui-router/angular-ui-router","angular-animate":"../lib/angular-animate/angular-animate","angular-aria":"../lib/angular-aria/angular-aria","angular-material":"../lib/angular-material/angular-material",domReady:"../lib/requirejs-domready/domReady","ueditor-config":"../lib/ueditor/ueditor.config",ueditor:"../lib/ueditor/ueditor.all",jquery:"../lib/jquery/jquery.min",app:"admin",router:"adminRouter"},shim:{angular:{exports:"angular"},"angular-route":{deps:["angular"],exports:"angular-route"},"angular-animate":{deps:["angular","angular-route"],exports:"angular-animate"},"angular-aria":{deps:["angular-animate"],exports:"angular-aria"},"angular-material":{deps:["angular-aria"],exports:"angular-material"},ueditor:{deps:["ueditor-config"],exports:"ueditor"},app:{deps:["angular","angular-route","angular-material","ueditor"]}},waitSeconds:0,deps:["bootstrap","router"],urlArgs:"bust="+(new Date).getTime()})