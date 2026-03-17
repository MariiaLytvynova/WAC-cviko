import { newSpecPage } from '@stencil/core/testing';
import { MlAmbulanceWlApp } from '../ml-ambulance-wl-app';

describe('ml-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [MlAmbulanceWlApp],
      html: `<ml-ambulance-wl-app base-path="/"></ml-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("ml-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [MlAmbulanceWlApp],
      html: `<ml-ambulance-wl-app base-path="/ambulance-wl/"></ml-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("ml-ambulance-wl-list");
  });
});