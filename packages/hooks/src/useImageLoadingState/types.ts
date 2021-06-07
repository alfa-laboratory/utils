export type UseImageLoadingStateArgs = {
  src: string;
};

export enum UseLoadingStates {
  LOADED = 'loaded',
  LOADING = 'loading',
  ERROR = 'error',
}
