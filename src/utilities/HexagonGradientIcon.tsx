//fill icon

// const HexagonGradientIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 100 100"
//       className="w-6 h-6"
//     >
//       <defs>
//         <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" style={{ stopColor: '#D946EF', stopOpacity: 1 }} />
//           <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
//         </linearGradient>
//       </defs>
//       <polygon
//         points="50,1 93,25 93,75 50,99 7,75 7,25"
//         fill="url(#grad1)"
//       />
//     </svg>
//   );

//   export default HexagonGradientIcon;






const HexagonGradientIcon = ({ sortType }: { sortType: string }) => (

  <>
    {sortType === "fill" ?
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-6 h-6"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#D946EF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <polygon
          points="50,1 93,25 93,75 50,99 7,75 7,25"
          fill="url(#grad1)"
        />
      </svg>
      :
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#grad1)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-hexagon"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D946EF" stopOpacity={1} />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity={1} />
          </linearGradient>
        </defs>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
      </svg>
    }
  </>
);

export default HexagonGradientIcon;
