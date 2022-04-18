import { Card } from "antd";

const ErrorCard = (props: { errorParagraph: string }) => {
  return (
    <Card
      title="Oh No, ERROR"
      bordered={false}
      style={{
        width: "auto",
        margin: "auto",
        textAlign: "center",
        whiteSpace: "normal",
      }}
    >
      <img
        src="https://cdn-icons.flaticon.com/png/128/3067/premium/3067501.png?token=exp=1650298308~hmac=912dfc04bf3bcee772d952feb1f2da5c"
        alt="computer-error"
      />
      <p>{props.errorParagraph}</p>
      <p>Please try again later</p>
    </Card>
  );
};

export default ErrorCard;
