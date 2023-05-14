import { Button } from "@mui/material";

const AddButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: (...args: any) => any;
}) => {
  return (
    <Button
      sx={{
        width: "100%",
        mt: 3,
      }}
      size="small"
      variant="contained"
      color="success"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default AddButton;
