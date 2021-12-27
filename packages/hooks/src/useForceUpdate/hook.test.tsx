import * as React from 'react';
import { render, act } from '@testing-library/react';

import useForceUpdate from './hook';

describe('useForceUpdate', () => {
  const forceUpdates: Array<() => void> = [];
  let renders: number;
  let TestComponent: React.FunctionComponent<{}> = () => null;

  beforeEach((): void => {
    forceUpdates.splice(0, forceUpdates.length);

    renders = 0;

    TestComponent = (): null => {
      forceUpdates.push(useForceUpdate());
      renders++;
      return null;
    };

  });

  it('should accept no parameters', (): void => {
    render(<TestComponent />);
    
    expect(forceUpdates[0].length).toEqual(0);
  });

  it('should maintain the same reference', (): void => {
    render(<TestComponent />);
    
    act(() => {
      forceUpdates[0]();
    })
    
    expect(forceUpdates[0]).toEqual(forceUpdates[1]);
  });

  it('should return undefined', (): void => {
    render(<TestComponent />);

    let hookReturnValue

    act(() => {
      hookReturnValue = forceUpdates[0]()
    })

    expect(hookReturnValue).toBeUndefined();
  });

  it('should update the component', (): void => {
    expect(renders).toEqual(0);
    render(<TestComponent />);
    expect(renders).toEqual(1);
    act(() => {
    forceUpdates[0]();
    })
    expect(renders).toEqual(2);
    act(() => {
    forceUpdates[1]();
    })
    expect(renders).toEqual(3);
  });
});
