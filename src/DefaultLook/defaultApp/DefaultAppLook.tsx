import Header from "../../components/Header/Header";
import HomeBodyComponent from "../../components/HomeBodyComponent/HomeBodyComponent";
import "./defaultApp.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const images = [
  {
    routePath:'/test',
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero facilis harum dignissimos hic velit laboriosam quia nihil ab, eligendi veritatis! Ipsam, magnam dolores. Eos provident nobis in numquam dolor!",
    date: "24 jan, 2020",
  },
  {
    routePath:'/test1',
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero facilis harum dignissimos hic velit laboriosam quia nihil ab, eligendi veritatis! Ipsam, magnam dolores. Eos provident nobis in numquam dolor!",
    date: "24 jan, 2020",
  },
  {
    routePath:'/test2',
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero facilis harum dignissimos hic velit laboriosam quia nihil ab, eligendi veritatis! Ipsam, magnam dolores. Eos provident nobis in numquam dolor!",
    date: "24 jan, 2020",
  },
  {
    routePath:'/test3',
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero facilis harum dignissimos hic velit laboriosam quia nihil ab, eligendi veritatis! Ipsam, magnam dolores. Eos provident nobis in numquam dolor!",
    date: "24 jan, 2020",
  },
  {
    routePath:'/test4',
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero facilis harum dignissimos hic velit laboriosam quia nihil ab, eligendi veritatis! Ipsam, magnam dolores. Eos provident nobis in numquam dolor!",
    date: "24 jan, 2020",
  },
  {
    routePath:'/test5',
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero facilis harum dignissimos hic velit laboriosam quia nihil ab, eligendi veritatis! Ipsam, magnam dolores. Eos provident nobis in numquam dolor!",
    date: "24 jan, 2020",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeBodyComponent images={images} />,
  },
]);
function DefaultAppLook() {
  return (
    <div className="default-container">
      <div className="default-header">
        <Header></Header>
      </div>
      <div className="default-body">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default DefaultAppLook;
