type WindowScrollPosition = {
    x: number;
    y: number;
};
type WindowPaneSize = {
    width: number;
    height: number;
};
type UseWindowReturnTypes = {
    /**
     * Get window scroll position
     *
     * @returns <WindowScrollPosition> Y axis or X axis of the window
     * @example
     * ```ts
     *  const { scrollPosition } = useWindow();
     *  console.log(scrollPosition); // { x: 0, y: 123 }
     *  ```
     */
    scrollPosition: WindowScrollPosition;
    /**
     * Get window pane size
     *
     * @returns <WindowPaneSize> `width` and `height` of the window
     * @example
     * ```ts
     * const { paneSize } = useWindow();
     * console.log(paneSize); // { width: 1280, height: 720 }
     * ```
     */
    paneSize: WindowPaneSize;
};
declare const useWindow: () => UseWindowReturnTypes;
export default useWindow;
