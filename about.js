```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  
  // this is the incorrect way to redirect
  setTimeout(() => {
    router.push('/');
  }, 3000);
  
  return (
    <div>About Page - Redirecting in 3 seconds</div>
  );
}
```