const express=require('express');
const {generatefile}=require('./codegenerator.js')    
var cors = require('cors')
const{executefile}=require('./executecode.js');
const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(3000,()=>{
    console.log("listening on port 3000");
})

app.get('/', (req,res)=>{
res.json({hello:"world"});
});


app.post('/',async (req,res)=>{
    let lang=req.body.language;
    const code=req.body.code;

    if(code===undefined)
    {
        return res.status(400).json({
            status:false,
            error:"empty code not allowed"
        })
    }
    // if(lang===undefined)
    // lang="cpp";
      try{

          const filepath= await generatefile(lang,code);
          const output=await executefile(filepath);    
          console.log(req.body);
          return res.json({output});
        }
        catch(err){
            res.status(500).json({err})
        }
})