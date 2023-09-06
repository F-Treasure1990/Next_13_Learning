# Learning NextJS 13

### Features to learn..

|         | Feature                                                                  | Description                                                                                                                                                                                      |
| ------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| &check; | [Routing](/docs/app/building-your-application/routing)                   | A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.                                                    |
|         | [Rendering](/docs/app/building-your-application/rendering)               | Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes. |
|         | [Data Fetching](/docs/app/building-your-application/data-fetching)       | Simplified data fetching with async/await in Server Components, and an extended `fetch` API for request memoization, data caching and revalidation.                                              |
|         | [Styling](/docs/app/building-your-application/styling)                   | Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS                                                                                                   |
|         | [Optimizations](/docs/app/building-your-application/optimizing)          | Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.                                                                                        |
|         | [TypeScript](/docs/app/building-your-application/configuring/typescript) | Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.                                                 |

### Terminology

The skeleton of every application is routing. The **fundamental concepts** of routing will be explained ahead.

```

├── app
└── dashboard
    ├── analytics
    ├── settings
        ├── password
        ├── profile
    └── blog
        ├── [slug]

```

- **Tree**: Encompasses the component tree of the application. The root entry ( app ) and the last leaf ( [slug] )
- **Subtree**: Encompasses part of a **Tree**, starting at a root (dashboard , blog) and ending with its leaves
- **Root**: The first node in a **Tree** or **Subtree**. (app , dashboard , blog)
- **Leaf**: Nodes in a **Subtree** that have no children. (analytics , password , profile , [slug])

### Component Hierarchy

```jsx
<Layout>
  <Template>
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary fallback={<Error />}>
          <Page />
        </ErrorBoundary>
      </Suspense>
    </ErrorBoundary>
  </Template>
</Layout>
```

[![Conventional Commit Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
