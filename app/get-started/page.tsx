"use client"

import PageContent from '_components/global/PageContent';
import { Metadata } from 'next';
import React from 'react';
import sharedMetadata from '_shared/Meta';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '_components/ui/form';
import * as z from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '_components/ui/input';
import { registerFormSchema } from '../../types';
import { registerUser } from '_actions/register';
import { Button } from '_components/ui/button';
import CustomImage from '_components/common/Image';
// export const metadata: Metadata = {
//     ...sharedMetadata,
//     title: "Get started"
// }

const page = () => {
    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    function onSubmit(values: z.infer<typeof registerFormSchema>) {
        console.log(values)
    }

    return (
        <PageContent>
            <div className='flex flex-col w-full min-h-[40rem] md:flex-row mt-9'>
                <div className='md:flex-1 relative'>
                    {/* <CustomImage alt='formImage' className='h-full w-full' src='/images/new/6.png' /> */}
                </div>
                <div className='flex-1 flex flex-col gap-10 p-6 md:px-12 mb-6'>
                    <div>
                        <h1 className='section-heading'>Create Your Account</h1>
                    </div>
                    <div>
                        <span className='section-subHeading'>Welcome! Enter your details and start shearing your art with the community.</span>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <Input placeholder="Username" {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem id="email">
                                        <Input placeholder="E-mail" {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem id='password'>
                                        <Input placeholder="Username" {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem id='confirmPassword'>
                                        <Input placeholder="Confirm password" {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className='py-6 px-2 w-full bg-blue-600 dark:bg-blue-600 text-white dark:text-white'>Create account</Button>
                        </form>
                    </Form>

                </div>
            </div>

        </PageContent>
    );
};

export default page;