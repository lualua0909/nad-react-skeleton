import { useRef, useEffect } from "react";

const useOnClickOutside = (ref, onClickAway, events) => {
  const onClickAwayRef = useRef(onClickAway);

  useEffect(() => {
    onClickAwayRef.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const onClickHandler = (e) => {
      const { current: el } = ref;
      !el?.contains(e.target) && onClickAwayRef.current(e);
    };

    events.forEach((e) => document.addEventListener(e, onClickHandler));

    return () => {
      events.forEach((e) => document.removeEventListener(e, onClickHandler));
    };
  }, [ref, events]);
};

export default useOnClickOutside;
