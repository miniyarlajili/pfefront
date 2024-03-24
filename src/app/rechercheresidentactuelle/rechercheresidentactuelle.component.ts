import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';
import { ResidentModule } from '../model/resident/resident.module'
@Component({
  selector: 'app-rechercheresidentactuelle',
  templateUrl: './rechercheresidentactuelle.component.html',
  styleUrl: './rechercheresidentactuelle.component.css'
})
export class RechercheresidentactuelleComponent {
  nom:any;
  listnom1:any[]=[]
  date: Date=new Date();
  chambre:any;
  idCarte: number = 0;
  residents: any[]= [];
  newresident: any = {};
successMessage: string = '';
afficherall:boolean=true;
afficherparnom:boolean=false;
afficherparchambre:boolean=false;
afficherdatedepart:boolean=false;
formulaire :boolean=false;
afficherparnom1:boolean=false;
addresid!:ResidentModule;

constructor(private residentservice: DataService) { }
ngOnInit(): void {

}
getresident(){
  this.residentservice.getCars().subscribe(resident => {
    this.residents = resident;
    console.log(this.residents);

  });
}
  getnom1(nom :any){
    this.residentservice.getnom(this.nom).subscribe(resident => {
      this.listnom1 = resident;
      this.afficherparnom1= true ;
      this.afficherall=false;
      this.afficherparchambre=false;
      console.log(this.listnom1);

    });
  }
  listchambre:any[]=[];
  getnumchambre1(chambre1:any){
    this.residentservice.getchambre2(this.chambre).subscribe(resident => {
      this.listchambre = resident;
      this.afficherparchambre= true ;
      this.afficherall=false;
      this.afficherparnom=false;
      console.log(this.listchambre);

    });
  }
  listdate:any[]=[];
  getdatedepart1(date:Date){
    this.residentservice.getdepart(this.date).subscribe(resident => {
      this.listdate= resident;
      this.afficherdatedepart=true;
      this.afficherparchambre= false ;
      this.afficherall=false;
      this.afficherparnom=false;
      console.log(this.date);

    });
  }
  getdatearrive1(){
    this.residentservice.getarrive(this.date).subscribe(resident => {
      this.date = resident;
      console.log(this.date);

    });
  }


  deleteCar(carId: number) {
    // Supprimer la voiture du backend
    this.residentservice.deleteCar(carId).subscribe(() => {
      // Une fois que la suppression est réussie, supprimer la voiture de la liste locale
     this.residents = this.residents.filter(resident => resident.id !== carId);
    });
  }

  updateCar(updatedCar: any) {
    this.residentservice.updateCar(updatedCar).subscribe(() => {
      const index = this.residents.findIndex(car => car.id === updatedCar.id);
      if (index !== -1) {
        this.residents[index] = updatedCar; // Mettre à jour la voiture dans la liste locale
      }
    });
  }
  afficherformulaire(){
    this.afficherall= false;
    this.formulaire=true;
  }


}



