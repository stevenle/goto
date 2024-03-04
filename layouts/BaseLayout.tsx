import {Body, Head, Html} from '@blinkk/root';
import {FunctionalComponent} from 'preact';

interface BaseLayoutProps {
  title?: string;
  page: string;
  component: FunctionalComponent;
  props: any;
}

export function BaseLayout(props: BaseLayoutProps) {
  const PageComponent = props.component;
  return (
    <Html>
      <Head>
        <title>{props.title || 'goto'}</title>
      </Head>
      <Body>
        <go-app page={props.page} props={JSON.stringify(props.props)}>
          <PageComponent {...props.props} />
        </go-app>
      </Body>
    </Html>
  );
}
