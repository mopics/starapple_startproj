import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  menu = [
  {
    id:0,
    name:"HEREN"
  },
  {
    id:1,
    name:"DAMES"
  },
  {
    id:2,
    name:"KINDEREN"
  }];

  shopItems = 0;
  selectedType = 0;

  selectedColor = "zwart";
  selectedMaterial = "katoen";
  selectedArticle = null;
  colors = [
    {
      id:"zwart",
      name:"Zwart"
    },
    {
      id:"blauw",
      name:"Blauw"
    },
    {
      id:"bruin",
      name:"Bruin"
    },
    {
      id:"wit",
      name:"Wit"
    }
  ];
  materials = [
    {
      id:"katoen",
      name:"Katoen"
    },
    {
      id:"polyester",
      name:"Polyester"
    },
    {
      id:"wol",
      name:"Wol"
    }
  ]
  articles = [
    {
      name:"Artikel A",
      type:0,
      color:"zwart",
      material:"katoen",
      img:"/notset",
      price:"99,95"
    },
    {
      name:"Artikel B",
      type:1,
      color:"blauw",
      material:"polyester",
      img:"/notset",
      price:"49,95"
    },
    {
      name:"Artikel C",
      type:2,
      color:"bruin",
      material:"wol",
      img:"/notset",
      price:"49,95"
    },
    {
      name:"Artikel D",
      type:0,
      color:"bruin",
      material:"katoen",
      img:"/notset",
      price:"199,95"
    },
    {
      name:"Artikel E",
      type:1,
      color:"blauw",
      material:"katoen",
      img:"/notset",
      price:"99,95"
    },
    {
      name:"Artikel F",
      type:0,
      color:"wit",
      material:"wol",
      img:"/notset",
      price:"99,95"
    },
    {
      name:"Artikel G",
      type:1,
      color:"zwart",
      material:"katoen",
      img:"/notset",
      price:"&euro;69,95"
    },
    {
      name:"Artikel H",
      type:2,
      color:"blauw",
      material:"polyester",
      img:"/notset",
      price:"99,95"
    },
    {
      name:"Artikel I",
      type:0,
      color:"bruin",
      material:"katoen",
      img:"/notset",
      price:"99,95"
    },
    {
      name:"Artikel J",
      type:1,
      color:"wit",
      material:"katoen",
      img:"/notset",
      price:"99,95"
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  colorClicked( id ){
    this.selectedColor = id;
  }
  materialClicked( id ){
    this.selectedMaterial = id;
  }
  articleClicked( id ){
    this.selectedArticle = id;
  }
  menuItmClicked( id ){
    this.selectedType = id;
  }

}
