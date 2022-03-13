import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ReadyAssist';
  showLoader = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }
}
