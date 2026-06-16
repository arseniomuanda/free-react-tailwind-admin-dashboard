import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import TwoStepVerificationForm from "../../components/auth/TwoStepVerificationForm";

export default function TwoStepVerification() {
  return (
    <>
      <PageMeta
        title="Two Step Verification | TailAdmin - React.js Admin Dashboard Template"
        description="Two step verification page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <AuthLayout>
        <TwoStepVerificationForm />
      </AuthLayout>
    </>
  );
}
