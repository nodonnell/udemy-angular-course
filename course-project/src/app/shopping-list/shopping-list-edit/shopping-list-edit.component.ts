import { Component, Output, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  onAddIngredient() {
    var localName = this.nameInput.nativeElement.value;
    var localAmount = this.amountInput.nativeElement.value;
    console.log('Name: ' + localName + '. Amount: ' + localAmount + '.');
    this.ingredientAdded.emit(new Ingredient(localName, localAmount));
  }
}
