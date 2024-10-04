import IntroComponent from "../../components/HomePageBody/IntroComponent/index";
import Services from "../../components/HomePageBody/Services/index";
import Stylist from "../../components/HomePageBody/Stylist/index";
import News from "../../components/HomePageBody/News/index";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setFirstLogin } from "../../feature/authentication";
import { useEffect } from "react";
import Menu from "../../components/Header/Avatar/Menu/index";

const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const isFirstLogin = useSelector((state) => state.user.isFirstLogin);

  useEffect(() => {
    if (isFirstLogin) {
      toast.success(`Welcome ${username}`);
      dispatch(setFirstLogin(false));
    }
  }, [dispatch, isFirstLogin, username]);
  return (
    <>
      <ToastContainer />
      {/* <Menu /> */}
      <IntroComponent />
      <Services />
      <Stylist />
      <News />
    </>
  );
};

export default Home;
