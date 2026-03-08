import { newSpecPage } from '@stencil/core/testing';
import { MlAmbulanceWlList } from '../ml-ambulance-wl-list';

describe('ml-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MlAmbulanceWlList],
      html: `<ml-ambulance-wl-list></ml-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <ml-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ml-ambulance-wl-list>
    `);
  });
});
