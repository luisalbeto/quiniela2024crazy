import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTransition, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const FormSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(3, {
			message: "Password is required.",
		}),
		confirm: z.string().min(3, {
			message: "Password is required.",
		}),
	})
	.refine((data) => data.confirm === data.password, {
		message: "Password did not match",
		path: ["confirm"],
	});
	
export default function RegisterForm() {
	const [isPending, startTransition] = useTransition()

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
			confirm: "",
		},
	});
	const { error, loading, response, handleSubmit} = useFetch();


 function onSubmit(data: z.infer<typeof FormSchema>) {

		handleSubmit({ method:'POST', endpoint:'api/users/register', body: data })
		console.log(response);

		if(error?.message){
			toast({
				variant: "destructive",
				title: "Aviso:",
				description: (
					<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
						<code className="text-white">
							{error.message}
						</code>
					</pre>
				),
			});
		} else {
			toast({
				title: "Aviso:",
				description: (
					<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
						<code className="text-white">
							Registro Exitoso Ahora Inicia Sesion
						</code>
					</pre>
				),
			});
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full space-y-6"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="example@gmail.com"
									{...field}
									type="email"
									onChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Contraseña</FormLabel>
							<FormControl>
								<Input
									placeholder="***********"
									{...field}
									type="password"
									onChange={field.onChange}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirm"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirma la contraseña</FormLabel>
							<FormControl>
								<Input
									placeholder="***********"
									{...field}
									type="password"
									onChange={field.onChange}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full flex gap-2">
					Registrarse
					<AiOutlineLoading3Quarters className={cn("animate-spin", {hidden: !isPending})} />
				</Button>
			</form>
		</Form>
	);
}
