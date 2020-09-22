import { Ingredient } from '../../shared/ingredient.model';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  ViewChild,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('amountInput') amountInputReference: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    const ingredientName = this.nameInputReference.nativeElement.value;
    const ingredientAmount = this.amountInputReference.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
