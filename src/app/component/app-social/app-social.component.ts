import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router"
@Component({
  selector: 'app-app-social',
  templateUrl: './app-social.component.html',
  styleUrls: ['./app-social.component.scss']
})
export class AppSocialComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
  }
  onFacebook(){
    this.router.navigate(['https://en-gb.facebook.com/'])
  }
  ontwitter(){
    this.router.navigate(['https://twitter.com/'])
  }
  onlinkedin(){
    this.router.navigate(['https://www.linkedin.com/'])
  }
  onGoogleplus(){
    this.router.navigate([''])
  }
}
