import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-list-articles',
  template: `
    <p>
      list-articles works!
    </p>
  `,
  styles: []
})
export class ListArticlesComponent implements OnInit {

  constructor(private articulosService: ArticulosService) { }

  ngOnInit() {
    this.articulosService.getArticle().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
