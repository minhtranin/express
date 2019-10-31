'use strict'
const User = use ('App/Models/User')
class TestauthController {
    async home({view}){
        //const user = await User.findBy('username','minhtranin')
        //const user = await User.find(1)
        //const user = await User.ids()
        //const user = await User.pair('id','username')
        //const user = await User.query().where('id',1).fetch()
       
        const user = await User.query().where('id',1).getCount()
        console.log(user)
        return view.render('index')
    }
}

module.exports = TestauthController
