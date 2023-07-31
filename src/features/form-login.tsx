'use client'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FcGoogle } from 'react-icons/fc'
import { Fragment } from 'react'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

const formLoginSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .nonempty('Username is empty'),
})

type FormLoginType = z.infer<typeof formLoginSchema>

export default function FormLogin() {
  const form = useForm<FormLoginType>({
    resolver: zodResolver(formLoginSchema),
  })

  function onSubmit(values: FormLoginType) {
    console.log(values)
  }

  return (
    <Fragment>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
          id="login"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="lucas" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="mt-4">
        <Button
          variant="outline"
          className="gap-4 w-full"
          onClick={() => signIn()}
        >
          <FcGoogle />
          Continue with Google
        </Button>
      </div>
    </Fragment>
  )
}
