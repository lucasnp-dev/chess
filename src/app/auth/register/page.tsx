import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import FormLogin from "@/features/form-login";
import FormRegister from "@/features/form-register";

export default function Register() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          <CardTitle>Cadastre-se</CardTitle>
          <CardDescription>Cadastre-se para se tornar um artista</CardDescription>
        </CardHeader>
        <CardContent>
          <FormRegister />
        </CardContent>
        <CardFooter className="hidden justify-end items-center">
          <Button type="submit" form="login">
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}