import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myclass',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myclass.component.html',
  styleUrl: './myclass.component.css',
})
export class MyclassComponent {
  name = 'Olena F.';
}
