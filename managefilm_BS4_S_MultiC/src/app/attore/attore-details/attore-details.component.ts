import { Component, OnInit,Input,SimpleChanges,Output, EventEmitter } from '@angular/core';
import {Attore} from '../../../Types_dbfilm/Attore'  ; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceDbfilmService } from '../../../Services/service-dbfilm.service';

@Component({
  selector: 'app-attore-details',
  templateUrl: './attore-details.component.html',
  styleUrls: ['./attore-details.component.css']
})
export class AttoreDetailsComponent implements OnInit {
  @Input() attore:Attore;
  @Output() onEditSave = new EventEmitter<Attore>();
  @Output() onEditCancel = new EventEmitter();
  attoreForm: FormGroup;

  constructor(private sd:ServiceDbfilmService) { 
    console.log(this.attore);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.attore){
      this.attoreForm.setValue({
          'codAttore':this.attore.codAttore,
          'nome':this.attore.nome,
          'annoNascita':this.attore.annoNascita,
          'nazionalita':this.attore.nazionalita});
    }
  }
  ngOnInit() {
    console.log(this.attore);
       this.attoreForm = new FormGroup({
        codAttore: new FormControl({value: -1},Validators.required),
        nome: new FormControl('',Validators.required),
        annoNascita: new FormControl('',Validators.required),
        nazionalita: new FormControl('',Validators.required)
      });
   }

  onSubmit(formValue: Object){
    console.log(this.attoreForm.value);
    this.sd.modInsAttore(this.attoreForm.value)
    .subscribe(res => {
      if (res.status==200)
        { console.log("emit");
          this.onEditSave.emit(this.attoreForm.value);
        }
      }
  );
  } 

  onCancel(){
    this.onEditCancel.emit();
  }

}
