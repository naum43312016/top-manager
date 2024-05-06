export default function AdministrationSvg(props:{isHover: boolean}){
    const color = props.isHover ? "gray" : "white";
    return (
        <div className="min-w-[30px]">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              x="0.5"
              width="24"
              height="24"
              fill="url(#pattern0_806_10043)"
            />
            <defs>
              <pattern
                id="pattern0_806_10043"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_806_10043" transform="scale(0.01)" />
              </pattern>
              <image
                id="image0_806_10043"
                width="100"
                height="100"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
      );
}