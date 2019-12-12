var express = require('express');
var query = require('../db');
const router = express.Router();
// 取消喜欢文章

router.post('/',async(req,res)=>{
    const {uid,chid} = req.body;
    // const uid = 'k3mimknra';
    // const chid = 20;

    await query('delete from userLikes where uid=? and chid=?',[uid,chid]);
    var likes = await query('select likes from chapter where chid=?',[chid]);
    likes = JSON.parse(JSON.stringify(likes))[0].likes;
    likes --;
    await query('update chapter set likes=? where chid=?',[likes,chid]);

    res.send({msg:'success'});

});

module.exports = router;