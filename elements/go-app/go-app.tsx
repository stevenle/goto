import {hydrate} from 'preact';

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      'go-app': preact.JSX.HTMLAttributes & {page: string, props: string};
    }
  }
}

const pages: Record<string, any> = {};
const modules = import.meta.glob('/pages/**/*.tsx');
Object.entries(modules).forEach(([moduleId, loader]) => {
  const page = moduleId.split('/')[2];
  pages[page] = loader;
});

class Element extends HTMLElement {
  connectedCallback() {
    const page = this.getAttribute('page');
    if (!page) {
      return;
    }
    const propsAttr = this.getAttribute('props');
    const props = propsAttr ? JSON.parse(propsAttr) : {};
    this.rehydrate(page, props);
  }

  async rehydrate(page: string, props: any) {
    console.log('rehydrate');
    const loader = pages[page];
    if (loader) {
      const module = await loader();
      const Component = module[page];
      if (Component) {
        hydrate(<Component {...props} />, this);
      }
    }
  }
}

if (!window.customElements.get('go-app')) {
  window.customElements.define('go-app', Element);
}
