'use strict'
const uid = require('rand-token');
const Manager = use('App/Models/Manager2')
const Post    = use('App/Models/Post2')
class RandtokenController {
    async Home({response}){
        
        let dt = await Post.find(3)
        dt = await dt.mng().fetch()


        return response.send(dt)
    }
}

module.exports = RandtokenController
