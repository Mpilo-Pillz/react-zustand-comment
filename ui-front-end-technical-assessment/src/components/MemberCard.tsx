import { Card, Avatar } from "antd";
import { UserSwitchOutlined, UserOutlined } from "@ant-design/icons";

type MemberCardProps = {
  imgUrl: string;
  imgAltText: string;
  cardTitle: string;
  cardDescription: string;
  numOfFollowers: number;
  numOfFollowing: number;
};
const { Meta } = Card;

const MemberCard = (props: MemberCardProps) => {
  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={<img alt={props.imgAltText} src={props.imgUrl} />}
        actions={[
          <span>
            <UserSwitchOutlined /> {props.numOfFollowing}
          </span>,
          <span>
            {" "}
            <UserOutlined /> {props.numOfFollowers}
          </span>,
        ]}
      >
        <Meta
          avatar={<Avatar src={props.imgUrl} />}
          title={props.cardTitle}
          description={props.cardDescription}
        />
      </Card>
    </>
  );
};

export default MemberCard;
