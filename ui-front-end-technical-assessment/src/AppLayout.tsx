import { Layout, Menu, Typography } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import Members from "./pages/Members";
import { NavLink, Route, Routes } from "react-router-dom";
import Comments from "./pages/Comments";
import SelectOrganization from "./components/SelectOrganization";
import useStore from "./store/store";
import NotFound from "./pages/NotFound";

const AppLayout = () => {
  const orgName = useStore((state) => state.orgName);

  const { Title } = Typography;
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <NavLink to="/">
            <Menu.Item>Comments</Menu.Item>
          </NavLink>
          <NavLink to="/members">
            <Menu.Item>Members</Menu.Item>
          </NavLink>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <SelectOrganization />
        <Title>{orgName.toUpperCase()}</Title>
        <Routes>
          <Route path="/" element={<Comments />} />
          <Route path="members" element={<Members />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <p>Mpilo's Assessment styled using</p>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AppLayout;
