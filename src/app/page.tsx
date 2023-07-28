import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import FormLogin from '@/features/form-login'
import { ModeToggle } from '@/features/mode-toggle'

export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Sign in for a better experience</CardDescription>
        </CardHeader>
        <CardContent>
          <FormLogin />
        </CardContent>
        <CardFooter className="flex justify-end items-center">
          <Button type="submit" form="login">
            Sign In
          </Button>
        </CardFooter>
      </Card>
      <ModeToggle className="absolute bottom-4 right-4" />
    </div>
  )
}
