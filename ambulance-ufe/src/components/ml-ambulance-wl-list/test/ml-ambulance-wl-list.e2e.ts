import { newE2EPage } from '@stencil/core/testing';

describe('ml-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ml-ambulance-wl-list></ml-ambulance-wl-list>');

    const element = await page.find('ml-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
