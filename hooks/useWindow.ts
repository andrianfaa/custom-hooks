import { useCallback, useEffect, useState } from "react";

type WindowScrollPosition = {
  x: number;
  y: number;
}

type WindowPaneSize = {
  width: number;
  height: number;
}

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
}

const useWindow = (): UseWindowReturnTypes => {
  const [scrollPosition, setScrollPosition] = useState<WindowScrollPosition>({
    x: 0,
    y: 0,
  });
  const [windowPaneSize, setWindowPaneSize] = useState<WindowPaneSize>({
    width: 0,
    height: 0,
  });

  const updateScrollPosition = useCallback(() => {
    if (typeof window === "undefined") return;

    setScrollPosition((prevState) => ({
      ...prevState,
      x: window.scrollX,
      y: window.scrollY,
    }));
  }, []);

  const updatePaneSize = useCallback(() => {
    if (typeof window === "undefined") return;

    setWindowPaneSize((prevState) => ({
      ...prevState,
      height: window.innerHeight,
      width: window.innerWidth,
    }));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", updateScrollPosition);
    window.addEventListener("resize", updatePaneSize);

    updatePaneSize();

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("resize", updatePaneSize);

      updatePaneSize();
    };
  }, []);

  return {
    scrollPosition,
    paneSize: windowPaneSize,
  };
};

export default useWindow;
