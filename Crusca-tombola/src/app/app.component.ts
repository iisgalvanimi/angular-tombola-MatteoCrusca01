import { Component } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crusca-tombola';
  numeriEstratti: Array<number>=[];
  ultimoNumero:string="...";
  estrazioneNumero(){
    var verifica=false;
    while(verifica==false){
      var n= Math.round(Math.random()*99+1)
      verifica=true;
      for(var i = 0; i< this.numeriEstratti.length; i++){
        if(n == this.numeriEstratti[i]){
          verifica = false;
        }
      }
      if(verifica){
      this.numeriEstratti.push(n)
      console.log(n);
      var scritta=document.getElementById("shownumber");
      scritta.innerHTML=String(n);
      this.ultimoNumero = ""+n;
      if(this.numeriEstratti.length==100){
        console.log("sono usciti tutti i numeri");
        var bottone = document.getElementById("button");
        bottone.setAttribute("disabled","disabled");
        alert("Tutti i numeri sono stati estratti");
        return false;
      }
    }

    }
    return false;
  }
}
