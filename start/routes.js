'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('crud','CrudController.home')
//Route.get('/loginVal','LoginValidateController.home').middleware(['auth']).as('login')
Route.get('/id','TestController.home')
Route.get('/updata','PostController.home')
Route.get('/','ListController.home')
Route.get('/testauth','TestauthController.home')
Route.get('/sendgrid','SendgridController.home')
Route.get('/randtoken','RandtokenController.Home')


