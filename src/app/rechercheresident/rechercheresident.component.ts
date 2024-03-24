import { Component } from '@angular/core';

import { Console } from 'console';
import { DataService } from '../Service/data.service';
import { ResidentModule } from '../model/resident/resident.module';


@Component({
  selector: 'app-rechercheresident',
  templateUrl: './rechercheresident.component.html',
  styleUrl: './rechercheresident.component.css'
})
export class RechercheresidentComponent {
  date: Date=new Date();
  chambre:any;
  idCarte: number = 0;
  residents: any[]= [];
  newresident: any = {};
successMessage: string = '';
addresid!:ResidentModule;
afficherall:boolean=true;
afficherparnom:boolean=false;
afficherparchambre:boolean=false;
afficherdatedepart:boolean=false;
formulaire :boolean=false;
afficherparnom1:boolean=false;

  constructor(private residentservice: DataService) { }

  ngOnInit(): void {
    this.getresident();
    this.addresid =  {
      id  :null,
      id_carte : null,
      nom : null,
      code : null,
      date_Depart : new Date ('yyyy-mm-dd HH:mm:ss'),
      date_Arrive : new Date ('yyyy-mm-dd HH:mm:ss'),
      tel : null,
      email : null,
      age : null,
      cin : null,
      num_Chambre : null,
    }
  }
  getresident(){
    this.residentservice.getCars().subscribe(resident => {
      this.residents = resident;
      console.log(this.residents);

    });
  }
  getcarte(){
    this.residentservice.getalls(this.idCarte).subscribe(resident => {
      this.idCarte = resident;
      console.log(this.idCarte);

    });
  }

  listnom:any[]=[];
  name :any;
  getnom(name :any){
    this.residentservice.getdata(this.name).subscribe(resident => {
      this.listnom = resident;
      this.afficherparnom= true ;
      this.afficherall=false;
      console.log(this.listnom);

    });
  }
  listchambre:any[]=[];
  getnumchambre(chambre:any){
    this.residentservice.getchambre(this.chambre).subscribe(resident => {
      this.listchambre = resident;
      this.afficherparchambre= true ;
      this.afficherall=false;
      this.afficherparnom=false;
      console.log(this.listchambre);

    });
  }
  listdate:any[]=[];
  getdatedepart(date:Date){
    this.residentservice.getdate1(this.date).subscribe(resident => {
      this.listdate= resident;
      this.afficherdatedepart=true;
      this.afficherparchambre= false ;
      this.afficherall=false;
      this.afficherparnom=false;
      console.log(this.date);

    });
  }
  getdatearrive(){
    this.residentservice.getdate2(this.date).subscribe(resident => {
      this.date = resident;
      console.log(this.date);

    });
  }
 
  afficherformulaire(){
    this.afficherall= false;
    this.formulaire=true;
  }

  addResident(res : any) {
    this.residentservice.addCar(res).subscribe(() => {

    //  this.residents.push(response);; // Recharger la liste des voitures après l'ajout d'une nouvelle voiture
   //   this.newresident = {}; // Réinitialiser le formulaire
 //   });this.residents.push(this.newresident);

    // Envoyer une requête POST pour enregistrer la nouvelle voiture dans la base de données
//    this.residentservice.addCar(this.newresident).subscribe(() => {
      // Réinitialiser le formulaire
   //   this.newresident = {};
   this.getresident();
   this.successMessage = 'Résident ajouté avec succès.';

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

}










