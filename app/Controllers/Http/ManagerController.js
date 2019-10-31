'use strict'
const Manager = use('App/Models/Manager2');
class ManagerController {
    async home({view}){
        // const manager = new Manager;
        // manager.idcategory2= 7;
        // manager.idpost2 =1;
        // await manager.save();
        const managers = await Manager.all();
        return view.render('index',{managers:managers.toJSON() })
    }
}

module.exports = ManagerController
