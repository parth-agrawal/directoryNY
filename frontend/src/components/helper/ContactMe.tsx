import { useState, useEffect, useRef } from "react";

//allows us to detect click outside of contact box and have it disappear when that click happens

export default function ContactMe({
  phone,
  email,
  twitter_url,
}: {
  phone: string | undefined;
  email: string | undefined;
  twitter_url: string | undefined;
}) {
  const [showContacts, setShowContacts] = useState(false);
  const clickDetectRef = useRef(null);

  const closeOpenMenus = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(
      e.target,
      "detected",
      showContacts,
      !clickDetectRef.current?.contains(e.target)
    );
    if (!clickDetectRef.current?.contains(e.target)) {
      setShowContacts(false);
    }
  };
  console.log(showContacts);

  useEffect(() => {
    // Bind
    document.addEventListener("mousedown", closeOpenMenus);
    return () => {
      // dispose
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  }, []);

  function IndividualContactMethod({
    contact_info,
    method_type,
  }: {
    contact_info: string | undefined;
    method_type: "twitter" | "phone" | "email";
  }) {
    const contact_images = {
      twitter: (
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      ),
      phone: <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>,
      email: (
        <>
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </>
      ),
    };
    //styles the button for the contact method, e.g. twitter
    const contact_strings = {
      twitter: twitter_url ? twitter_url : undefined,
      phone: phone
        ? `sms:${phone}&amp;body=%F0%9F%91%8B%20Hey%2C%20this%20is%20%F0%9F%99%88!%0AI%20saw%20your%20profile%20on%20DirectorySF%2C%20and%20wanted%20to%20reach%20out`
        : undefined,
      email: email ? `mailto:${email}` : undefined,
    };
    return (
      <>
        <a target="_blank" href={contact_strings[method_type]}>
          <button
            disabled={!contact_info}
            className={
              contact_info
                ? "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 h-10 w-10"
                : "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 h-10 w-10"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4"
            >
              {contact_images[method_type]}
            </svg>
          </button>
        </a>
      </>
    );
  }
  console.log(twitter_url, email, phone);
  const contactPaneWrapper = () => (
    <div
      ref={clickDetectRef}
      data-side="bottom"
      data-align="center"
      data-state="open"
      role="dialog"
      id="radix-:rgf:"
      className="absolute translate-y-24 z-50 w-72 rounded-md border border-neutral-200 bg-white p-4 text-neutral-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      // style="--radix-popover-content-transform-origin: var(--radix-popper-transform-origin); --radix-popover-content-available-width: var(--radix-popper-available-width); --radix-popover-content-available-height: var(--radix-popper-available-height); --radix-popover-trigger-width: var(--radix-popper-anchor-width); --radix-popover-trigger-height: var(--radix-popper-anchor-height);"
    >
      <div className="flex justify-around">
        <IndividualContactMethod contact_info={phone} method_type="phone" />
        <IndividualContactMethod contact_info={email} method_type="email" />
        <IndividualContactMethod
          contact_info={twitter_url}
          method_type="twitter"
        />
      </div>
    </div>
  );
  //flex flex-col justify-center w-24
  return (
    <>
      {/* <div className="flex flex-col justify-center w-24"> */}
      <button
        onClick={() => setShowContacts(!showContacts)}
        aria-haspopup="dialog"
        className="bg-[#1D462F] text-white rounded-3xl ring-offset-white font-semibold p-2 text-xs mb-1"
      >
        Contact me
      </button>
      {showContacts && contactPaneWrapper()}
      {/* </div> */}
    </>
  );
}
