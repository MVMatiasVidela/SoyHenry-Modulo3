import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function showSweetAlert(options) {
  return MySwal.fire(options);
}

export async function SweetAlert({
  title,
  text,
  icon,
  showCancelButton,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
}) {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  const result_2 = await MySwal.fire({
    title,
    text,
    icon,
    showCancelButton,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText,
    cancelButtonText,
  });
  if (result_2.isConfirmed) {
    handleConfirm();
  } else {
    handleCancel();
  }
}

export function SuccessAlert(props) {
  return <SweetAlert {...props} icon="succes" />;
}
export function ErrorAlert(props) {
  return <SweetAlert {...props} icon="error" />;
}
export function WarningAlert(props) {
  return <SweetAlert {...props} icon="warning" />;
}
