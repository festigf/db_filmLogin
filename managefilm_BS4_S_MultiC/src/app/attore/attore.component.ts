import { Component,OnInit } from '@angular/core';
import {Attore } from '../../Types_dbfilm/Attore';
import {ServiceDbfilmService} from '../../Services/service-dbfilm.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attore',
  templateUrl: './attore.component.html'
})
export class AttoreComponent implements OnInit {
  title = 'app';
  attori:Attore[];
  editAttore: Attore;
  errmsg:string;
  page=1;
  nPages=0;
  constructor(
    private sd:ServiceDbfilmService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(){
    this.getAttori();  
  }
  onEditSave(attore:Attore){
    console.log(attore);
    this.editAttore=null;
    this.getAttori();
  }

  onEditCancel(){
    this.editAttore=null;
  }

  getAttori(){
    this.GetData("attori",this.page,3);
/*    this.sd.getAttori()
    .subscribe(res => {
       this.attori  = res      
    },
    errorCode => this.errmsg = errorCode
    );*/
  }

  GetData(tableName:string,indexPage:number,pageSize:number){
    this.sd.getData(tableName,indexPage,pageSize)
    .subscribe(res => {
       console.log( res      );
       this.attori=res[0];
       console.log("elenco attori");
       console.log(this.attori);
       console.log(res[2]);
       this.nPages=res[2][0].nPages;
    },
    errorCode => this.errmsg = errorCode
    );
    
  }

  OnDel(codAttore){
    this.sd.delAttore(codAttore)
     .subscribe(res => {
        console.log(res);
        if (res.status==200)
          { 
            this.getAttori() ;
          }
     },
     errorCode => this.errmsg = errorCode
    );
  }
  OnEdit(attore:Attore){
    this.editAttore=attore;
  }

  OnInsert(){
    this.editAttore= new Attore(-1,"",2000,"USA");
  }

  onClick(page:number){
    this.page=page;
    console.log("page");
    console.log(page);
    this.GetData("attori",this.page,3);
  }

  OnAttoreFilms(attore:Attore) {
  this.router.navigate(['attorefilm',JSON.stringify(attore)],{ skipLocationChange: true });
  }

}
