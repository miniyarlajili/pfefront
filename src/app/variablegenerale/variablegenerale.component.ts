import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';
import { GeneraleModule } from '../model/generale/generale.module';

@Component({
  selector: 'app-variablegenerale',
  templateUrl: './variablegenerale.component.html',
  styleUrl: './variablegenerale.component.css'
})
export class VariablegeneraleComponent {

  constructor(private residentservice: DataService) {
    }
    afficherall:boolean=true;
    formulaire :boolean=false;
    addgenerale!:GeneraleModule;
    add!:GeneraleModule;
  list:any[]=[];
  ngOnInit(): void {
    this.getvariableg();
    this.addgenerale =  {
      id_v : null,
      valeurmax : null,
      valeurmin : null,
      codehotel : null,
      description : null,
     }
    }
  getvariableg(){
    this.residentservice.getvariable().subscribe(resident => {
      this.list = resident;
      console.log(this.list);

    });
  }

  deleteV(Id: number) {
    // Supprimer la voiture du backend
    this.residentservice.delete(Id).subscribe(() => {
      // Une fois que la suppression est réussie, supprimer la voiture de la liste locale
     this.list = this.list.filter(resident => resident.id !== Id);
     this.getvariableg();
    });
  }
  successMessage: string = '';
  addResident(res : any) {
    this.residentservice.add(res).subscribe(() => {


   this.getvariableg();
   this.successMessage = 'Résident ajouté avec succès.';

    });
  }
  afficherformulaire(){
    this.afficherall= false;
    this.formulaire=true;
  }
}
