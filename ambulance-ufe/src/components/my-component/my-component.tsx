import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component', /* define the name by which the component can be used in the code*/
  styleUrl: 'my-component.css',
  shadow: true,
}) /* define the component by decorator */ 
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string; /*is used by component, receives a string, not required */

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
