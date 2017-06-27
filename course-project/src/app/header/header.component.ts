import { Component } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private httpService: HttpService) {}

  onSaveData() {
    this.httpService.saveRecipeData();
  }

  onLoadData() {
    this.httpService.loadRecipeData();
  }
}
