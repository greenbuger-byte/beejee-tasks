import * as React from "react";

function ChevronCompactDownIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M1.553 6.776a.5.5 0 01.67-.223L8 9.44l5.776-2.888a.5.5 0 11.448.894l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.223-.67z"
            />
        </svg>
    );
}

export default ChevronCompactDownIcon;
