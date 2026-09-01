# async and sync  
if there is lot of data try to use async coz it will take time to read 
if there is small data and task use sync 
# fs.readFile => to read data of file store in variable and convert to string to make it readable
# fs.append => to add data in file
# fs.unlink => to delete file
# fs.writeFileSync => to create file and add data

class 2


# os => using this module we can access ram and data od our system
    1. os.totalmem()/1024/1024/1024 => tells total ram(in gb)
    2. os..freemem => 
    3. os.cpus
# nodemon  
# creating web server => communicate to your front end  
    1. http.createServer 
    2. let server = http.createServer((req,res) => {
    res.end("hello")
    }) parameter1 and parameter2 are decided they are request and response 
    3. server.listen(3003,() => {
    console.log("server is running...")
    }). => u can decide on which port u want to run your site
    4. req.url => console address of the site which is requested
    5. req.end => no code after this will run coz it will end req and and response 
# server usinh experss
    1. app.use => work as middlwware b/w req and response 
    2. u don't need to create server it is all ready build
    2. app.get => to give data and routing
    3. app.post => when u want data from client 
    4. thunder => we use to send request it work as front end for our server

# dyanamic routing
    /:id => when u use this u can write anything insteqd of if
    req.params(req parameter) => use to get data from user it gives us dyanamic data from client like id in prev one
    req.query(recieve parameter) =>  when u want to recieve something as parameter or query
    req.body => data is not shown in url 


    
jsonwebtoken generate id card for user based on theire role it will generate unique string for user profile

