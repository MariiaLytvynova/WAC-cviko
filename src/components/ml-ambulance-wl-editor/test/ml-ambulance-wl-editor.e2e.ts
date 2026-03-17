import { newE2EPage } from '@stencil/core/testing';

describe('ml-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ml-ambulance-wl-editor></ml-ambulance-wl-editor>');

    const element = await page.find('ml-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
