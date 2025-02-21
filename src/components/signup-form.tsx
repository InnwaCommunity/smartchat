import type { HTMLAttributes } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export function SignUpForm({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  
  const navigate = useNavigate(); // Initialize navigate function

  const handleSignup = (e) => {
    e.preventDefault();
    // Set cookies for isVerified and hasAccount
    Cookies.set('isVerified', 'true', { expires: 7 }); // Expires in 7 days
    Cookies.set('hasAccount', 'true', { expires: 7 }); // Expires in 7 days
    console.log("Navigating to chat...");
    navigate("/chat");
  };
  return (
    <div className={`flex flex-col gap-6 ${className}`} {...props}>
      <div className="overflow-hidden rounded-lg border bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome</h1>
                <p className="text-balance text-gray-500 dark:text-gray-400">
                  Signup to your account
                </p>
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 dark:border-gray-800 dark:bg-gray-950 dark:placeholder:text-gray-500 dark:focus:border-gray-600 dark:focus:ring-gray-800"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 dark:border-gray-800 dark:bg-gray-950 dark:focus:border-gray-600 dark:focus:ring-gray-800"
                />
              </div>
              <button
              onClick={handleSignup}
                type="submit"
                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-600"
              >
                Signup
              </button>
              <div className="text-center text-sm">
                You already created account?{" "}
                <Link
                  to="/login"
                  className="underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-50"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="text-balance text-center text-xs text-gray-500 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-gray-900 dark:text-gray-400 dark:hover:[&_a]:text-gray-50">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
