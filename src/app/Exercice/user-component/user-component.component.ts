import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  name = 'toto';
  email = 'toto@Fivepoints.fr';
  address = 'rue d\rue de la bourse lac2'
  hobbies = ['Music', 'Movies', 'Sports'];
  display = false
  people = [
    {
      titre: 'Le championnat du monde',
      contenu: 'Le champion du monde de cette année est....',
      auteur: 'Med Taher',
      date: '12/12/2005'
    },
    {
      titre: 'Les nouveaux parents',
      contenu: 'Les nouveaux parents....',
      auteur: 'Ahmed Said',
      date: '11/11/2018'
    },

    {
      titre: 'Comment écrire votre CV',
      contenu: 'Pour réussir à décraucher un emploi ...',
      auteur: 'Marie Elsa',
      date: '02/04/2017'
    }
  ]
  ngOnInit(): void {
  }

  Afficher() {
    this.display = true
  }
  supprimer() {
    this.display = false
  }
}
