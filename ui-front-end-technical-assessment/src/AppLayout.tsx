import { Divider, Layout, Menu, Typography } from "antd";
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
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <NavLink to="/">Comments</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/members"></NavLink>
            Members
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <section className="text-center">
          <SelectOrganization />
          <Title>{orgName.toUpperCase()}</Title>
        </section>
        <Divider />
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
