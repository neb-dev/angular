import { Component, input, EventEmitter, Output } from '@angular/core';
import { DummyUser } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<DummyUser>();
  @Output() selectedUserId = new EventEmitter<string>();

  get imagePath() {
    return '/users/' + this.user().avatar;
  }

  onSelectUser() {
    this.selectedUserId.emit(this.user().id);
  }
}

// @Input({ required: true }) avatar!: string;
// @Input({ required: true }) name!: string;
// @Input({ required: true }) id!: string;

// avatar = input.required<string>();
// name = input.required<string>();
// id = input.required<string>();

// select = output<string>();

// imagePath = computed(() => {
//   return 'users/' + this.avatar();
// });
