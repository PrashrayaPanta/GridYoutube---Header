import { Button } from "./ui/button";

export const SubmitBtn = ({
  formik,
  label,
  icon = "fa-arrow-right-to-bracket",
}) => {
  return (
    <Button type="submit" className="w-full" disabled={formik.isSubmitting}>
      <i
        className={`fa-solid ${
          formik.isSubmitting ? "fa-refresh fa-spin" : icon
        } me-2`}
      ></i>
      {label}
    </Button>
  );
};
