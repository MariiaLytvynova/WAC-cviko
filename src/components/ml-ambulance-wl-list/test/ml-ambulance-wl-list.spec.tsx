import { newSpecPage } from '@stencil/core/testing';
import { MlAmbulanceWlList } from '../ml-ambulance-wl-list';

describe('ml-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MlAmbulanceWlList],
      html: `<ml-ambulance-wl-list></ml-ambulance-wl-list>`,
    });
      const wlList = page.rootInstance as MlAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
