```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  // Correct way to conditionally redirect
  if (typeof window !== 'undefined') { // Check if running in browser
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }

  return (
    <div>About Page - Redirecting in 3 seconds</div>
  );
}
```