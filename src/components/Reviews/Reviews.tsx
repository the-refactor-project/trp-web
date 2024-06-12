"use client";

import { useEffect } from "react";

const loadTrustmaryWidget = () => {
  (function (w, d, s, o, r, js, fjs) {
    w[r as unknown as number] =
      w[r as unknown as number] ||
      function () {
        ((w[r as unknown as number] as any).q =
          (w[r as unknown as number] as any).q || []).push(arguments);
      };
    (w[r as unknown as number] as any)("app", "tNUBpFKq6l");
    if (d.getElementById(o)) return;
    (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
    js.id = o;
    (js as HTMLImageElement).src = "https://embed.trustmary.com/embed.js";
    (js as HTMLScriptElement).async = true;
    fjs.parentNode!.insertBefore(js, fjs);
  })(
    window,
    document,
    "script",
    "trustmary-embed",
    "tmary",
    {} as HTMLElement,
    {} as Element,
  );
};

const Reviews = (): React.ReactElement => {
  useEffect(() => {
    loadTrustmaryWidget();
  }, []);
  // return <Script src="https://widget.trustmary.com/MktsgEyy5"></Script>;
  return <div data-trustmary-widget="MktsgEyy5"></div>;
};

export default Reviews;
