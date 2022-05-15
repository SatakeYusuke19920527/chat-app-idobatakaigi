import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SaModal({ title, resetPasswordByEmail }: { title: string, resetPasswordByEmail: (email: string) => Promise<void> }) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState<string>("")
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={handleOpen}>{title}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" component="p">
            Emailを教えてください。
          </Typography>
          <input type="text" onChange={e => setEmail(e.target.value)} />
          <button
            onClick={() => resetPasswordByEmail(email)}
          >パスワード再発行</button>
        </Box>
      </Modal>
    </div>
  );
}