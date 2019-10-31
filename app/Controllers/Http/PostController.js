'use strict'
  const Post = use('App/Models/Post2');
class PostController {
    async home({view,request}){
        const post = new Post ;
        const name = request.only('namepost').namepost;
        const content = request.only('content').content;
       // console.log(request.only('namepost').namepost+ request.only('content').content );

        post.namepost =name;
        post.content  =content;
       // post.namepost ="vietnam's economic";
       // post.content  ='in this year vietnam economic increase quickly and in top 3 asian economic';
        // up data db 
        await post.save();
        //fetch data
        const posts =  await Post.all();
        return view.render('index',{posts:posts.toJSON() }); 
    }
}

module.exports = PostController
