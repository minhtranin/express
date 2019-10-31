'use strict'
const Category = use('App/Models/Category2');
const Database = use('Database');
class CategoryController {
    async home({view}){
        //create a category 
        //  const category = new Category;
        // category.idname = "technology";
        // await category.save();
        // console.log('arrived')
        //fetch data 

        //const categorys = await Category.all();
        //test query builder

        // left join 
        // const categorys2 = await Database
        // .select('*')
        // .from('manager_2_s')
        // .leftOuterJoin('post_2_s','manager_2_s.idpost2','post_2_s.idpost')
        // .where('idcategory2', '=',7);
       //  return  view.render('index',{categorys:categorys });
        const categorys = await Database.select('*').from('category_2_s');
        const post = await Database.select('*').from('post_2_s');
        return  view.render('index',{categorys,post});

    }
}

module.exports = CategoryController
