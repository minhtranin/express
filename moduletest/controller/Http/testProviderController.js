'use strict'
const Crud =  use('App/Models/Crud')
class testProviderController {
    async home({view,request,response}){
      const cr = await Crud.query().first()
      console.log(cr.toJSON())
      return response.status(200).send(cr.toJSON())
    }
}

module.exports = testProviderController
