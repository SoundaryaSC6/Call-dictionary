/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/Navigation`; params?: Router.UnknownInputParams; } | { pathname: `/SearchBar`; params?: Router.UnknownInputParams; } | { pathname: `/UserDetailsScreen`; params?: Router.UnknownInputParams; } | { pathname: `/UserListScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/Navigation`; params?: Router.UnknownOutputParams; } | { pathname: `/SearchBar`; params?: Router.UnknownOutputParams; } | { pathname: `/UserDetailsScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/UserListScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/Navigation${`?${string}` | `#${string}` | ''}` | `/SearchBar${`?${string}` | `#${string}` | ''}` | `/UserDetailsScreen${`?${string}` | `#${string}` | ''}` | `/UserListScreen${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/Navigation`; params?: Router.UnknownInputParams; } | { pathname: `/SearchBar`; params?: Router.UnknownInputParams; } | { pathname: `/UserDetailsScreen`; params?: Router.UnknownInputParams; } | { pathname: `/UserListScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}
