import { Box } from "@mui/material";
import "../styles/KeMessage.css";

export interface KeMessageProps {
  key: number;
  createdBy: string;
  content: string;
  createdAt: number;
}

const KeMessage = (props: KeMessageProps) => {
  const key = props.key;
  const createdBy = props.createdBy;
  const content = props.content;
  const createdAt = props.createdAt;

  return (
    <div className="message-wrapper">
      <ul key={key}>
        <div className="createdBy">{createdBy}</div>
        <Box sx={{ borderColor: "grey.500", borderRadius: "16px" }}>
          <div className="content">{content}</div>
        </Box>
      </ul>
    </div>
  );
};

export default KeMessage;
