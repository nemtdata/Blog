import {
  Component,
  OnInit
} from '@angular/core';
import {
  ContentfulService
} from 'src/app/services/contentful.service';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-main',
  template: `
<section class="hero is-info is-halvheight is-bold">
    <div class="hero-body">
      <div class="container">
         <h1 class="title">Blog</h1>
         <h2 class="subtitle">Det er et skoleprojekt</h2>
      </div>
    </div>
  </section>
 
<section class="section">

  <div class="tile is-ancestor " *ngIf="obs$ | async as blogPosts">
    <div  class="tile is-child box" [ngClass]="{'show': show}" *ngFor="let blogPost of blogPosts" >
        <h3 class="title is-3">{{blogPost.fields.title | limitTo : 30 }}</h3>
           <article class="subtitle is-7" > 
             <div class="image is-square">
               <img src="{{ blogPost.fields.img.fields.file.url }}"/>
             </div>
                <p class="author"> Oprettet af {{blogPost.fields.author}} </p>
                <p class="datetime">{{blogPost.sys.createdAt | date:'fullDate'}}</p> 
                <p class="time"> Læsetid {{blogPost.fields.readTime}} min</p>
            </article>
                <p class= "tile is-parent is-vertical" >{{blogPost.fields.description}}</p>
                 <a type="button" (click)="onClick(blogPost.sys.id)"> Læs mere </a>
    </div>
  </div>

<Section class="center" *ngIf="obs$ | async as blogPosts"> 
      <P> Seneste Post</P>
       
     <ul class="card" *ngFor=" let blogPost of blogPosts  let i=index">
       <li *ngIf="i<5">
         <a (click)="onClick(blogPost.sys.id )"> {{blogPost.fields.title  }}</a>  
       </li>
     </ul> 
     
    </Section> 
</section>
`,
  styles: [`

  .hero {
  
    background-image: url('/assets/blog-header-background.jpg') !important;
    background-size:  cover;
    background-position: center center;
    
  }
  `]
})
export class MainComponent implements OnInit {
  TruncatePipe = true;
  show = false;
  obs$;

  constructor(private cs: ContentfulService, private router: Router) {}

  ngOnInit() {
    this.obs$ = this.cs.getBlogPosts();
    setTimeout(() => {
      this.show = true;
    }, 50);
  }

  onClick(id) {
    console.log(id)
    this.router.navigate(['/post', id])
  }
  public get blogPosts() {
    return this.blogPosts.filter((blogPosts, index) => index > 5)
  }
}
