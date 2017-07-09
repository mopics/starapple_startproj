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

  selectedColor = "all";
  selectedMaterial = "all";
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
    },
    {
      id:"all",
      name:"Alle kleuren"
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
    },
    {
      id:"all",
      name:"Alle materialen"
    }
  ]
  articles = [];
  filteredArticles = [];

  constructor() { }

  ngOnInit() {
    this.articles = this.generateArticles();
    this.filterArticles();
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
            art.name = this.materials[m].name+"("+this.colors[c].name+") "+cnt;
            art.type = t;
            art.color = this.colors[c].id;
            art.material = this.materials[m].id;
            art.img = "assets/"+types[t]+"/"+colors[c]+"_cotton.jpg"//"assets/"+types[t]+"/"+this.colors[c].id+"_"+this.materials[m].id+".jpg";
            art.price = this.genRandomPrice();
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
    this.filterArticles();
  }
  materialClicked( id ) {
    this.selectedMaterial = id;
    this.filterArticles();
  }
  articleClicked( id ){
    this.selectedArticle = id;
  }
  menuItmClicked( id ){
    this.selectedType = id;
    this.filterArticles();
  }
  purchase(){
    this.shopItems ++;
  }
  genRandomPrice(){
    var e = Math.round(Math.random()*100)+"";
    if( e.length>2 ){
      e = "00";
    }else if(e.length<2){
      e = "0"+e;
    }
    var c = Math.round(Math.random()*100)+"";
    if( c.length>2 ){
      c = "00";
    }else if(c.length<2){
      c = "0"+c;
    }
    return e + "," + c;

  }
  filterArticles(){
    this.filteredArticles = [];
    for( var i=0; i<this.articles.length; i++ ){
      if( this.showArticle( this.articles[i])){
        this.filteredArticles.push( this.articles[i]);
      }
    }
  }
  showArticle( art ) {
    var t_ok = false;
    var c_ok = false;
    var m_ok = false;
    if( art.type == this.selectedType ){
      t_ok = true;
      if( this.selectedMaterial=="all" ){
        m_ok = true;
      }
      if(this.selectedColor=="all" ){
        c_ok = true;
      }
      if( this.selectedMaterial == art.material ){
        m_ok = true;
      }
      if( this.selectedColor==art.color){
        c_ok = true;
      }
      if( t_ok==true && c_ok==true && m_ok==true) {
        return true;
      }
      return false;
    }
  }
}
