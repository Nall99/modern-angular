import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Hello World';
  protected isDisabled = false;

  protected onClick(){
    console.log('Button clicked!');
    this.isDisabled = !this.isDisabled;
  }

  protected count = signal(0);


  protected doubleCount = computed(() => {
    return this.count() * 2;
  });

  private readonly countLog = effect(() => {
    console.log('Count value changed:', this.count());
  })

  // protected getDoubleCount(){
  //   console.log('getDoubleCount called');
  //   return this.count() * 2;
  // }

  protected increateCounter(){
    this.count.update(value => value + 1);
  }
  protected decreaseCounter(){
    this.count.update(value => value - 1);
  }
  protected resetCounter(){
    this.count.set(0);
  }
}
