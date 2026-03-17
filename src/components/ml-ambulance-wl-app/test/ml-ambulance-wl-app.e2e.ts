import { newE2EPage } from '@stencil/core/testing';

describe('ml-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ml-ambulance-wl-app></ml-ambulance-wl-app>');

    const element = await page.find('ml-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
