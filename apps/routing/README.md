# Routing

The new **App Router** is built on **React Server Components**, which support many new features. By default all components inside **_app_** are **React Server Components** for optimisation purposes, **Client Components** and still be used

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

### File Conventions

Next provides a set of ***special*** files to create UI specific behaviour in nested routes: 

|                                                                                                         |                                                          |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [`layout`](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)     | Shared UI for a segment and its children                 |
| [`page`](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)         | Unique UI of a route and make routes publicly accessible |
| [`loading`](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)     | Loading UI for a segment and its children                |
| [`not-found`](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)                     | Not found UI for a segment and its children              |
| [`error`](https://nextjs.org/docs/app/building-your-application/routing/error-handling)                 | Error UI for a segment and its children                  |
| [`global-error`](/docs/app/building-your-application/routing/error-handling)                            | Global Error UI                                          |
| [`route`](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)                 | Server-side API endpoint                                 |
| [`template`](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates) | Specialized re-rendered Layout UI                        |
| `default`                                                                                               | Fallback UI for **Parallel Routes**                      |


### Component Hierarchy
```
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
### Defining Routes
