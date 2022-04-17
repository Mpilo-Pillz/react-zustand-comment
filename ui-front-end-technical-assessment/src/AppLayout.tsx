import { Layout, Menu } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import Members from "./pages/Members";
import { Link, Route, Routes } from "react-router-dom";
import Comments from "./pages/Comments";
import SelectOrganization from "./components/SelectOrganization";
import useStore from "./store/store";

const AppLayout = () => {
  const orgName = useStore((state) => state.orgName);
  const pages = ["Comments", "Members"];
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          {pages.map((page: string, index) => {
            const key = index + 1;
            return (
              <Menu.Item key={key}>
                <Link to={page.toLowerCase()}>{page}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <h1>{orgName}</h1>
        <Routes>
          <Route path="/" element={<SelectOrganization />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AppLayout;
