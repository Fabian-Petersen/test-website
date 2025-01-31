"use client";

import { Button } from "@/components/ui/button";
// import { PasswordToggleInput } from "@/components/PasswordToggleInput";

import useHandleSubmitLogin from "@/app/customHooks/useHandleSubmitLogin";

// $ Importing the Form Components
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";

const LoginForm = () => {
  const { error, form, isPending, success, handleSubmit } =
    useHandleSubmitLogin();

  return (
    <Form {...form}>
      <form
        className="flex flex-col space-y-8 rounded-lg max-w-xl text-gray-500"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col mt-auto space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="tracking-wider">
                <FormLabel
                  htmlFor="email"
                  className="dark:text-gray-300 text-slate-500"
                >
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="email"
                    placeholder="john.doe@email.com"
                    className="text-slate-500 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder-gray-500 dark:border-gray-200 border-slate-400"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs font-normal" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="tracking-wider">
                <FormLabel
                  htmlFor="password"
                  className="placeholder:tracking-wider dark:text-gray-300 text-slate-500"
                >
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    disabled={isPending}
                    placeholder="********"
                    className="text-slate-400 dark:text-gray-200 dark:placeholder-gray-500 focus:border-blue-300 dark:border-gray-200 border-slate-400 placeholder:text-gray-400 outline-none focus:outline-none focus:ring-0 dark:focus:bg-gray-800"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs font-normal" />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            className="bg-[#3a7ff9] dark:text-white hover:bg-blue-400"
            type="submit"
            disabled={isPending}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
