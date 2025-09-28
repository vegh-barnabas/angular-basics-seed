import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'donut-form',
  template: `
    <form class="donut-form" #form="ngForm" (ngSubmit)="handleSubmit(form)">
      <label>
        <span>Name</span>
        <input
          type="text"
          class="input"
          name="name"
          required
          minlength="5"
          ngModel
          #name="ngModel"
        />
        <ng-container *ngIf="name.invalid && name.touched">
          <div class="donut-form-error" *ngIf="name.errors?.required">
            Name is required.
          </div>
          <div class="donut-form-error" *ngIf="name.errors?.minlength">
            The minimum length of a name is 5.
          </div>
        </ng-container>
      </label>
      <label>
        <span>Icon</span>
        <select
          name="icon"
          class="input input--select"
          required
          ngModel
          #icon="ngModel"
        >
          <option *ngFor="let icon of icons" [ngValue]="icon">
            {{ icon }}
          </option>
        </select>
        <ng-container *ngIf="icon.invalid && icon.touched">
          <div class="donut-form-error" *ngIf="icon.errors?.required">
            Icon is required.
          </div>
        </ng-container>
      </label>
      <label>
        <span>Price</span>
        <input
          type="number"
          class="input"
          name="price"
          required
          ngModel
          #price="ngModel"
        />
        <ng-container *ngIf="price.invalid && price.touched">
          <div class="donut-form-error" *ngIf="price.errors?.required">
            Price is required.
          </div>
        </ng-container>
      </label>
      <div class="donut-form-radios">
        <p class="donut-form-radios-label">Promo:</p>
        <label>
          <input
            type="radio"
            name="promo"
            [value]="undefined"
            ngModel
            #promo="ngModel"
          />
          <span>None</span>
        </label>
        <label>
          <input type="radio" name="promo" value="new" ngModel />
          <span>New</span>
        </label>
        <label>
          <input type="radio" name="promo" value="limited" ngModel />
          <span>Limited</span>
        </label>
      </div>

      <label>
        <span>Description</span>
        <textarea
          name="description"
          class="input input--textarea"
          required
          ngModel
          #description="ngModel"
        ></textarea>
        <ng-container *ngIf="description.invalid && description.touched">
          <div class="donut-form-error" *ngIf="description.errors?.required">
            Description is required.
          </div>
        </ng-container>
      </label>

      <button type="submit" class="btn btn--green" [disabled]="form.invalid">
        Create
      </button>

      <pre>{{ form.value | json }}</pre>
      <pre>{{ form.form.status | json }}</pre>
    </form>
  `,
  styles: [
    `
      .donut-form {
        &-radios {
          display: flex;
          align-content: center;

          &-label {
            margin-right: 10px;
          }

          label {
            display: flex;
            align-items: center;

            span {
              color: #444;
              margin-bottom: 0;
            }
          }
        }

        &-error {
          font-size: 12px;
          color: #e66262;
        }
      }
    `,
  ],
})
export class DonutFormComponent {
  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon',
  ];

  handleSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    console.log(form.value);
  }
}
