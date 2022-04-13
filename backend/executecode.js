const {exec}=require('child_process');
const fs=require('fs');
const path=require('path');
const outputpath=path.join(__dirname,"outputs");
if(!fs.existsSync(outputpath))
{
    fs.mkdirSync(outputpath,{recursive:true});
}

const executefile=(filepath)=>{
  const filename=path.basename(filepath).split(".")[0];
  const outpath=path.join(outputpath,`${filename}`)
  
return new Promise((resolve,reject) =>{

  exec(`g++ ${filepath} -o ${outpath} && cd outputs && ${filename}.exe`,
  (error,stdout,stderr) =>{
    
    if(error)
    {
      console.error(error);
      reject({error,stderr});
    }
    if(stderr)
    {

      reject({stderr});
    }

    resolve(stdout);
  
  })
})
};

module.exports={executefile,};