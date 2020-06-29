import React from "react";

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */
export function useEventCallback(fn: (...args: any) => any) {
  const ref = React.useRef(fn);
  React.useEffect(() => {
    ref.current = fn;
  });

  // @ts-ignore
  return React.useCallback((...args) => (0, ref.current)(...args), []);
}
