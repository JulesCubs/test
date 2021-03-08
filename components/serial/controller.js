const { exec, spawn } = require('child_process');
const os = require('os');
const fs = require('fs');

function postSerial () {
    return new Promise ((resolve, reject) => {
        /*if(!message) {
            console.log("Error en el mensaje");
            reject('Error en la solicitud');
            return false;
        }*/

        const fullMsg = {
            date: new Date(),
            so: os.platform(),
            arch: os.arch(),
        }

        let comand = '';

        switch(fullMsg.so) {
            case 'win32':
                comand = 'wmic csproduct get IdentifyingNumber'
                break;
            case 'linux':
                if (fullMsg.arch === 'arm') {
                    comand = 'cat /proc/cpuinfo | grep Serial';
                }
                else {
                    comand = 'dmidecode -t system | grep Serial';
                }
                break;
            case 'darwin':
                comand = 'system_profiler SPHardwareDataType | grep Serial';
                break;
        }
        
        exec(comand, (error, stdout, stderr) => {
            if (error) {
                console.error(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }

            console.log(`${stdout}`)
            
        });
        
        resolve(fullMsg);
    });
            
}
            
module.exports = {
    postSerial
}