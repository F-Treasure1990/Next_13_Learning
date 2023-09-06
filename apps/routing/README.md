# Routing

The new **App Router** is built on **React Server Components**, which support many new features. By default all components inside **_app_** are **React Server Components** for optimisation purposes, **Client Components** and still be used

### File Conventions

Next provides a set of **_special_** files to create UI specific behaviour in nested routes:

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

## Routing App Architecture

The skeleton of every application is routing. The **fundamental concepts** of routing will be explained ahead.

```
├── app/
├── page.tsx
├── layout.tsx
└── dashboard/
    ├── page.tsx
    ├── analytics/
    ├── settings/
        ├── page.tsx
```

- **`dashboard/analytics/`** : due to the absence of a **`page.tsx`** file, this folder can be used as components, style sheets, images or other collocated files.

#### Pages

- Used to show UI unique to a route.
- Make the route publicly accessible.
- Created via `page.tsx` in a directory.

#### Layouts

- The top-most layout is called the `Root layout` and is shared across all pages in the application.
- A layout is shared between multiple pages.
- **Preserve state**
- **Remain interactive**
- **Do not re-render**
- Should accept `children` prop.
- Server components by default but can be Client Component.
- good for data fetching.

#### Templates

- Similar to layout pages.
- **New instance of the component is mounted**
- **DOM elements are recreated**
- **State is NOT preserved**
- **Effects are re-synchronised**

## Linking and Navigating

2 ways to navigate between routes :

1. Using `<Link>` Component
2. Using `useRouter` Hook

#### Link Component

- Primary way to navigate.
- Extends the HTML `<a>` tag.
- Provides prefetching and client-side navigation between routes.

| Props      | Example / Default   | Required | Desc                                                   |
| ---------- | ------------------- | -------- | ------------------------------------------------------ |
| `href`     | `href="/dashboard"` | &check;  | path or URL to navigate to                             |
| `replace`  | `replace={false}`   |          | replaces current history state                         |
| `scroll`   | `scroll={true}`     |          | scroll to top of new route or maintain scroll position |
| `prefetch` | `prefetch={true}`   |          | prefetches the page for performance.                   |

**Check Active Links**

- `usePathname()` to determine is a link is active.

**Scroll to an `id`**

- Next defaults to scroll to the top of a new route.
- append URL with a `#` hash to the `href` prop. `<a href="/dashboard#settings"</a>`

#### UseRouter Hook

- Programmatically change routes.
- To be used ONLY inside `Client Components`.
- imported from `next/navigation`.

| Variants                                          | Desc                                                                                                                          |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `router.push(href: string, { scroll: boolean })`  | client side navigation to provided route                                                                                      |
| router.replace(href: string, { scroll: boolean }) | client side navigation WITHOUT new entry to browsers history stack                                                            |
| router.refresh()                                  | Refreshes the current route. Makes a new request to the server, re-fetching dataa requests and re-rendering Server Components |
| router.prefetch(href: string)                     | pre-fetches the provided route for faster client-side transitions                                                             |
| router.back() / .forward()                        | navigate back or forward between routes in browser history                                                                    |

## Loading UI and Streaming

- `loading.tsx` creates a meaningful UI with `React Suspense`.
- shows instant loading state from the server, while segment loads.
- `loading.tsx` will be nested inside `layout.tsx`
- `loading.tsx` will automatically wrap the `page.tsx` file.

**Instant Loading States**

- A fallback UI that is shown immediately up navigation to a route.
- Possible to pre-render loading indicators such as skeletons and spinners.

**Streaming**
In addition to `loading.tsx`, it is possible to manually create Suspense Boundaries.

## Dynamic Routes?
