import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
 <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Make</strong> with <span> Angular Firebase Contenful Bulma-css  </span>  <strong>Blog</strong>
    </p>
  </div>
</footer>
`,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}