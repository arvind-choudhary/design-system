import * as React from 'react';

export interface IRenderListProps <T> {
  listOfData: T[];
  callback: (props: T) => React.ReactNode;
}

/**
 * Renders a list of items of type T. The callback function is called once for each item in the list,
 * and should return a React Node.
 * @param listOfData The list of items of type T to render.
 * @param callback A function that takes an item of type T and returns a React Node.
 * @returns A React Node containing the rendered list, or an empty fragment if the list is empty.
 */
export function RenderList<T>({ listOfData, callback }: IRenderListProps<T>): React.ReactNode {
    if (Array.isArray(listOfData) && listOfData.length > 0) {
        return <>{listOfData.map(callback)}</>
    }
    return <>No Data Available</>
}
