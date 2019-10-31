'use strict'
const {validate} = use('Validator')
const Hash = use ('Hash')
const User = use ('App/Models/User')

class LoginValidateController {
    async home({view,request,auth, session,response}){
      
        const data = request.all();
        const {username,password,email} = request.all()
        // console.log('credentials :'+username +password +email)
        console.log(data)
        
        
        
        // insert user 
       // const user =  await User.create(data);
        // <insert user>
        // gen token
        const user1 = await User.find(1)
        console.log(user1)
        //await auth.generate(user1)
        // <gen token>
        // learn Hash
        const password_hash =   await  Hash.make( data.password,3 );
        console.log(' password_hash'+password_hash);
        const password_verify = await Hash.verify('123',password_hash );
         if (password_verify){console.log('password dung')}
        // <learn hash>
        // learn auth 
      //   try{
      // if(  await auth.attempt(data.email,data.password)){console.log('auth success')}
      //   }catch(e){console.log(" ....."+e)}

        // <learn auth>

        //learn validate
        const rules = {
            username : 'required',
            password : 'required',
            email    : 'required|email'
        }
        const validation = await validate(data,rules)
        if (validation.fails()){
            console.log(validation.messages());
            session
            .withErrors(validation.messages())
            .flashAll() // save once
          return response.redirect('/')
        }
        // <learn validate>
        
        return view.render('index');
    }
}

module.exports = LoginValidateController
