import React, {useEffect} from 'react';
import GlobalStyles, {Spacer, Wrapper} from "./GlobalStyles";
import Header from "./Components/Header/Header";
import FilterBar from "./Components/FilterBar/FilterBar";
import Login from "./Components/Login/Login";
import {useTypedSelector} from "./hook/useTypedSelector";
import Footer from "./Components/Footer/Footer";
import Tasks from "./Components/Task/Tasks";
import Pagination from "./Components/Pagination/Pagination";
import {useActions} from "./hook/useActions";
import Notifications from "./Components/Notifications/Notifications";

function App() {
    const { loginModal } = useTypedSelector(state => state.user);
    const {checkUserActionCreator} = useActions();
    useEffect( () => { checkUserActionCreator() }, [] );  // eslint-disable-line react-hooks/exhaustive-deps
    return (
      <>
          <GlobalStyles/>
          <Header/>
          <Wrapper>
              <FilterBar/>
              <Spacer size={20}/>
              <Tasks/>
              <Spacer size={30}/>
              <Pagination/>
              <Notifications/>
          </Wrapper>
          <Footer/>
          {loginModal && <Login/>}
      </>
    );
}

export default App;
