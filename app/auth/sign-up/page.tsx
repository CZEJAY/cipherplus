import { UserAuthForm } from "@/components/auth/register";


export default function AuthenticationPage() {
  return (
    <>
      <div className="lg:p-8">
        <UserAuthForm
          label="Enter your email below to create your account"
          showfooter="true"
          showsocial="true"
        />
      </div>
    </>
  );
}
