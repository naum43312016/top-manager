export default function ScoutSvg(props:{isHover: boolean}){
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
            <path
              d="M12.9208 7.60217C13.6521 9.00246 14.0226 10.563 13.9989 12.1426C13.9752 13.7222 13.558 15.2709 12.785 16.6486"
              stroke={color}
            />
            <path
              d="M15 5.5C12.2189 9.20812 5.14088 11.6272 4.12274 11.9605C4.07878 11.9748 4.07584 12.0335 4.11809 12.0523C5.11914 12.4983 12.2146 15.7146 15 18.5"
              stroke={color}
              stroke-linecap="round"
            />
            <path
              d="M13.733 14.4891C13.3905 14.5212 13.045 14.4822 12.7182 14.3746C12.3915 14.267 12.0904 14.0932 11.8339 13.8639C11.5774 13.6346 11.371 13.3549 11.2276 13.0422C11.0842 12.7295 11.0068 12.3905 11.0004 12.0466C10.994 11.7026 11.0587 11.361 11.1903 11.0432C11.322 10.7254 11.5179 10.4381 11.7656 10.1995C12.0134 9.96079 12.3078 9.77583 12.6303 9.65615C12.9528 9.53647 13.2966 9.48465 13.6401 9.50393"
              stroke={color}
            />
            <path d="M17 12H21" stroke={color} stroke-linecap="round" />
            <path d="M17 9.5L21 8" stroke={color} stroke-linecap="round" />
            <path d="M17 14.5L21 16" stroke={color} stroke-linecap="round" />
          </svg>
        </div>
      );
}