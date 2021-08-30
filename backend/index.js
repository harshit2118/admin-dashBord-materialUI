const express = require('express');
const si = require('systeminformation');
const os = require('os');
const {exec} = require('child_process');
const { stdout, stderr } = require('process');
let app = express();
app.use(express.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header(
        "Access-Control-Expose-Headers",
        "X-Auth-Token"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
    res.header("Access-Control-Allow-Credentials",true);
    next();
});

let getSystemInfo = () =>{
    return new Promise((res,rej)=>{
        si.cpu()
        .then(data => {
            console.log(data);
            res(data);
        })
        .catch(err => rej(err))
    });
}

let getBatteryInfo = () =>{
    return new Promise((res,rej)=>{
        si.battery()
        .then(data => {
            console.log(data);
            res(data);
        })
        .catch(err => rej(err))
    });
}

let getProcessList = () =>{
    return new Promise((res,rej)=>{
        exec('tasklist',(err,stdout,stderr)=>{
            if(err){
                console.log(err);
                rej(err);
            }
            if(stderr){
                console.log(stderr);
                rej(stderr)
            }
            let lines = stdout.trim().split("\n");
            let processes = lines.slice(2);
            var parsed = processes.map(function(process) {
                return process.match(/(.+?)[\s]+?(\d+)/); //match the process name and ID
            });
            var result = parsed.map((process)=>process.filter((x,index)=>{
                if(index>0){
                    return x;
                }
            }));
            let processList = result.map((process)=>({
                name:process[0],
                pid : process[1] 
            }));
            res(processList);
        });
    });
}

app.get('/systemDetails',async(req,res)=>{
    let freeMem = Math.ceil( os.freemem()/(1024*1024));
    let totalMem = Math.ceil(os.totalmem()/(1024*1024));
    let arch = os.arch();
    let platform = os.platform();
    let type = os.type();
    let uptime = Math.floor(os.uptime()/60);
    let userInfo = JSON.stringify(os.userInfo());
    let processes = []
    let cpu = {}
    let battery = {}
    try {
        processes = await getProcessList();
        cpu = await getSystemInfo();
        battery = await getBatteryInfo();
    } catch (error) {
        processes = error;
    }
    res.json({
        freeMemory : freeMem,
        totalMemory : totalMem,
        architecture : arch,
        platform : platform,
        osType : type,
        osUpTime : uptime,
        cpuDetails : cpu,
        batteryDetails : battery,
        userInformation : userInfo,
        processes : processes,
    });
});
const port = 2310;
app.listen(port,(req,res)=>console.log(`Server is running on port ${port}`));
