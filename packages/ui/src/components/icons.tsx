export type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      width="194"
      height="253"
      viewBox="0 0 194 253"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M65.5 0H194V72H65.5V0Z" fill="white" />
      <path d="M0 71H67V172H0V71Z" fill="white" />
      <path
        d="M192.035 174L66.0146 253L66.0146 167L192.035 95.0669L192.035 174Z"
        fill="white"
      />
    </svg>
  ),
  logoDark: (props: IconProps) => (
    <svg
      width="194"
      height="253"
      viewBox="0 0 194 253"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M65.5 0H194V72H65.5V0Z" fill="#202020" />
      <path d="M0 71H67V172H0V71Z" fill="#202020" />
      <path
        d="M192.035 174L66.0146 253L66.0146 167L192.035 95.0669L192.035 174Z"
        fill="#202020"
      />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        transform="scale(64)"
        fill="currentColor"
      />
    </svg>
  ),

  // discord icon
  discord: (props: IconProps) => (
    <svg
      height="17"
      width="22"
      fill="none"
      viewBox="0 0 22 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6361 1.52293C17.1907 0.857681 15.6648 0.385741 14.0973 0.119141C13.8828 0.504601 13.6888 0.901181 13.5159 1.30723C11.8463 1.05431 10.1484 1.05431 8.47881 1.30723C8.30587 0.90122 8.1118 0.504641 7.8974 0.119141C6.32897 0.387991 4.80205 0.861061 3.35518 1.52641C0.482762 5.79864 -0.295908 9.96481 0.0934218 14.0717C1.77558 15.3211 3.6584 16.2714 5.66003 16.881C6.11074 16.2717 6.50956 15.6252 6.85226 14.9484C6.20135 14.7041 5.57311 14.4025 4.9748 14.0474C5.13227 13.9326 5.28627 13.8143 5.43508 13.6995C7.17601 14.5225 9.0761 14.9492 11 14.9492C12.9238 14.9492 14.8239 14.5225 16.5648 13.6995C16.7154 13.823 16.8694 13.9413 17.0251 14.0474C16.4257 14.4031 15.7963 14.7052 15.1442 14.9502C15.4865 15.6266 15.8853 16.2725 16.3364 16.881C18.3398 16.2738 20.224 15.324 21.9065 14.0735C22.3633 9.31071 21.1261 5.18285 18.6361 1.52293ZM7.34541 11.546C6.26047 11.546 5.36414 10.5562 5.36414 9.33851C5.36414 8.12091 6.22932 7.12241 7.34195 7.12241C8.45458 7.12241 9.344 8.12091 9.325 9.33851C9.3059 10.5562 8.45112 11.546 7.34541 11.546ZM14.6545 11.546C13.5678 11.546 12.675 10.5562 12.675 9.33851C12.675 8.12091 13.5401 7.12241 14.6545 7.12241C15.7689 7.12241 16.6514 8.12091 16.6323 9.33851C16.6133 10.5562 15.7602 11.546 14.6545 11.546Z"
        fill="currentColor"
        fillOpacity="3"
      />
    </svg>
  ),

  //settings icon
  settings: (props: IconProps) => (
    <svg
      height="21"
      width="20"
      fill="currentColor"
      viewBox="0 0 20 21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.78522 1.68531C8.2789 0.94479 9.11 0.5 10 0.5C10.89 0.5 11.7211 0.94479 12.2148 1.68531L12.771 2.51958C12.9961 2.85724 13.4067 3.02029 13.8021 2.92904L14.4882 2.7707C15.3962 2.56117 16.348 2.83416 17.0069 3.49307C17.6658 4.15197 17.9388 5.10383 17.7293 6.0118L17.571 6.69791C17.4797 7.09333 17.6428 7.50394 17.9804 7.72904L18.8147 8.28522C19.5552 8.7789 20 9.61 20 10.5C20 11.39 19.5552 12.2211 18.8147 12.7148L17.9804 13.271C17.6428 13.4961 17.4797 13.9067 17.571 14.3021L17.7293 14.9882C17.9388 15.8962 17.6658 16.848 17.0069 17.5069C16.348 18.1658 15.3962 18.4388 14.4882 18.2293L13.8021 18.071C13.4067 17.9797 12.9961 18.1428 12.771 18.4804L12.2148 19.3147C11.7211 20.0552 10.89 20.5 10 20.5C9.11 20.5 8.2789 20.0552 7.78522 19.3147L7.22904 18.4804C7.00394 18.1428 6.59333 17.9797 6.19791 18.071L5.5118 18.2293C4.60383 18.4388 3.65197 18.1658 2.99307 17.5069C2.33416 16.848 2.06117 15.8962 2.2707 14.9882L2.42904 14.3021C2.52029 13.9067 2.35724 13.4961 2.01958 13.271L1.18531 12.7148C0.44479 12.2211 0 11.39 0 10.5C0 9.61 0.4448 8.7789 1.18531 8.28522L2.01958 7.72904C2.35724 7.50394 2.52029 7.09333 2.42904 6.69791L2.2707 6.0118C2.06117 5.10383 2.33416 4.15197 2.99307 3.49307C3.65197 2.83416 4.60383 2.56117 5.5118 2.7707L6.19791 2.92904C6.59333 3.02029 7.00394 2.85724 7.22904 2.51958L7.78522 1.68531ZM6.5 10.5C6.5 8.567 8.067 7 10 7C11.933 7 13.5 8.567 13.5 10.5C13.5 12.433 11.933 14 10 14C8.067 14 6.5 12.433 6.5 10.5Z"
        fill="#757575"
        fillRule="evenodd"
      />
    </svg>
  ),

  x: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1200"
      height="1227"
      fill="none"
      viewBox="0 0 1200 1227"
      {...props}
    >
      <path
        fill="currentColor"
        d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg
      width="256"
      height="262"
      viewBox="0 0 256 262"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#4285F4"
      />
      <path
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#34A853"
      />
      <path
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#FBBC05"
      />
      <path
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#EB4335"
      />
    </svg>
  ),

  teams: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M5.5 3.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M4 8.5q.001-.274.056-.53l-1.944.52a1.5 1.5 0 0 0-1.06 1.838l.388 1.449a3 3 0 0 0 3.773 2.092a4 4 0 0 1-.683-.878a2 2 0 0 1-2.124-1.473l-.389-1.45a.5.5 0 0 1 .354-.612L4 9.02zm6.886 5.398l-.1-.028c.267-.26.498-.555.684-.879a2 2 0 0 0 2.124-1.473l.388-1.45a.5.5 0 0 0-.353-.612L12 9.02V8.5q-.001-.274-.056-.53l1.943.52a1.5 1.5 0 0 1 1.061 1.838l-.388 1.449a3 3 0 0 1-3.674 2.12M2 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m10 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0M6.5 7A1.5 1.5 0 0 0 5 8.5V11a3 3 0 1 0 6 0V8.5A1.5 1.5 0 0 0 9.5 7zM6 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V11a2 2 0 1 1-4 0z"
      ></path>
    </svg>
  ),
  // plus icon
  plus: (props: IconProps) => (
    <svg
      height="18"
      width="18"
      fill="none"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 18C8.33663 18 7.79886 17.4622 7.79886 16.7989V1.20114C7.79886 0.537769 8.33663 0 9 0V0C9.66337 0 10.2011 0.537768 10.2011 1.20114V16.7989C10.2011 17.4622 9.66337 18 9 18V18ZM1.23237 10.2324C0.55175 10.2324 0 9.68062 0 9V9C0 8.31938 0.551749 7.76764 1.23237 7.76764H16.7676C17.4482 7.76764 18 8.31938 18 9V9C18 9.68062 17.4483 10.2324 16.7676 10.2324H8.96382H1.23237Z"
        fill="currentColor"
        fillOpacity="3"
      />
    </svg>
  ),

  // phone icon
  phoneIcon: (props: IconProps) => (
    <svg
      height="19"
      width="18"
      fill="none"
      viewBox="0 0 18 19"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.90875 0.75C1.28007 0.75 -0.200122 2.10172 0.0222332 3.88849C0.98566 11.6303 7.11969 17.7643 14.8615 18.7278C16.6483 18.9501 18 17.4699 18 15.8412V14.5213C18 13.1884 17.1257 12.0134 15.8491 11.6304L14.3092 11.1684C13.3076 10.868 12.2221 11.1416 11.4827 11.881C11.2146 12.1492 10.8697 12.166 10.6511 12.0307C9.0554 11.0434 7.70654 9.69457 6.71927 8.09902C6.58394 7.8803 6.60082 7.53549 6.86901 7.2673C7.60835 6.52796 7.8821 5.44235 7.58159 4.44086L7.11959 2.90096C6.73663 1.62429 5.56156 0.75 4.22868 0.75H2.90875Z"
        fill="currentColor"
      />
    </svg>
  ),

  // schedule icon
  scheduleIcon: (props: IconProps) => (
    <svg
      height="21"
      width="19"
      fill="none"
      viewBox="0 0 19 21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 6.75C1 5.09315 2.34315 3.75 4 3.75H14.5C16.1569 3.75 17.5 5.09315 17.5 6.75V16.25C17.5 17.9069 16.1569 19.25 14.5 19.25H4C2.34315 19.25 1 17.9069 1 16.25V6.75Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M1 8.75H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5 3.75V1.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M13.5 3.75V1.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  ),

  // people icon
  peopleIcon: (props: IconProps) => (
    <svg
      height="19"
      width="23"
      fill="none"
      viewBox="0 0 23 19"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.98047 4.375C9.98047 6.16993 8.5254 7.625 6.73047 7.625C4.93554 7.625 3.48047 6.16993 3.48047 4.375C3.48047 2.58007 4.93554 1.125 6.73047 1.125C8.5254 1.125 9.98047 2.58007 9.98047 4.375Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M1.15031 14.7348C0.521765 16.3573 1.95944 17.875 3.69935 17.875H10.1187C11.8586 17.875 13.2963 16.3573 12.6677 14.7348C10.4157 8.92173 3.40237 8.92173 1.15031 14.7348Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M13.4805 10.8054C16.3709 9.60499 19.9074 10.9156 21.3867 14.7374C22.0147 16.36 20.5765 17.875 18.8366 17.875H15.2305"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M19.2305 4.375C19.2305 6.16993 17.7754 7.625 15.9805 7.625C14.1856 7.625 12.7305 6.16993 12.7305 4.375C12.7305 2.58007 14.1856 1.125 15.9805 1.125C17.7754 1.125 19.2305 2.58007 19.2305 4.375Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  ),

  // contacts icon
  contactsIcon: (props: IconProps) => (
    <svg
      height="21"
      width="19"
      fill="none"
      viewBox="0 0 19 21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 6.75C1 5.09315 2.34315 3.75 4 3.75H14.5C16.1569 3.75 17.5 5.09315 17.5 6.75V16.25C17.5 17.9069 16.1569 19.25 14.5 19.25H4C2.34315 19.25 1 17.9069 1 16.25V6.75Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M1 8.75H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5 3.75V1.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M13.5 3.75V1.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  ),

  //sidebar-close
  sidebarClose: (props: IconProps) => (
    <svg
      height="20"
      width="20"
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 13.5714V4.42857C19 2.53503 17.6569 1 16 1H4C2.34315 1 1 2.53503 1 4.42857V13.5714C1 15.465 2.34315 17 4 17H16C17.6569 17 19 15.465 19 13.5714Z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5 11.7142C5.48325 11.7142 5.875 12.162 5.875 12.7142C5.875 13.2664 5.48325 13.7142 5 13.7142C4.51675 13.7142 4.125 13.2664 4.125 12.7142C4.125 12.162 4.51675 11.7142 5 11.7142ZM5 7.99993C5.48325 7.99993 5.875 8.4477 5.875 8.99993C5.875 9.55216 5.48325 9.99993 5 9.99993C4.51675 9.99993 4.125 9.55216 4.125 8.99993C4.125 8.4477 4.51675 7.99993 5 7.99993ZM5 4.28564C5.48325 4.28564 5.875 4.73336 5.875 5.28564C5.875 5.83793 5.48325 6.28564 5 6.28564C4.51675 6.28564 4.125 5.83793 4.125 5.28564C4.125 4.73336 4.51675 4.28564 5 4.28564Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <path
        d="M9 1V17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  ),
  //friends-Icon-for-now-lol
  friends: (props: IconProps) => (
    <svg
      height="20"
      width="20"
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.1528 15.3106C15.1528 17.0185 13.7668 18.4029 12.0571 18.4029C10.3474 18.4029 8.96143 17.0185 8.96143 15.3106C8.96143 13.6028 10.3474 12.2183 12.0571 12.2183C13.7668 12.2183 15.1528 13.6028 15.1528 15.3106Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M3.03881 5.13867L8.51546 9.72911L1.79736 12.1715L3.03881 5.13867Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12.0589 2.61811C12.2019 2.08489 12.75 1.76846 13.2833 1.9112L17.3318 2.99479C17.8655 3.13764 18.1822 3.68624 18.0391 4.21987L16.9548 8.26209C16.8117 8.79529 16.2637 9.11169 15.7304 8.96899L11.6819 7.88537C11.1482 7.74252 10.8315 7.19392 10.9746 6.66028L12.0589 2.61811Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  ),
};
