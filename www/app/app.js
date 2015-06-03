import 'ionic';   // 因为 bundle 设置过 separateCSS，此处只引入了 js 部分
import '../bundles/ionic.app.css!'; // 自定义编译后的 ionic css
import 'driftyco/ng-cordova';
import 'driftyco/ng-cordova/dist/ng-cordova-mocks';

import fromNowModule from '../common/filters/fromNow';

import securityModule from '../common/security/security';
import apiModule from '../common/services/api';
//import mockModule from '../common/mock';

import usersModule from '../common/resources/users';

import appRouter from './app.router';     // 路由
import initNativeEnv from './app.native'; // 移动平台相关

export default angular
  .module('cc98', [
    'ionic',
    'ngCordovaMocks',
    fromNowModule.name,
    securityModule.name,
    apiModule.name,
    //mockModule.name,
    usersModule.name
  ])
  .config(appRouter)
  .run(initNativeEnv);
