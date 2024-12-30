/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as TodoCreateImport } from './routes/todo/create'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TodoCreateRoute = TodoCreateImport.update({
  id: '/todo/create',
  path: '/todo/create',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/todo/create': {
      id: '/todo/create'
      path: '/todo/create'
      fullPath: '/todo/create'
      preLoaderRoute: typeof TodoCreateImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/todo/create': typeof TodoCreateRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/todo/create': typeof TodoCreateRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/todo/create': typeof TodoCreateRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/todo/create'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/todo/create'
  id: '__root__' | '/' | '/todo/create'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  TodoCreateRoute: typeof TodoCreateRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  TodoCreateRoute: TodoCreateRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/todo/create"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/todo/create": {
      "filePath": "todo/create.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
