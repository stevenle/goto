import {useEffect} from 'preact/hooks';

export function AdminPage() {
  useEffect(() => {
    console.log('use effect rehydrated!');
  }, []);
  return <h1>admin page</h1>;
}
