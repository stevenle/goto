import {BaseLayout} from '@/layouts/BaseLayout.js';
import {AdminPage} from '@/pages/AdminPage/AdminPage.js';
import {Handler} from '@blinkk/root';

export default function Page() {
  return (
    <BaseLayout page="AdminPage" component={AdminPage} props={{}} />
  );
}

export const handle: Handler = async (req, res) => {
};
