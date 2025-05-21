import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() selectedUserId = new EventEmitter<string>();

  get imagePath() {
    return '/users/' + this.avatar;
  }

  onSelectUser() {
    this.selectedUserId.emit(this.id);
  }
}

// avatar = input.required<string>();
// name = input.required<string>();
// id = input.required<string>();

// select = output<string>();

// imagePath = computed(() => {
//   return 'users/' + this.avatar();
// });
