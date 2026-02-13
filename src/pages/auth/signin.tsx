import { useEffect, useState } from "react";

const LoginPage = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");      // 실제 비밀번호 저장
    const [displayPhoneNumber, setDisplayPhoneNumber] = useState(""); // 화면에 보여줄 전화번호 저장
    const [displayPassword, setDisplayPassword] = useState(""); // 화면에 보여줄 별표 저장
    const [errorMessage, setErrorMessage] = useState(false);     
    const [errorMessageTxt, setErrorMessageTxt] = useState("");     

    // useEffect(() => {
    //     const auth = getAuth();

    //     if (user) {
    //         const currentUser = auth.currentUser;

    //         if (currentUser) {
    //             setUserInfo(currentUser).then(data => {
    //                 if (data?.grade === "정회원") {
    //                     router.replace("/schedule");
    //                 }
    //             });
    //         }
    //     }
    // }, [user, router]);


    const handleLogin = async (): Promise<void> => {
    };

    const getErrorMessage = (errorCode: string): string => {
        switch (errorCode) {
            case "auth/user-not-found":
                return "휴대폰 번호 또는 비밀번호가 잘못 입력됐어요. 다시 확인해 주세요.";
            case "auth/wrong-password":
                return "휴대폰 번호 또는 비밀번호가 잘못 입력됐어요. 다시 확인해 주세요.";
            case "auth/too-many-requests":
                return "로그인 시도가 너무 많습니다. 잠시 후 다시 시도해주세요.";
            default:
                return "로그인 중 오류가 발생했습니다. 다시 시도해주세요.";
        }
    };

    return (
        <>
            <div className="pt-[40px] flex flex-col min-h-screen bg-white">
                <div className="flex items-center justify-center flex-1 px-6">
                    <div className="w-full max-w-md">
                        {/* 로고 */}
                        <div className="flex tems-center justify-center mb-[38px] text-logoText">
                            ㄹㅗㄹㅎㅓㅂㅡ
                        </div>

                        {/* 카카오톡 로그인 */}
                        <div className="mb-8 ">
                            <div className="relative mb-[14px]">
                                <div
                                    onClick={() => {
                                        console.log('clicked');
                                    }}
                                    className={`w-full max-w-[460px] h-[54px] px-[14px] flex items-center justify-center rounded-[8px] border-[0.8px] text-bodyB1B18 bg-yellow outline-none transition-all cursor-pointer hover:border-gray-80`}
                                >
                                    카카오톡으로 로그인하기
                                </div>
                            </div>

                            {/* 이메일 로그인 */}
                            <div className="relative mb-[14px]">
                                <div
                                    onClick={() => {
                                        console.log('clicked');
                                    }}
                                    className={`w-full max-w-[460px] h-[54px] px-[14px] flex items-center justify-center rounded-[8px] border-[0.8px] text-bodyB1B18 bg-white outline-none transition-all cursor-pointer hover:border-gray-80`}
                                >
                                이메일로 로그인하기
                                </div>
                            </div>

                            {errorMessage && (
                                <div className="font-['Pretendard'] mt-[14px] font-normal text-alert-50 text-[14px] leading-[140%] -tracking-[0.02em]">
                                    {errorMessageTxt}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;