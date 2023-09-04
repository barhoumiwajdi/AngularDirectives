import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  id1 = 0
  resultat1 = 0
  resultat2 = 0

  ngOnInit(): void {

  }
  cercle() {
    console.log(this.id1);
    this.resultat2 = this.id1 * 3.14
  }
  carre() {
    this.resultat1 = this.id1 * this.id1

  }

}
