import { Component, computed, signal } from '@angular/core';

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
    console.log('doubleCount computed');
    return this.count() * 2;
  });

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
