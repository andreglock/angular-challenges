import { TitleCasePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

type Category = 'Youth' | 'Junior' | 'Open' | 'Senior';
const ageToCategory = (age: number): Category => {
  if (age < 10) return 'Youth';
  else if (age < 18) return 'Junior';
  else if (age < 35) return 'Open';
  return 'Senior';
};

@Component({
  selector: 'app-user',
  imports: [TitleCasePipe],
  template: `
    {{ fullName() | titlecase }} plays tennis in the {{ category }} category!!
  `,
  host: {
    class: 'text-xl text-green-800',
  },
})
export class UserComponent {
  name = input.required<string>();
  lastName = input<string>('');
  age = input(10, { transform: (value: string) => Number(value) || 0 });

  fullName = computed(() => `${this.name()} ${this.lastName() ?? ''}`);
  category = computed(() => ageToCategory(Number(this.age())));
}
