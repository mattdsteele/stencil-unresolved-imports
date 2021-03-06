import { Component, Prop } from '@stencil/core';
import { foo } from '../../utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() first: string;
  @Prop() last: string;

  componentDidLoad() {
    foo();
  }
  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
