import { JSX } from "react/jsx-runtime";
import Project from "../../components/BasicMoreOptionsComponents/Project";
import Header from "../../components/Header/Header";
import HomeBodyComponent from "../../components/HomeBodyComponent/HomeBodyComponent";
import "./defaultApp.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "../../components/BasicMoreOptionsComponents/AboutUs";
import Vision from "../../components/BasicMoreOptionsComponents/Vision";
import Contacts from "../../components/BasicMoreOptionsComponents/Contacts";
import Persons from "../../components/BasicMoreOptionsComponents/Persons";
import SocialMedia from "../../components/BasicMoreOptionsComponents/SocialMedia";
import Address from "../../components/BasicMoreOptionsComponents/Address";
import Footer from "../../components/BasicMoreOptionsComponents/Footer/Footer";

const images = [
  {
    routePath: "/test",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero facilis harum dignissimos hic velit laboriosam quia nihil ab, eligendi veritatis! Ipsam, magnam dolores. Eos provident nobis in numquam dolor!",
    date: "24 jan, 2020",
  },
  {
    routePath: "/test1",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero facilis harum dignissimos hic velit laboriosam quia nihil ab, eligendi veritatis! Ipsam, magnam dolores. Eos provident nobis in numquam dolor!",
    date: "24 jan, 2020",
  },
  {
    routePath: "/test2",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero facilis harum dignissimos hic velit laboriosam quia nihil ab, eligendi veritatis! Ipsam, magnam dolores. Eos provident nobis in numquam dolor!",
    date: "24 jan, 2020",
  },
  {
    routePath: "/test3",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero facilis harum dignissimos hic velit laboriosam quia nihil ab, eligendi veritatis! Ipsam, magnam dolores. Eos provident nobis in numquam dolor!",
    date: "24 jan, 2020",
  },
  {
    routePath: "/test4",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero facilis harum dignissimos hic velit laboriosam quia nihil ab, eligendi veritatis! Ipsam, magnam dolores. Eos provident nobis in numquam dolor!",
    date: "24 jan, 2020",
  },
  {
    routePath: "/test5",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero facilis harum dignissimos hic velit laboriosam quia nihil ab, eligendi veritatis! Ipsam, magnam dolores. Eos provident nobis in numquam dolor!",
    date: "24 jan, 2020",
  },
];

const imageRoutepaths: { path: string; element: JSX.Element }[] = [];
images.forEach((image) => {
  const routePath = {
    path: image.routePath,
    element: (
      <><div className="default-header">
        <Header></Header>
      </div><div className="default-body"> <Project
        imageSrc={image.imgSrc}
        description={image.content}
        date={image.date} /></div></>
    ),
  };
  imageRoutepaths.push(routePath);
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <><div className="default-header">
      <Header></Header>
    </div><div className="default-body"> <HomeBodyComponent images={images} />    </div></>,
  },
  {
    path: "/aboutus",
    element: <><div className="default-header">
      <Header></Header>
    </div><div className="default-body"> <AboutUs />    </div></>,
  },
  {
    path: "/vision",
    element: <><div className="default-header">
      <Header></Header>
    </div><div className="default-body"> <Vision content="vision" />    </div></>,
  },
  {
    path: "/mission",
    element: <><div className="default-header">
      <Header></Header>
    </div><div className="default-body"> <Vision content="mission" /></div></>,
  },
  {
    path: "/contacts",
    element: <><div className="default-header">
      <Header></Header>
    </div><div className="default-body"><Contacts /></div></>,
  },
  {
    path: "/directors",
    element: <><div className="default-header">
      <Header></Header>
    </div><div className="default-body">
        <Persons
          persons={[
            { name: "Ashik", role: "MD", place: "Kerala" },
            { name: "Ashik", role: "MD", place: "Kerala" },
          ]} />
      </div></>,
  },
  {
    path: "/others",
    element: <><div className="default-header">
      <Header></Header>
    </div><div className="default-body">
        <Persons
          persons={[
            { name: "Ashik", role: "MD", place: "Kerala" },
            { name: "Ashik", role: "MD", place: "Kerala" },
            { name: "Ashik", role: "MD", place: "Kerala" },
          ]} />

      </div></>,
  },
  {
    path: "/socialmedia",
    element: <><div className="default-header">
      <Header></Header>
    </div><div className="default-body">
        <SocialMedia
          mediaHandle={[
            { name: "Instagram", url: "abc@instagram.com" },
            { name: "Telegram", url: "abc@instagram.com" },
          ]} />
      </div></>,
  },
  {
    path: "/address",
    element: <><div className="default-header">
      <Header></Header>
    </div><div className="default-body">
        <Address
          addresses={[
            {
              localAddress: "sdhjds sdnds dsjhdsj",
              broaderAddress: "xhvbzxhbhvzhx",
              location: "Kerala",
            },
            {
              localAddress: "sdhjds sdnds dsjhdsj",
              broaderAddress: "xhvbzxhbhvzhx",
              location: "Kerala",
            },
          ]} />
      </div></>,
  },
  ...imageRoutepaths,
]);

function DefaultAppLook() {
  return (
    <><div className="default-container">
      <RouterProvider router={router}></RouterProvider>
    </div></>
  );
}

export default DefaultAppLook;
