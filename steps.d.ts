/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js').default;
type home_page = typeof import('./pages/home_page.js').default;

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, home_page: home_page }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
