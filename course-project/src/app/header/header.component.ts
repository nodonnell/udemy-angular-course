import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() navigationSelected = new EventEmitter<string>();

  onNavigate(target: string) {
    this.navigationSelected.emit(target);
  }
}
