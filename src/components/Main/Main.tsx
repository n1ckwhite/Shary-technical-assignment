import styleMain from "./Main.module.css";
import health from "../../icons/health.svg";

export const Main = () => {
  const posts = [
    {
      id: 1,
      src: "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
      price: 2099,
      title: "Робот-мойщик окон Hobot",
      days: 1,
      stats: 4.7,
      status: "new",
    },
    {
      id: 2,
      src: "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
      price: 2099,
      title: "Робот-мойщик окон Hobot",
      days: 1,
      stats: 4.7,
      status: "new",
    },
    {
      id: 3,
      src: "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
      price: 2099,
      title: "Робот-мойщик окон Hobot",
      days: 1,
      stats: 4.7,
      status: "new",
    },
    {
      id: 4,
      src: "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
      price: 2099,
      title: "Робот-мойщик окон Hobot",
      days: 1,
      stats: 4.7,
      status: "new",
    },
    {
      id: 5,
      src: "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
      price: 2099,
      title: "Робот-мойщик окон Hobot",
      days: 1,
      stats: 4.7,
      status: "new",
    },
    {
      id: 6,
      src: "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
      price: 2099,
      title: "Робот-мойщик окон Hobot",
      days: 1,
      stats: 4.7,
      status: "new",
    },
    {
      id: 7,
      src: "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
      price: 2099,
      title: "Робот-мойщик окон Hobot",
      days: 1,
      stats: 4.7,
      status: "new",
    },
    {
      id: 8,
      src: "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
      price: 2099,
      title: "Робот-мойщик окон Hobot",
      days: 1,
      stats: 4.7,
      status: "new",
    },
  ];
  return (
    <main className={styleMain.main}>
      <ul className={styleMain.ul}>
        <li className={styleMain.li}>
          <p className={styleMain.p}>Фильтр</p>
          <svg
            className={styleMain.icon}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
          >
            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
              <path
                d="M 24.25 90 c -0.896 0 -1.792 -0.342 -2.475 -1.025 c -1.367 -1.366 -1.367 -3.583 0 -4.949 L 60.8 45 L 21.775 5.975 c -1.367 -1.367 -1.367 -3.583 0 -4.95 c 1.367 -1.366 3.583 -1.366 4.95 0 l 41.5 41.5 c 1.367 1.366 1.367 3.583 0 4.949 l -41.5 41.5 C 26.042 89.658 25.146 90 24.25 90 z"
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
                fill="#848282"
              />
            </g>
          </svg>
        </li>
        <li className={styleMain.li}>
          <p className={styleMain.p}>Сортировать по</p>
          <svg
            className={styleMain.icon}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
          >
            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
              <path
                d="M 24.25 90 c -0.896 0 -1.792 -0.342 -2.475 -1.025 c -1.367 -1.366 -1.367 -3.583 0 -4.949 L 60.8 45 L 21.775 5.975 c -1.367 -1.367 -1.367 -3.583 0 -4.95 c 1.367 -1.366 3.583 -1.366 4.95 0 l 41.5 41.5 c 1.367 1.366 1.367 3.583 0 4.949 l -41.5 41.5 C 26.042 89.658 25.146 90 24.25 90 z"
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
                fill="#848282"
              />
            </g>
          </svg>
        </li>
      </ul>
      <ul className={styleMain.posts}>
        {posts.map((i) => {
          return (
            <li className={styleMain.post} key={i.id}>
              <img src={i.src} alt="image" className={styleMain.image} />
              <div
                onClick={(e) =>
                  e.currentTarget.classList.toggle(styleMain.healthActive)
                }
                className={styleMain.health}
              ></div>
              <p className={styleMain.title}>{i.title}</p>
              <p className={styleMain.subtitle}>
                {i.price} RUB / {i.days} день
              </p>
              <p className={styleMain.status}>
                <svg
                  className={styleMain.star}
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="256"
                  height="256"
                  viewBox="0 0 256 256"
                >
                  <defs></defs>
                  <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                    <path
                      d="M 70.845 87.952 c -0.506 0 -1.015 -0.122 -1.484 -0.368 L 45.551 75.065 c -0.346 -0.182 -0.758 -0.182 -1.102 0 L 20.64 87.583 c -1.082 0.568 -2.367 0.476 -3.354 -0.243 c -0.987 -0.718 -1.473 -1.911 -1.267 -3.114 l 4.547 -26.511 c 0.066 -0.384 -0.062 -0.776 -0.341 -1.049 L 0.964 37.891 c -0.874 -0.853 -1.183 -2.104 -0.806 -3.265 c 0.377 -1.162 1.362 -1.992 2.571 -2.167 l 26.619 -3.868 c 0.386 -0.056 0.72 -0.298 0.893 -0.648 L 42.144 3.822 C 42.685 2.727 43.779 2.047 45 2.046 c 1.221 0 2.315 0.68 2.856 1.775 c 0 0 0 0 0 0 L 59.76 27.943 c 0.173 0.349 0.506 0.591 0.893 0.647 l 26.618 3.868 c 1.209 0.176 2.194 1.006 2.571 2.168 c 0.377 1.161 0.068 2.412 -0.806 3.264 L 69.774 56.666 c -0.279 0.272 -0.407 0.664 -0.341 1.048 l 4.547 26.512 c 0.206 1.204 -0.279 2.397 -1.267 3.115 C 72.155 87.746 71.502 87.952 70.845 87.952 z M 45 72.93 c 0.509 0 1.019 0.122 1.482 0.366 l 23.809 12.518 c 0.408 0.214 0.873 0.18 1.247 -0.091 c 0.373 -0.271 0.549 -0.705 0.472 -1.159 l -4.547 -26.511 c -0.178 -1.032 0.164 -2.086 0.915 -2.818 L 87.64 36.458 c 0.33 -0.322 0.442 -0.775 0.3 -1.214 s -0.5 -0.74 -0.956 -0.806 L 60.364 30.57 c -1.037 -0.151 -1.934 -0.802 -2.397 -1.742 L 46.063 4.707 c -0.205 -0.413 -0.602 -0.66 -1.063 -0.66 c -0.461 0 -0.858 0.247 -1.062 0.66 L 32.034 28.828 c -0.464 0.94 -1.361 1.591 -2.398 1.742 L 3.017 34.438 c -0.457 0.066 -0.813 0.367 -0.956 0.806 c -0.143 0.439 -0.031 0.893 0.3 1.214 l 19.262 18.776 c 0.75 0.732 1.093 1.785 0.916 2.818 l -4.547 26.511 c -0.078 0.455 0.098 0.888 0.471 1.159 c 0.373 0.271 0.841 0.305 1.249 0.09 l 23.808 -12.517 C 43.982 73.052 44.491 72.93 45 72.93 z"
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
                {i.stats} {i.status === "new" ? "Новый" : "Старый"}
              </p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
