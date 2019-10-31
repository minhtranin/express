'use strict'
const Crud =  use('App/Models/Crud')
class CrudController {
    async home({view}){
        const crud = new Crud();
        crud.name = 'minh'
        crud.old = '22'
        crud.save();
        return view.render('index')

    }
}

module.exports = CrudController
