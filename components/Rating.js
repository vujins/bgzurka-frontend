const currentColor = 'currentColor';

const starfill = i => (
  <svg
    className="bi bi-star-fill"
    width="32"
    height="32"
    viewBox="0 0 20 20"
    fill={currentColor}
    xmlns="http://www.w3.org/2000/svg"
    key={i}
  >
    <path d="M5.612 17.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.33-.314-.16-.888.282-.95l4.898-.696 2.184-4.327c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L10 15.187l-4.389 2.256z" />
  </svg>
);
const starhalf = i => (
  <svg
    className="bi bi-star-half"
    width="32"
    height="32"
    viewBox="0 0 20 20"
    fill={currentColor}
    xmlns="http://www.w3.org/2000/svg"
    key={i}
  >
    <path
      fillRule="evenodd"
      d="M7.354 7.119l2.184-4.327A.516.516 0 0110 2.5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0118 8.32a.55.55 0 01-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L10 15.187l-4.389 2.256a.52.52 0 01-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73-3.522-3.356a.55.55 0 01-.172-.403.59.59 0 01.084-.302.513.513 0 01.37-.245l4.898-.696zM10 14.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 01.163-.505l2.907-2.77-4.053-.576a.525.525 0 01-.393-.288l-1.847-3.658-.001.003v9.8z"
      clipRule="evenodd"
    />
  </svg>
);
const star = i => (
  <svg
    className="bi bi-star"
    width="32"
    height="32"
    viewBox="0 0 20 20"
    fill={currentColor}
    xmlns="http://www.w3.org/2000/svg"
    key={i}
  >
    <path
      fillRule="evenodd"
      d="M4.866 16.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696-2.184-4.327a.513.513 0 00-.927 0L7.354 7.12l-4.898.696c-.441.062-.612.636-.282.95l3.522 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L3.71 8.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658c.08.157.226.264.393.288l4.053.575-2.907 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z"
      clipRule="evenodd"
    />
  </svg>
);

const getStars = rating => {
  const stars = [];
  for (let i = 1; i < 6; i++) {
    // console.log(`${i}-${rating}=${i - rating}`);
    if (rating >= i) stars.push(starfill(i));
    else if (rating < i && i - rating > 0 && i - rating < 0.5)
      stars.push(starhalf(i));
    else stars.push(star(i));
  }
  return stars;
};

const Rating = props => {
  return <>{getStars(props.rating)}</>;
};

export default Rating;
