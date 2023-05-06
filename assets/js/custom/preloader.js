var terminal = $('.term');
var progressbar = document.getElementById("preloader-bar");
var speed = 150;    // Writing speed ms
var command = 'sudo ./exploit.sh';

var i = 0;

loader();

function loader(){
    terminal.append(command.charAt(i));
    i++;
    setTimeout(
        function(){
            if(i < command.length){
                loader();
            }else{
                terminal.append("<br>");
                i = 0;
                setTimeout(function(){execution();}, 1000);
            }
        }, Math.floor(Math.random() * 220) + 50);
}

var count = 0;
var time = 0;
function execution(){
    var step = 100 / output.length;
    interval = setInterval(() => {
        terminal.append("[  " + i / 1000 + "] " + output[i] + "<br>");
        i++;
        progressbar.style.width = step * i + "%";
        if(i >= output.length){
            // No more output to print
            $("#preloader").fadeOut(500);
            clearInterval(interval);
        }
    }, 70);
}

var output = [
    "Loading exploit",
    "Started scanning",
    "Checking available ports...",
    "Found 3 open ports: 22, 443, 579",
    "Detecting vulnerable services running on target host...",
    "[VULNERABILITY FOUND] Found one vulnerable service",
    "Preparing payload...",
    "Configuring payload",
    "Payload ready",
    "Uploading payload to remote host",
    "Payload uploaded",
    "Configuring listener",
    "Executing payload...",
    "Waiting for incoming reverse shell connection",
    "Incoming connection received",
    "Remote connection estabilished",
    "Upgrading connection",
    "Connection upgraded",
    "Looking for privilege excalation vulnerabilities",
    "Found vulnerable process running with root privileges",
    "Owning process....",
    "Process owned",
    "Root connection established",
    "[SYSTEM HACKED]",
    "root@deeptought:~$ "
];