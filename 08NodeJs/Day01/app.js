//import
const fs=require('fs')
fs.writeFile("notes.txt","This is my first file created",()=>{})
fs.writeFile("txt.txt","This is a file called txt",()=>{})
let data = "When file is a filename, asynchronously writes data to the file, replacing the file if it already exists. data can be a string or a buffer.When file is a file descriptor, the behavior is similar to calling fs.write() directly (which is recommended). See the notes below on using a file descriptor.The encoding option is ignored if data is a buffer.The mode option only affects the newly created file. See fs.open() for more details.sga-expe-hpo"
//fs.writeFile("test1.txt",data,()=>{})

//appendFileSync
// "\n" <<-- new line
fs.appendFile("test1.txt","\n Unexpected token 'node' in expression or statement.",()=>{})
