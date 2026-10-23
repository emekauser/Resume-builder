import { useEffect, useRef } from 'react';

function useOutSideClick(close: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);

  /**
 * This hook allows you to listen for clicked outside the target element
 * @param options The editor options
 * @param deps The dependencies to watch for changes
 * @returns The editor instance
 * @example const editor = useEditor({ extensions: [...] })
 */
  useEffect(() => {
    document.addEventListener('click', (e: any) => {
      if (!ref?.current?.contains(e.target)) {
        close(); // to close
      }
    });
  }, []);

  return {
    ref,
  };
}

export default useOutSideClick;