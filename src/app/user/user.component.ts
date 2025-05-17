import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  signal,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}

// avatar = input.required<string>();
// name = input.required<string>();
// id = input.required<string>();

// select = output<string>();

// imagePath = computed(() => {
//   return 'users/' + this.avatar();
// });
