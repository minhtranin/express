'use strict'
const Database = use('Database');
class ListController {
    async home({view}){
         
        const categorys = await Database.select('*').from('category_2_s');
        const post = await Database.select('*').from('post_2_s');
        return view.render('index',{categorys,post})
    }
}

module.exports = ListController
