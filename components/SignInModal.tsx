
"use client"

import { useState, useRef, useEffect } from "react"
import { Pencil, X } from "lucide-react"
import Image from "next/image"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { otpSendApi, otpVerifyApi } from "@/apiConfig/authApi"
import { toast } from "react-toastify"

interface SignInModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
    const [step, setStep] = useState<"mobile" | "otp">("mobile")
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const [mobile, setMobile] = useState("")
    const [error, setError] = useState("")
    const [timer, setTimer] = useState(30) // 30 seconds countdown
    const [isActive, setIsActive] = useState(true)
    console.log(mobile)
    console.log(step)
    console.log(otp)
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    console.log(isLoading)


    useEffect(() => {
        let interval: NodeJS.Timeout
        if (isActive && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1)
            }, 1000)
        } else if (timer === 0) {
            setIsActive(false)
        }
        return () => clearInterval(interval)
    }, [isActive, timer])
    if (!isOpen) return null


    // const handleResend = () => {
    //     setTimer(30) // reset timer
    //     setIsActive(true)
    //     console.log("OTP resent ✅")
    // }


    const handleOtpChange = (value: string, index: number) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp]
            newOtp[index] = value
            setOtp(newOtp)

            if (value && index < 5) {
                inputsRef.current[index + 1]?.focus()
            }
        }
    }
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value.replace(/\D/g, ""); // allow only digits

            // Prevent typing if first digit is not 6–9
            if (value.length === 1 && !/^[6-9]/.test(value)) {
                setError("Mobile number must start with 6, 7, 8, or 9");
                return; 
            }

            // Allow only up to 10 digits
            if (value.length <= 10) {
                setMobile(value);
            }

            // Validation messages
            if (value.length === 0) {
                setError("");
            } else if (value.length < 10) {
                setError("Mobile number must be 10 digits");
            } else {
                setError("");
            }
            };


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus()
        }
    }

    const handleClose = () => {
        setStep("mobile");
        setOtp(Array(6).fill(""));
        setMobile("");
        setError("");
        setTimer(30);
        setIsActive(true);
        setIsFocused(false);
        onClose();
    };
    
    // const otpSend = () => {
    //     const payload = {
    //         mobile: mobile
    //     }
    //     const postApi = otpSendApi(payload)
    // }

const handleSendOtp = async () => {
  console.log("clicked------------ onsubmit");

    const payload = {mobile};

  try {
      const response = await otpSendApi(payload);
      console.log(response);

    if (response?.status === 200) {
        toast.success(response?.data?.msg || "OTP sent successfully!");
        setStep("otp");
      // You can also set step/state here if needed
    } else {
      toast.error("Failed to send OTP. Please try again.");
    }
  } catch (error: unknown) {
    console.error("OTP Send Error:", error);

    if (error instanceof Error) {
      toast.error(error.message || "Something went wrong. Please try again.");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  } finally {
      
  }
    };
    
 const handleOtpVerify = async () => {
  setIsLoading(true);
     const payload = {
         mobile,
         otp: otp.join(""),
         ip: "123"
     };

  try {
    const response = await otpVerifyApi(payload);
    if (response?.status === 200) {
      toast.success("OTP verified successfully!");

      if (typeof window !== "undefined") {
        localStorage.setItem("access-token", response?.data?.result?.tokens?.accessToken);
        localStorage.setItem("userId", response?.data?.result?.user?._id);
        localStorage.setItem("mobile", response?.data?.result?.user?.mobile);
        localStorage.setItem("userName", response?.data?.result?.user?.role?.name);
      }

      handleClose();
    } else {
      toast.error("Failed to verify OTP. Please try again.");
    }
  } catch (error: unknown) {
    console.error("OTP Send Error:", error);
    toast.error("Something went wrong. Please try again.");
  } finally {
    setStep("mobile");
    setIsLoading(false);
  }
};




    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl  sm:p-5 relative mx-3 sm:mx-5">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    <X size={20} className="hover:cursor-pointer" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Left: Image */}
                    <div className="relative w-full h-40 sm:h-96 md:h-[470px]">
                        <Image
                            src="/images/auth-banner.png"
                            alt="Sign In Banner"
                            fill
                            className="object-cover rounded-md"
                            priority
                        />
                    </div>

                    {/* Right: Form */}
                    <div className="flex flex-col justify-start px-2 sm:px-4">
                        <div className="text-center">
                            <Image
                                src="/images/logo.png"
                                alt="XL1 SuperSports Logo"
                                width={220}
                                height={220}
                                className="mx-auto object-contain mt-4 sm:mt-10"
                                priority
                            />
                        </div>

                        {/* Step 1: Mobile Number */}
                        {step === "mobile" && (
                            <div className="mt-5 sm:mt-7 border border-gray-40 rounded-lg p-4 sm:p-5">
                                <h2 className="font-bold text-xl sm:text-2xl">Welcome</h2>
                                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                                    (New users can sign up as a guest using their mobile number)
                                </p>

                                 <div className="relative grid w-full max-w-sm items-center gap-2 mt-3">
                                    {/* Floating Label */}
                                    <label
                                        htmlFor="mobile"
                                        className={`absolute left-3 transition-all duration-300 pointer-events-none
                                        ${
                                            mobile || isFocused
                                            ? "-top-2 text-xs text-gray-600 bg-white px-1"
                                            : "top-2 text-sm text-gray-400"
                                        }`}
                                    >
                                        Mobile Number
                                    </label>

                                    <div className="w-full">
                                        <Input
                                        type="tel"
                                        id="mobile"
                                        className="w-full !outline-none"
                                        value={mobile}
                                        maxLength={10}
                                        inputMode="numeric"
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        onChange={handleChange}
                                        />
                                        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
                                    </div>
                                    </div>

                                <p className="text-[10px] sm:text-xs text-muted-foreground mt-4">
                                    By continuing, you agree to X11’s{" "}
                                    <span className="text-red-700 underline underline-offset-4">
                                        Terms of Use
                                    </span>{" "}
                                    &{" "}
                                    <span className="text-red-700 underline underline-offset-4">
                                        Privacy Policy
                                    </span>
                                </p>
                                <Button
                                    className="w-full text-white bg-red-700 mt-4 sm:mt-5 cursor-pointer hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={!mobile || mobile.length < 10 || error !== ""}
                                    onClick={() => handleSendOtp()}
                                >
                                    Continue
                                </Button>
                            </div>
                        )}

                        {/* Step 2: OTP Verification */}
                        {step === "otp" && (
                            <div className="mt-5 sm:mt-7 border border-gray-40 rounded-lg p-4 sm:p-5 text-center">
                                {/* <h2 className="font-bold text-base sm:text-lg text-start pl-2 sm:pl-5">
                                    OTP
                                </h2> */}
                                {/* <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-xs sm:max-w-md mx-auto">
                                    We&apos;ve sent a One Time Password (OTP) to the mobile number{" "}
                                    <span className="text-red-600 font-medium">
                                        +91 9878656434
                                    </span>. Please enter it to complete verification.
                                </p> */}
                                <p className="text-sm text-muted-foreground">
                                    We&apos;ve sent a One Time Password (OTP) to the mobile number{" "}
                                    <span className="text-red-600 font-medium">
                                        {mobile}
                                    </span>
                                    <button
                                        onClick={() => setStep("mobile")}
                                        className="ml-2 cursor-pointer text-red-700"
                                    >
                                        <Pencil
                                        size={14}
                                        className="transition-transform duration-200 transform hover:scale-125 hover:text-black cursor-pointer"
                                        />
                                    </button>
                                    <br />
                                    Please enter it to complete verification.
                                </p>

                                {/* OTP Inputs */}
                                <div className="flex justify-center gap-1 sm:gap-2 mt-4 sm:mt-5">
                                    {otp.map((digit, index ) => (
                                       <Input
                                key={index}
                                ref={(el: HTMLInputElement | null) => {
                                    if (inputsRef.current) {
                                        inputsRef.current[index] = el;
                                    }
                                    }}
                                type="tel"
                                maxLength={1}
                                value={digit}
                                className="w-10 text-center"
                                onChange={(e) => handleOtpChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                />
                                    ))}
                                </div>

                                {/* Resend */}
                                {/* <button className="text-xs sm:text-sm text-red-600 underline mt-3">
                                    Resend OTP
                                </button> */}
                                <div>
                                    {isActive ? (
                                        <p className="text-xs sm:text-sm text-red-600 mt-3">
                                            Resend OTP in {timer}s
                                        </p>
                                    ) : (
                                        <button
                                            onClick={handleSendOtp}
                                            className="text-xs sm:text-sm hover:text-red-600 underline mt-3 hover:cursor-pointer"
                                        >
                                            Resend OTP
                                        </button>
                                    )}
                                </div>

                                {/* Login Button */}
                                <Button onClick={handleOtpVerify} className="w-full text-white bg-red-700 mt-4 sm:mt-5">
                                    Login
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}
