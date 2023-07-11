'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
    name: z
        .string()
        .nonempty('Nome não pode ser vazio')
        .min(3, 'Mínimo 3 caracteres'),
    idade: z.string(),
})

type Inputs = z.infer<typeof formSchema>

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (data: Inputs) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>Login1</p>
            <input
                type="text"
                {...register('name')}
                className="border border-zinc-950 p-4"
            />
            {errors.name && (
                <span className="text-red-400">{errors.name.message}</span>
            )}

            <input
                type="string"
                {...register('idade')}
                className="border border-zinc-950"
            />

            <input type="submit" />
        </form>
    )
}
