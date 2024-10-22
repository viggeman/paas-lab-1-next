import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        alert(`Hello ${result.hello}!`);
      });
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}
