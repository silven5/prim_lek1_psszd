import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//Для прикладу5
import { FormsModule } from '@angular/forms';
//Імпортуємо наш компонент
import { ChildComponent } from './child/child.component';
import { MyclassComponent } from './myclass/myclass.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ChildComponent,
    MyclassComponent,
  ],
})
export class AppComponent {
  title = 'prim_lek1';
  name = 'Olena';
  age = 25;
  colspan = 3;
  isRed = false;
  isRed1 = true;
  red = 'isRedBox';
  count: number = 0;
  name1: string = 'Lena';
  example1 = true;
  name2: string = 'Tom';
  onClickme($event: any): void {
    this.count++;
    console.log($event);
  }
}
