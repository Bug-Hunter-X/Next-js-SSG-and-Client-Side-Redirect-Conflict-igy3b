# Next.js SSG and Client-Side Redirect Conflict

This repository demonstrates a common issue in Next.js when combining automatic Static Site Generation (SSG) with client-side navigation using the `useRouter` hook.  The problem arises when attempting to perform a redirect within a component that's pre-rendered by SSG.

## Bug

The `pages/about.js` file contains a client-side redirect using `router.push` within a `setTimeout` function.  This works correctly when navigating directly to `/about`, but it produces inconsistent behavior when SSG attempts to pre-render the page. The client-side redirect will not execute as expected during SSG.

## Solution

The solution is to avoid using client-side navigation inside components pre-rendered by SSG.  Alternatives include using server-side redirects (redirecting in `getStaticProps` or `getStaticPaths`) or implementing logic to conditionally handle the redirect only on the client-side, ensuring proper compatibility with SSG.