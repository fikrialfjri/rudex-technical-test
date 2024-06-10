import { useLayoutEffect, useRef, useState } from "react";

import { joinClassnames } from "../utils/common";

const SectionCard = ({ classes = "", children, noOverflow }) => {
  const [contentHeight, setContentHeight] = useState("auto");
  const [containerWidth, setContainerWidth] = useState("auto");
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    if (cardRef.current) {
      const cardHeight = cardRef.current.clientHeight;
      const cardWidth = cardRef.current.clientWidth;

      const cardPaddingYGap = 16 * 2; // 12 = padding y from card
      const contentHeight = cardHeight - cardPaddingYGap;

      setContentHeight(contentHeight);
      setContainerWidth(cardWidth);
    }
  }, []);

  return (
    <div ref={cardRef} className={joinClassnames(["space-y-1 overflow-hidden rounded-3xl bg-white border border-neutral-300 px-5 py-4", classes])}>
      {children && (
        <section className={joinClassnames([!noOverflow && "overflow-auto"])} style={{ maxHeight: !noOverflow && `${contentHeight}px` }}>
          {typeof children === "function" ? children(contentHeight, containerWidth) : children}
        </section>
      )}
    </div>
  );
};

export default SectionCard;
