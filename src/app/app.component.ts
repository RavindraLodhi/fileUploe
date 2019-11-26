import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Angular';
  Window;
  Window1;
  count :number = 2;
  constructor() {
   console.log(window);
   
    
  }
  ngAfterViewInit() {
    //this.ss();
    // function():void {
      try {
        window.navigator.mediaDevices['getDisplayMedia({video:true})']
      } catch(err) {
        console.error("Error: " + err);
      }
      
    // }
    
  }
 windowOpen() {
        this.Window =  window.open("", "TCerrorWindow")
        setTimeout(() => {
          this.Window.close();
        }, 50000);
       // navigator.mediaDevices.getDisplayMedia() 
  }

  windowOpen1() {
    this.Window1 = window.open(
     "https://examroom.ai/candidate/ada/#/login/",
      "_blank", "width=200, height=400");
     
      
}

  windowBlur(){
    this.Window.blur();
    window.focus() 
  }
  windowFocus(){
  this.Window.focus();
  }
  windowFocus1(){
    this.Window1.focus();
    }
  ss() {
    document.getElementById("gg").focus()
  }
  myVar
  main() {
    this.myVar = setInterval(()=>{this.main1()}, 250);   
  } 
    main1(){  

      if(this.count % 2 == 0){
        this.Window.focus();
        //this.Window1.blur(); 
        this.count++;
        //console.log("if");  
      }
      else{
      //this.Window.focus(); 
      // window.frames.focus();
        this.Window.close();
         window.focus()
      //console.log(window.focus());
      //console.log(this.Window);
      console.log(window);
      // console.log(this.Window1);
      
       this.count++;
      }
      console.log("count",this.count);
      if(this.count == 20){
        clearInterval(this.myVar);
       

      }
    }
   
}