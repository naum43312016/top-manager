export default function DashboardSvg(props: { isHover: boolean }) {
  const color = props.isHover ? "gray" : "white";
  return (
    <div className="min-w-[30px]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="4"
          width="6"
          height="7"
          rx="1"
          stroke={color}
          stroke-linejoin="round"
        />
        <rect
          x="4"
          y="15"
          width="6"
          height="5"
          rx="1"
          stroke={color}
          stroke-linejoin="round"
        />
        <rect
          x="14"
          y="4"
          width="6"
          height="5"
          rx="1"
          stroke={color}
          stroke-linejoin="round"
        />
        <rect
          x="14"
          y="13"
          width="6"
          height="7"
          rx="1"
          stroke={color}
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
