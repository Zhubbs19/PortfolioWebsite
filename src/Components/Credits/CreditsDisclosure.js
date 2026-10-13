import React, { useEffect, useRef, useState } from 'react';

/*
  CreditsDisclosure - collapsed-by-default wrapper for long asset attribution lists.
  Uses a native <details> element so the credits stay in the page (searchable, keyboard
  accessible, visible to anyone who opens it). Keep credits to people outside of this.
*/
function CreditsDisclosure({ title = 'Asset credits & attributions', children }) {
  const bodyRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (bodyRef.current) setCount(bodyRef.current.querySelectorAll('li').length);
  }, [children]);

  return (
    <details className="credits-details">
      <summary>
        {title}
        {count > 0 && <span className="credits-count"> ({count})</span>}
      </summary>
      <div className="credits-body" ref={bodyRef}>
        {children}
      </div>
    </details>
  );
}

export default CreditsDisclosure;
