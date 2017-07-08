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
  selectedType = 1;

  selectedColor = "black";
  selectedMaterial = "cotton";
  selectedArticle = null;
  colors = [
    {
      id:"black",
      name:"Zwart"
    },
    {
      id:"blue",
      name:"Blauw"
    },
    {
      id:"brown",
      name:"Bruin"
    },
    {
      id:"white",
      name:"Wit"
    }
  ];
  materials = [
    {
      id:"cotton",
      name:"Katoen"
    },
    {
      id:"poly",
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
      img:"assets/men/black_cotton.jpg",
      price:"99,95"
    },
    {
      name:"Artikel B",
      type:1,
      color:"blauw",
      material:"polyester",
      img:"assets/women/blue_poly.jpg",
      price:"49,95"
    },
    {
      name:"Artikel C",
      type:2,
      color:"bruin",
      material:"wol",
      img:"assets/kids/brown_wol.jpg",
      price:"49,95"
    },
    {
      name:"Artikel D",
      type:0,
      color:"bruin",
      material:"katoen",
      img:"assets/men/brown_cotton.jpg",
      price:"199,95"
    },
    {
      name:"Artikel E",
      type:1,
      color:"blauw",
      material:"katoen",
      img:"assets/women/blue_cotton.jpg",
      price:"99,95"
    },
    {
      name:"Artikel F",
      type:0,
      color:"wit",
      material:"wol",
      img:"assets/men/white_wol.jpg",
      price:"99,95"
    },
    {
      name:"Artikel G",
      type:1,
      color:"zwart",
      material:"katoen",
      img:"assets/women/black_cotton.jpg",
      price:"&euro;69,95"
    },
    {
      name:"Artikel H",
      type:2,
      color:"blauw",
      material:"polyester",
      img:"assets/kids/blue_poly.jpg",
      price:"99,95"
    },
    {
      name:"Artikel I",
      type:0,
      color:"bruin",
      material:"katoen",
      img:"assets/men/brown_cotton.jpg",
      price:"99,95"
    },
    {
      name:"Artikel J",
      type:1,
      color:"wit",
      material:"katoen",
      img:"assets/women/white_cotton.jpg",
      price:"99,95"
    },
  ];
  constructor() { }

  ngOnInit() {
    this.articles = this.generateArticles();
  }

  generateArticles(){
    var arr = [];
    var types = ["men", "women", "kids" ];
    var colors = ["black","blue","brown","white"];
    var cnt = 0;

    for( var i=0; i<20; i++ ){


      // create 2 more for-loops recursivly
      for( var t=0; t<3; t++ ){
        for( var m=0; m<3; m++ ){
          for( var c = 0; c<4; c++ ){
            var art = { name:"", type:0, color:"", material:"", img:"", price:"99,95" };
            art.name = "Artikel "+cnt;
            art.type = t;
            art.color = this.colors[c].id;
            art.material = this.materials[m].id;
            art.img = "assets/"+types[t]+"/"+colors[c]+"_cotton.jpg"//"assets/"+types[t]+"/"+this.colors[c].id+"_"+this.materials[m].id+".jpg";
            art.price = Math.round(Math.random()*100) + "," + Math.round(Math.random()*100);
            arr.push( art );
            cnt ++;
          }
        }
      }
    }
    //console.log( arr );
    return arr;
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
