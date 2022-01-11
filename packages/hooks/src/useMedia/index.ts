/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

type Query<T> = [T, string];
type QueryTuple<T> = [T, MediaQueryList];
type QueryList<T> = Array<QueryTuple<T>>;

type Params<T> = Array<Query<T>>;

function getValue<T>(list: QueryList<T>): T[] {
    return list.map(
        // eslint-disable-next-line no-confusing-arrow
        ([value, query]) => query.matches ? value : null,
    ).filter(Boolean) as any;
}

export function useMedia<T>(list: Params<T>, defaultValue: T): T[] {
    const [value, setValue] = React.useState<T[]>([defaultValue]);
    const [mediaQueryList, setMediaQueryList] = React.useState<QueryList<T>>([]);

    const isClient = typeof window !== 'undefined';

    React.useEffect(() => {
        if (isClient && window.matchMedia) {
            const queryList: QueryList<T> = list.map(
                ([x, y]) => [x, window.matchMedia(y)],
            );

            setMediaQueryList(queryList);
            setValue(getValue(queryList));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isClient]);

    React.useEffect(() => {
        const handler = () => {
            setValue(getValue(mediaQueryList));
        };

        mediaQueryList.forEach(
            ([_, mediaQuery]) => mediaQuery.addListener(handler),
        );

        return () => {
            mediaQueryList
                .forEach(
                    ([_, mediaQuery]) => mediaQuery.removeListener(handler),
                );
        };
    }, [value, mediaQueryList]);

    return value;
}
