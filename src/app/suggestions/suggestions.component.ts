import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatListModule],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.scss'
})
export class SuggestionsComponent {

}
