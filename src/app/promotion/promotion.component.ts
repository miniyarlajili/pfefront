import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';
import { PromoModule } from '../model/promo/promo.module';
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.css'
})
export class PromotionComponent {
  promo!:PromoModule;
  afficherall:boolean=true;
  formulaire:boolean=false;
  imageUrl:string='';
  buttonImageSrc: string = 'chemin/vers/image/bouton.png';
  constructor(private residentservice: DataService) { }
  ngOnInit(): void {
    this.Promotion();
    this.promo = {
      id: null,
      nom: null,
      description:null,
      date:null,
      image :null,

    }
  }
  list:any[]=[];
  Promotion(){
    this.residentservice.getPromotion().subscribe(resident => {
      this.list = resident;
      console.log(this.list);
    });
}

add(res : any) {
  this.residentservice.addPromo(res).subscribe(() => {


 this.Promotion();


  });
}

deletepromo(Id: number) {
  // Supprimer la voiture du backend
  this.residentservice.deletep(Id).subscribe(() => {
    // Une fois que la suppression est réussie, supprimer la voiture de la liste locale
   this.list = this.list.filter(resident => resident.id !== Id);
   this.Promotion();
  });
}
afficherformulaire(){
  this.afficherall=false;
  this.formulaire=true;
}
onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
      this.buttonImageSrc = this.imageUrl; // Met à jour l'image du bouton avec l'image sélectionnée
    };
  }
}
}
