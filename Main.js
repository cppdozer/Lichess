const { app , Menu , MenuItem ,ipcMain, Notification , BrowserWindow } = require("electron");
const Url = require("url");
const Path = require("path");

let MainWindow

class Notifications {
  constructor(){
    let myNotification = new Notification('Lichess', {
  body: 'Lichess Unofficial Desktop Client is ready.'
});
  }
};

class BaseWindow {
   MainWindow(Window){
     Window = new BrowserWindow({
       width:1200 ,
       height:900 ,
       frame:true,
       darkTheme:true,
       title:"Lichess Unofficial Desktop Application",
       icon : "Lichess.ico"
     });

     //Window.setMenu(null);

     this.ToolBar();
     Window.loadURL("https://www.lichess.org");
     let notifications = new Notifications();
     return true;
   }

   ToolBar(){
     const ToolBar = new Menu();

   }

   IconURL(){
     const IconUrl = Url.format({
       pathname: Path.join(__dirname,"Lichess.ico"),
       slashes:false
     });

     return IconUrl;
   }
};

class Window extends BaseWindow {

  constructor(Application,Window)
  {
    super();
    const CreateWindow = new Promise( ( Resolve , Reject ) => {
      Application.on("ready", () => {
        this.MainWindow(Window);
      });
//      console.log(Application.isReady());
      if(Application.isReady()) {
          Resolve("[INFO] : Her şey normal.");
      }
      else {
        Reject("[WARNING] : Hata bulundu.");
      }
    });

    this.CheckPromise(CreateWindow);
    this.WhenClosed(Application,Window);
  }
  CheckPromise(Struct){
    Struct.then(function(Message){
      console.log(Message);
    }).catch(function(Message){
      console.log(Message);
    });
  }
  WhenClosed(Application,Window){
    Application.on("closed",()=>{
      Window = null
    });
  }
};


let RunApp = new Window(app,MainWindow);


 const setupEvents = require('./setupEvents')
 if (setupEvents.handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
 }
