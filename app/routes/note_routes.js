const express = require("express")
const router = express.Router();

   
router.get('/notes', (req, res) => {
    //   const note = { text: req.body.body, title: req.body.title };
    //   db.collection('notes').insert(note, (err, result) => {
    //     if (err) { 
    //       res.send({ 'error': 'An error has occurred' }); 
    //     } else {
    //       res.send(result.ops[0]);
    //     }
    //   });
    res.send("Hello")
    });


    router.post('/notes', (req,res)=>{
        res.send("post")
    })
    module.exports= router
 