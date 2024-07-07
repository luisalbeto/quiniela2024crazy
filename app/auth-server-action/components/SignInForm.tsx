import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { setCookie,getCookie } from 'cookies-next';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCallback, useTransition } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1, {
		message: "Contraseña es Requerida",
	}),
});

export default function SignInForm() {
	const router = useRouter()

	const [isPending, startTransition] = useTransition()
	const { error, loading, response, handleSubmit } = useFetch();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onSubmit = useCallback(async (data: z.infer<typeof FormSchema>)=>{
		console.log(data)
		const res= await handleSubmit({ method:'POST', endpoint:'api/users/login', body: data })
	
	   if(res){

			setCookie('token', res.token);
			if(getCookie('token')){
				router.push('/groups');

			}
	   }
	},[
		loading, handleSubmit,
		setCookie,getCookie
		
	])


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
				<Button type="submit" className="w-full flex gap-2">
					Login
					<AiOutlineLoading3Quarters className={cn("animate-spin",{hidden: !isPending})} />
				</Button>
			</form>
		</Form>
	);
}
