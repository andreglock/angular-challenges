import {
  ChangeDetectionStrategy,
  Component,
  effect,
  model,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  template: `
    <section class="flex gap-5">
      <p>MacBook</p>
      <p>1999,99 €</p>
    </section>

    <section>
      <p>Extras:</p>

      <div>
        <input type="checkbox" [(ngModel)]="drive" />
        +500 GB drive-space
      </div>
      <div>
        <input type="checkbox" [(ngModel)]="ram" />
        +4 GB RAM
      </div>
      <div>
        <input type="checkbox" [(ngModel)]="gpu" />
        Better GPU
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  drive = model(false);
  ram = model(false);
  gpu = model(false);

  constructor() {
    effect(() => {
      if (this.drive()) {
        alert('Price increased!');
      }
    });
    effect(() => {
      if (this.ram()) {
        alert('Price increased!');
      }
    });
    effect(() => {
      if (this.gpu()) {
        alert('Price increased!');
      }
    });
  }
}

/*
* Gregor's solution
chosenAddons = computed(() => +this.drive() + +this.ram() + +this.gpu());

  isIncreased = linkedSignal({
    source: () => this.chosenAddons(),
    computation: (current, previous) => current > (previous?.source ?? 0),
  });

  constructor() {
  effect(() => {
    this.chosenAddons();

    if (this.isIncreased()) {
      alert('Price increased!');
    }
  });
  }
* */
