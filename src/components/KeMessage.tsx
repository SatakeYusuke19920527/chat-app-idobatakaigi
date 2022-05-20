import { Box } from "@mui/material";
import "../styles/KeMessage.css";

export interface KeMessageProps {
  createdBy: string;
  content: string;
  createdAt: number;
  isOwnMessage: boolean;
}

const KeMessage = (props: KeMessageProps) => {
  const createdBy = props.createdBy;
  const content = props.content;
  const createdAt = props.createdAt;
  const isOwnMessage = props.isOwnMessage;

  return (
    <div className="root">
      <div
        className={
          isOwnMessage ? "message-wrapper-own" : "message-wrapper-others"
        }
      >
        <div className="createdBy">{createdBy}</div>
        <Box
          className="content"
          sx={{
            backgroundColor: "#dbebc4",
            borderRadius: "10px",
          }}
        >
          {content}
        </Box>
      </div>
    </div>
  );
};

export default KeMessage;
