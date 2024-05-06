export default function ComunicationSvg(props: { isHover: boolean }) {
  const color = props.isHover ? "gray" : "white";
  return (
    <div className="min-w-[30px]">
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12.5" cy="12" r="8" stroke={color} />
        <path
          d="M19.072 7.20637C18.3483 8.05353 17.3869 8.74862 16.2672 9.23422C15.1475 9.71983 13.9017 9.98201 12.6326 9.99911C11.3636 10.0162 10.1078 9.78773 8.9689 9.33256C7.83002 8.87739 6.84077 8.20858 6.08288 7.38139"
          stroke={color}
        />
        <path
          d="M19.072 16.7936C18.3483 15.9465 17.3869 15.2514 16.2672 14.7658C15.1475 14.2802 13.9017 14.018 12.6326 14.0009C11.3636 13.9838 10.1078 14.2123 8.9689 14.6674C7.83002 15.1226 6.84077 15.7914 6.08288 16.6186"
          stroke={color}
        />
        <path d="M12.5 4V20" stroke={color} />
      </svg>
    </div>
  );
}
